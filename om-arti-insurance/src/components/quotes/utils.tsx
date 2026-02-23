import { Box, styled } from "@mui/material";
import { GridValueFormatterParams } from "@mui/x-data-grid";

export const product_name = [
  {
    value: "Standard Fire And Special Perils Policy",
    label: "Standard Fire & Special Perils Policy",
  },
  {
    value: "Standard Fire & Special Perils",
    label: "Standard Fire & Special Perils",
  },
  {
    value: "ICICI Bharat Griha Raksha Policy",
    label: "ICICI Bharat Griha Raksha Policy",
  },
  {
    value: "ICICI Bharat Sookshma Udyam Suraksha",
    label: "ICICI Bharat Sookshma Udyam Suraksha",
  },
  {
    value: "ICICI Bharat Laghu Udyam Suraksha",
    label: "ICICI Bharat Laghu Udyam Suraksha",
  },
  { value: "Business Package Policy", label: "Business Package Policy" },
  {
    value: "Fire And Burglary Insurance",
    label: "Fire And Burglary Insurance",
  },
  { value: "Traders Shield Insurance", label: "Traders Shield Insurance" },
  { value: "Group Health Insurance", label: "Group Health Insurance" },
  {
    value: "Group Personal Accident Policy",
    label: "Group Personal Accident Policy",
  },
  { value: "Workman's Compensation", label: "Workman's Compensation" },
  {
    value: "Individual Health Insurance",
    label: "Individual Health Insurance",
  },
  {
    value: "Individual Personal Accident Insurance",
    label: "Individual Personal Accident Insurance",
  },
  { value: "Traffic Accident Policy", label: "Traffic Accident Policy" },
  { value: "Family Floater Policy", label: "Family Floater Policy" },
  { value: "Top-Up Policy", label: "Top-Up Policy" },
  { value: "Marine Cargo Open Policy", label: "Marine Cargo Open Policy" },
  { value: "STOP Policy", label: "STOP Policy" },
  {
    value: "Marine Cargo Specific Voyage Policy",
    label: "Marine Cargo Specific Voyage Policy",
  },
  { value: "Marine Hull Insurance", label: "Marine Hull Insurance" },
  {
    value: "Boiler And Pressure Plant Policy",
    label: "Boiler And Pressure Plant Policy",
  },
  { value: "Machinery Breakdown Policy", label: "Machinery Breakdown Policy" },
  {
    value: "Portable Electronic Insurance",
    label: "Portable Electronic Insurance",
  },
  {
    value: "Electronic Equipment Insurance",
    label: "Electronic Equipment Insurance",
  },
  { value: "Jewellers Block Insurance", label: "Jewellers Block Insurance" },
  {
    value: "Jewellers Package Policy Sookshma",
    label: "Jewellers Package Policy Sookshma",
  },
  {
    value: "Car-Contractors All Risk Policy",
    label: "Car-Contractors All Risk Policy",
  },
  {
    value: "Ear- Erection All Risk Policy",
    label: "Ear- Erection All Risk Policy",
  },
  {
    value: "Enterprise Shield Insurance",
    label: "Enterprise Shield Insurance",
  },
  { value: "Public Liability", label: "Public Liability" },
  { value: "E & O Policy", label: "E & O Policy" },
  { value: "Cyber Liability Policy", label: "Cyber Liability Policy" },
  {
    value: "Industrial All Risk Insurance",
    label: "Industrial All Risk Insurance",
  },
  {
    value: "Professional Indemnity Insurance",
    label: "Professional Indemnity Insurance",
  },
  {
    value: "Contractors Plant & Machinery Insurance",
    label: "Contractors Plant & Machinery Insurance",
  },
  { value: "Lift Insurance", label: "Lift Insurance" },
  { value: "D & O Insurance", label: "D & O Insurance" },
  { value: "Windmill policy", label: "Windmill policy" },
  {
    value: "Motor-Private Car Stand Alone Own Damage Policy",
    label: "Motor-Private Car Stand Alone Own Damage Policy",
  },
  {
    value: "Motor-Private Car Package Policy",
    label: "Motor-Private Car Package Policy",
  },
  {
    value: "Motor-Two Wheeler Third Party Insurance",
    label: "Motor-Two Wheeler Third Party Insurance",
  },
  {
    value: "Motor-Two Wheeler Package Policy",
    label: "Motor-Two Wheeler Package Policy",
  },
  {
    value: "Motor- Private Car Third Party Insurance",
    label: "Motor- Private Car Third Party Insurance",
  },
  {
    value: "Motor- Commercial (Passengers)",
    label: "Motor- Commercial (Passengers)",
  },
  {
    value: "Motor-Commercial (Goods Carrying)",
    label: "Motor-Commercial (Goods Carrying)",
  },
  { value: "Burglary Policy", label: "Burglary Policy" },
  { value: "Fidelity Policy", label: "Fidelity Policy" },
  { value: "Plate Glass Policy", label: "Plate Glass Policy" },
  { value: "Sign Board Insurance", label: "Sign Board Insurance" },
  { value: "Money Insurance", label: "Money Insurance" },
  {
    value: "Errors And Omissions-Others",
    label: "Errors And Omissions-Others",
  },
  { value: "Travel Insurance", label: "Travel Insurance" },
  {
    value: "H&M Insurance Sailing Vessel",
    label: "H&M Insurance Sailing Vessel",
  },
  { value: "Others", label: "Others" },
  {
    value: "Motor-Standalone Motor Own damage Policy for Two Wheelers",
    label: "Motor-Standalone Motor Own damage Policy for Two Wheelers",
  },
  {
    value: "New India -Bharat Sookshma Udyam Suraksha ",
    label: "New India -Bharat Sookshma Udyam Suraksha ",
  },
  { value: "Business Shield", label: "Business Shield" },
  {
    value: "Bharat Sookshma Udayam Suraksha",
    label: "Bharat Sookshma Udayam Suraksha",
  },
  { value: "Bharat Griha Raksha Policy", label: "Bharat Griha Raksha Policy" },
  {
    value: "Bharat Laghu Udayam Suraksha",
    label: "Bharat Laghu Udayam Suraksha",
  },
  {
    value: "Jewellers Package Policy Laghu",
    label: "Jewellers Package Policy Laghu",
  },
  { value: "House holders insurance", label: "House holders insurance" },
  { value: "Package Policy", label: "Package Policy" },
  {
    value: "General Liability Insurance",
    label: "General Liability Insurance",
  },
  { value: "Directors and officers", label: "Directors and officers" },
  {
    value: "ICICI Lombard MSME sursksha kavach",
    label: "ICICI Lombard MSME sursksha kavach",
  },
  { value: "Consequential loss policy", label: "Consequential loss policy" },
  {
    value: "Marine single transit export policy",
    label: "Marine single transit export policy",
  },
  { value: "FG Sookshma lite", label: "FG Sookshma lite" },
  {
    value: "Merchant's cover III policy",
    label: "Merchant's cover III policy",
  },
  { value: "FG laghu lite", label: "FG laghu lite" },
  {
    value: "Motor trade-Road risk-class F package policy",
    label: "Motor trade-Road risk-class F package policy",
  },
  {
    value: "Certificate of marine cargo open policy",
    label: "Certificate of marine cargo open policy",
  },
  { value: "Corporate cover ii policy ", label: "Corporate cover ii policy " },
  {
    value: "Marine single transit inland policy",
    label: "Marine single transit inland policy",
  },
  {
    value: "(unnamed) Group Personal Accident Policy",
    label: "(unnamed) Group Personal Accident Policy",
  },
  { value: "Others", label: "Others" },
  {
    value: "New India -Bharat Laghu Udyam Suraksha",
    label: "New India -Bharat Laghu Udyam Suraksha",
  },
];

