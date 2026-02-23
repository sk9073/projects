import { Button, styled } from "@mui/material";

export const SoftRoundedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fef2f4", // soft light pink
  borderRadius: "12px", // rounded corners
  boxShadow: "0 0 0 1px #f5f5f5", // faint outline (optional)
  minWidth: "120px",
  minHeight: "120px",
  padding: "16px",
  border: "none",
  "&:hover": {
    backgroundColor: "#fde7eb", // slightly darker on hover
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.6)",
  },
  color: "#d63384", // soft pink text color
}));

export const DefaultSoftRoundedButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#fef2f4", // soft light pink
  color: "#d63384", // soft pink text color
  boxShadow: "0 0 0 1px #f5f5f5", // faint outline (optional)
  borderRadius: "12px", // rounded corners
  padding: "16px",
  "&:hover": {
    backgroundColor: "#fde7eb", // slightly darker on hover
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.6)",
  },
}));
