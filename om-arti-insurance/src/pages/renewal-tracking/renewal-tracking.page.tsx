import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { RenewalData } from "./functions";
import { getFirebase } from "../../firebase";
import HomeIcon from "@mui/icons-material/Home";
import { DefaultSoftRoundedButton } from "../../components";
import { Renewals } from "./renewals.component";

const { db } = getFirebase();
const renewalsCollection = collection(db, "renewals");
const quotes = collection(db, "quote-tracking");

export const RenewalTracking = () => {
  const [renewalData, setRenewalData] = useState<RenewalData[]>([]);
  const [loading, setLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });

  useEffect(() => {
    setLoading(true);
    const today = new Date();
    const next30Days = new Date();
    next30Days.setDate(today.getDate() + 30);

    const q = query(
      renewalsCollection,
      where("policy_expiry_date", ">=", today),
      where("policy_expiry_date", "<=", next30Days)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: RenewalData[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() } as RenewalData);
      });
      setRenewalData(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Grid container spacing={3} padding={{ xs: 2, sm: 3, md: 4 }}>
      <Grid item xs={12} md={12}>
        <DefaultSoftRoundedButton
          startIcon={<HomeIcon />}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Home
        </DefaultSoftRoundedButton>
      </Grid>

      <Grid item xs={12} md={12}>
        <Renewals
          renewals={renewalData}
          quotes={quotes}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
          loading={loading}
        />
      </Grid>
    </Grid>
  );
};