export const company = [
  { value: "Bajaj Allianz", label: "Bajaj Allianz" },
  { value: "Go Digit", label: "Go Digit" },
  { value: "Future Generali", label: "Future Generali" },
  { value: "ICICI Lombard", label: "ICICI Lombard" },
  { value: "IFFCO TOKIO", label: "IFFCO TOKIO" },
  { value: "Liberty", label: "Liberty" },
  { value: "National", label: "National" },
  { value: "New India Assurance", label: "New India Assurance" },
  { value: "Royal Sundaram", label: "Royal Sundaram" },
  { value: "SBI", label: "SBI" },
  { value: "Tata AIG", label: "Tata AIG" },
  { value: "The Oriental", label: "The Oriental" },
  { value: "United India", label: "United India" },
  {
    value: "Reliance GeneralInsurance",
    label: "Reliance GeneralInsurance",
  },
  { value: "Care health insurance", label: "Care health insurance" },
  { value: "HDFC ERGO", label: "HDFC ERGO" },
  { value: "Star Health", label: "Star Health" },
  { value: "Chola MS", label: "Chola MS" },
];

export const DataGridCols = [
  {
    field: "client_name",
    headerName: "Client Name",
    width: 200,
    editable: true,
  },
  {
    field: "product_name",
    headerName: "Product Name",
    width: 300,
    editable: true,
    valueOptions: product_name,
    type: "singleSelect",
  },
  {
    field: "asignee",
    headerName: "Asignee",
    width: 150,
    valueOptions: [
      { value: "Lakshika", label: "Lakshika" },
      { value: "Sivaranjani", label: "Sivaranjani" },
      { value: "Deepika", label: "Deepika" },
      { value: "Jyothi", label: "Jyothi" },
    ],
    type: "singleSelect",
    editable: true,
  },
  {
    field: "policy_no",
    headerName: "Policy No.",
    width: 150,
    editable: true,
  },
  {
    field: "vehicle_no",
    headerName: "Vehicle No.",
    width: 150,
    editable: true,
  },
  {
    field: "company",
    headerName: "Company",
    width: 250,
    editable: true,
    valueOptions: company,
    type: "singleSelect",
  },
  {
    field: "quote_value",
    headerName: "Quote Value",
    width: 150,
    valueFormatter: (params: GridValueFormatterParams<number>) => {
      if (params.value == null) {
        return "";
      }
      return `₹ ${params.value}`;
    },
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "singleSelect",
    valueOptions: [
      { value: "DONE", label: "Done" },
      { value: "IN_PROGRESS", label: "In Progress" },
      { value: "TO_DO", label: "To Do" },
      { value: "BLOCKED", label: "Blocked" },
    ],
    editable: true,
  },
  {
    field: "created_at",
    headerName: "Created At",
    width: 200,
    type: "date",
    valueGetter: (params: any) => {
      console.log("params.value", typeof params.value.seconds);
      if (params.value && typeof params.value.seconds === "number") {
        return params.value.toDate();
      }
      return params.value ? new Date(params.value) : params.value;
    },
    editable: true,
  },
  {
    field: "policy_expiry_date",
    headerName: "Policy Expiry Date",
    width: 200,
    type: "date",
    valueGetter: (params: any) => {
      if (params.value && typeof params.value.seconds === "number") {
        return params.value.toDate();
      }
      return params.value ? new Date(params.value) : params.value;
    },
    editable: true,
  },
];

export const CustomNoRowsOverlay = () => {
  return (
    <StyledGridOverlay>
      <svg
        style={{ flexShrink: 0 }}
        width="240"
        height="200"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
          </g>
        </g>
      </svg>
      <Box sx={{ mt: 1 }}>No Rows</Box>
    </StyledGridOverlay>
  );
};

export const StyledGridOverlay = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  "& .ant-empty-img-1": {
    fill: theme.palette.mode === "light" ? "#aeb8c2" : "#262626",
  },
  "& .ant-empty-img-2": {
    fill: theme.palette.mode === "light" ? "#f5f5f7" : "#595959",
  },
  "& .ant-empty-img-3": {
    fill: theme.palette.mode === "light" ? "#dce0e6" : "#434343",
  },
  "& .ant-empty-img-4": {
    fill: theme.palette.mode === "light" ? "#fff" : "#1c1c1c",
  },
  "& .ant-empty-img-5": {
    fillOpacity: theme.palette.mode === "light" ? "0.8" : "0.08",
    fill: theme.palette.mode === "light" ? "#f5f5f5" : "#fff",
  },
}));
