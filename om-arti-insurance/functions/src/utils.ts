

import * as logger from "firebase-functions/logger";
import sgMail from "@sendgrid/mail";
import { SecretParam } from "firebase-functions/params";
import { Firestore } from "firebase-admin/firestore";

export const checkExpiringRenewals = async (
  db: Firestore,
  today: Date,
  next10Days: Date,
  toEmail: string,
  sendGridApiKey: SecretParam
) => {
  try {
    const renewalsRef = db.collection("renewals");
    const renewalsSnapshot = await renewalsRef
      .where("policy_expiry_date", ">=", today)
      .where("policy_expiry_date", "<=", next10Days)
      .limit(50)
      .get();

    if (!renewalsSnapshot.empty) {
      const expiringRenewals = renewalsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      sgMail.setApiKey(sendGridApiKey.value());
      const renewalMsg = {
        to: toEmail,
        from: "Ohm Maruthi Insurance <smurugesapillai@perchenergy.com>",
        subject: `Expiring Renewals - ${today.toDateString()}`,
        html: `
            <h2>Hi Team 👋</h2>
            <p>This is your daily report from Ohm Maruthi Insurance.</p>
            <h2>Found ${expiringRenewals.length} expiring renewals</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="padding: 10px; border: 1px solid #ddd;">#</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Policy No</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Insured Name</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Company Name</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Product Name</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Expiry Date</th>
                </tr>
              </thead>
              <tbody>
                ${expiringRenewals
                  .map(
                    (renewal: any, index: number) => `
                  <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">${index + 1}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${renewal.policy_no || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${renewal.insured_name || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${renewal.insurance_company || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${renewal.product_name || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">
                      ${renewal.policy_expiry_date ? new Date(renewal.policy_expiry_date.seconds * 1000).toLocaleDateString() : "N/A"}
                    </td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          `,
      };
      await sgMail.send(renewalMsg);
    } else {
      logger.info("No expiring renewals found for the next 10 days.");
    }
  } catch (error) {
    logger.error("Error fetching expiring renewals:", error);
  }
};

export const checkPendingQuotes = async (
  db: Firestore,
  today: Date,
  toEmail: string,
  sendGridApiKey: SecretParam
) => {
  try {
    const quotesRef = db.collection("quote-tracking");
    const quotesSnapshot = await quotesRef
      .where("status", "in", ["TO_DO", "IN_PROGRESS", "BLOCKED"])
      .limit(50)
      .get();

    if (!quotesSnapshot.empty) {
      const pendingQuotes = quotesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      logger.info(`Found ${pendingQuotes.length} pending quotes`);

      sgMail.setApiKey(sendGridApiKey.value());
      const quotesMsg = {
        to: toEmail,
        from: "Ohm Maruthi Insurance <smurugesapillai@perchenergy.com>",
        subject: `Pending issues - ${today.toDateString()}`,
        html: `
            <h2>Hi Team 👋</h2>
            <p>This is your daily report from Ohm Maruthi Insurance.</p>
            <h2>Found ${pendingQuotes.length} pending quotes</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <thead>
                <tr style="background-color: #f2f2f2;">
                  <th style="padding: 10px; border: 1px solid #ddd;">#</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Client Name</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Status</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Company Name</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Product Name</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Value (Rs)</th>
                </tr>
              </thead>
              <tbody>
                ${pendingQuotes
                  .map(
                    (quote: any, index: number) => `
                  <tr>
                    <td style="padding: 10px; border: 1px solid #ddd;">${index + 1}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${quote.client_name || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${quote.status || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${quote.company || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${quote.product_name || "N/A"}</td>
                    <td style="padding: 10px; border: 1px solid #ddd;">${quote.quote_value || "0"}</td>
                  </tr>
                `
                  )
                  .join("")}
              </tbody>
            </table>
          `,
      };
      await sgMail.send(quotesMsg);
    } else {
      logger.info("No pending quotes found.");
    }
  } catch (error) {
    logger.error("Error fetching pending quotes:", error);
  }
};
