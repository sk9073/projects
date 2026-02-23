import { DefaultSoftRoundedButton } from "../../components";
import Grid from "@mui/material/Grid/";
import HomeIcon from "@mui/icons-material/Home";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material/";
import { openInNewTab } from "../../utils/navigation";
import { google_sheet } from "../../utils/const";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { policyDetialsMap } from "./utils";

export const PolicyDetails = () => {
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
        <Divider textAlign="left">
          <Typography variant="subtitle1" gutterBottom>
            Policy Details
          </Typography>
        </Divider>
      </Grid>
      <Grid item xs={4} md={4}>
        <List>
          {(
            Object.keys(policyDetialsMap) as Array<
              keyof typeof policyDetialsMap
            >
          ).map((key) => {
            const { url, description, heading } = policyDetialsMap[key];
            return (
              <ListItem disablePadding key={key}>
                <ListItemButton
                  component="a"
                  href="#simple-list"
                  onClick={() => openInNewTab(url)}
                >
                  <ListItemIcon>
                    <FileOpenIcon />
                  </ListItemIcon>
                  <ListItemText primary={heading} secondary={description} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};
