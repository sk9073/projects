import React, { useState } from "react";
import { signInUser, sendPasswordReset } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  AlertProps,
  Snackbar,
  Alert,
  Grid,
  Link,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DefaultSoftRoundedButton } from "../../components";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const handleCloseSnackbar = () => setSnackbar(null);
  const [open, setOpen] = React.useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      setSnackbar({
        children: "Please enter your email address.",
        severity: "error",
      });
      return;
    }
    const result = await sendPasswordReset(resetEmail);
    if (result.success) {
      setSnackbar({
        children: result.success,
        severity: "success",
      });
    } else {
      setSnackbar({
        children: result.error,
        severity: "error",
      });
    }
    handleClose();
  };

  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const result = await signInUser(email, password);
    setLoading(false);
    if (result.user) {
      setSnackbar({
        children: "Login successful!",
        severity: "success",
      });
      navigate("/");
    }
    if (result.error) {
      setSnackbar({
        children: result.error,
        severity: "error",
      });
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e: any) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
            <DefaultSoftRoundedButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </DefaultSoftRoundedButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={handleClickOpen}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </Box>
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
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To reset your password, please enter your email address here. We
            will send updates to you.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={(e : any) => setResetEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePasswordReset}>Submit</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};
