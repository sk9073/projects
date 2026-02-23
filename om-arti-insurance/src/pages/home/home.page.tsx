import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { getFirebase } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Typography, Paper, Divider } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "@mui/material/styles";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddAlarmIcon from "@mui/icons-material/AddAlarm";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { openInNewTab } from "../../utils/navigation";
const { auth } = getFirebase();
import { google_sheet } from "../../utils/const";
import { SoftRoundedButton, DefaultSoftRoundedButton } from "../../components";

export const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    }
  }, []);

  return (
    <Grid container spacing={3} padding={{ xs: 2, sm: 3, md: 4 }}>
      <Grid item xs={12} md={1}>
        <img
          src={require("../../assets/logo.jpeg")}
          style={{ width: 80, height: 80 }}
          alt="react"
        />
      </Grid>
      <Grid item xs={12} md={9}>
        <Typography
          component="h4"
          variant="h4"
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
          }}
          paddingTop={1}
        >
          {" "}
          Ohm Maruthi Orbit
        </Typography>
        <Typography
          component="h6"
          variant="subtitle1"
          style={{
            alignItems: "center",
            justifyContent: "flex-start",
            display: "flex",
          }}
        >
          Start your day the smart way!
        </Typography>
      </Grid>
      <Grid item xs={12} md={2}>
        <DefaultSoftRoundedButton
          startIcon={<LogoutIcon />}
          onClick={handleLogout}
        >
          LOGOUT
        </DefaultSoftRoundedButton>
      </Grid>
      <Grid item xs={12} md={12}>
        <Divider />
      </Grid>
      <Grid item xs={12} md={4}>
        <SoftRoundedButton
          fullWidth
          startIcon={
            <ListAltIcon
              style={{ fontSize: "25", paddingLeft: "5" }}
              color="action"
            />
          }
          style={{ height: "200px" }}
          onClick={() => {
            navigate("/policy-details");
          }}
        >
          POLICY DETAILS
        </SoftRoundedButton>
      </Grid>
      <Grid item xs={12} md={4}>
        <SoftRoundedButton
          fullWidth
          style={{ height: "200px" }}
          startIcon={
            <AddAlarmIcon
              style={{ fontSize: "25", alignSelf: "left" }}
              color="action"
            />
          }
          onClick={() => {
            navigate("/quote-tracking");
          }}
        >
          Quote Tracking
        </SoftRoundedButton>
      </Grid>
      <Grid item xs={12} md={4}>
        <SoftRoundedButton
          fullWidth
          style={{ height: "200px" }}
          startIcon={
            <AutorenewIcon
              style={{ fontSize: "25", alignSelf: "left" }}
              color="action"
            />
          }
          onClick={() => {
            navigate("/renewal-tracking");
          }}
        >
          Renewal Tracking
        </SoftRoundedButton>
      </Grid>
    </Grid>
  );
};
