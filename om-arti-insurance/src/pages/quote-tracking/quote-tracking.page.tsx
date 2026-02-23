import { useEffect, useState } from "react";
import { getFirebase } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { quote } from "../../utils/typings";
import { QuoteData, addDocument } from "./functions";
import { QuoteForm } from "../../components/quote-form/quote-form.component";
import {
  Alert,
  AlertProps,
  Dialog,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { Quotes } from "../../components/quotes/quotes.component";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import { DefaultSoftRoundedButton } from "../../components";
const { db } = getFirebase();

export const QuoteTracking = () => {
  const quotes = collection(db, "quote-tracking");
  const [quoteData, setQuoteData] = useState<[quote] | []>([]);
  const [clientName, setClientName] = useState("");
  const [productName, setProductName] = useState("");
  const [status, setStatus] = useState("");
  const [company, setCompany] = useState("");
  const [quoteValue, setQuoteValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 25,
    page: 0,
  });
  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleCloseSnackbar = () => setSnackbar(null);
  const handleClose = () => {
    setOpen(false);
  };
  const resetUserInput = () => {
    setClientName("");
    setProductName("");
    setStatus("");
    setCompany("");
    setQuoteValue(0);
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onSnapshot(quotes, (snapshot) => {
      const data: any = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setQuoteData(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (clientName == "" || productName == "" || status == "" || company == "")
      return;

    try {
      addDocument({
        clientName,
        productName,
        status,
        company,
        quoteValue,
        quotes,
      } as QuoteData);
      setSnackbar({
        children: "Quote Successfully created",
        severity: "success",
      });
    } catch (error: any) {
      setSnackbar({ children: error.message, severity: "error" });
    }

    resetUserInput();
  }, [clientName, productName, status, company, quoteValue]);

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
      <Grid item xs={12} md={10}>
        <Typography component="h1" variant="h5">
          Quote Tracking
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <DefaultSoftRoundedButton
          fullWidth
          startIcon={<AddCircleIcon />}
          onClick={handleClickOpen}
        >
          ADD A NEW QUOTE
        </DefaultSoftRoundedButton>
      </Grid>

      <Grid item xs={12} md={12}>
        <Quotes
          loading={loading}
          quotes={quoteData}
          paginationModel={paginationModel}
          setPaginationModel={setPaginationModel}
        />
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          component: "form",
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            setClientName(formJson.clientName);
            setProductName(formJson.productName);
            setStatus(formJson.status);
            setCompany(formJson.company);
            setQuoteValue(parseInt(formJson.quoteValue));
            handleClose();
          },
        }}
      >
        <QuoteForm handleClose={handleClose} />
      </Dialog>
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </Grid>
  );
};
