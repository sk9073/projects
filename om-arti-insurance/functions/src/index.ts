
import { onSchedule } from "firebase-functions/v2/scheduler";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { defineSecret } from "firebase-functions/params";
import { checkExpiringRenewals, checkPendingQuotes } from "./utils";

initializeApp();
const db = getFirestore();
const sendGridApiKey = defineSecret("SENDGRID_API_KEY");

export const sendReminderEmail = onSchedule(
  {
    schedule: "every day 9:00",
    timeZone: "Asia/Kolkata",
    secrets: [sendGridApiKey],
  },
  async (event) => {
    const today = new Date();
    const next10Days = new Date();
    const toEmail = "kumarc64@gmail.com";
    next10Days.setDate(today.getDate() + 5);

    // 1. Check Expiring Renewals
    await checkExpiringRenewals(db, today, next10Days, toEmail, sendGridApiKey);

    // 2. Check Pending Quotes
    await checkPendingQuotes(db, today, toEmail, sendGridApiKey);
  }
);
