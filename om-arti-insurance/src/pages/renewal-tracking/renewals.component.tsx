import { Alert, AlertProps, Box, Snackbar } from "@mui/material";
import { useState } from "react";
import { pagination, setPagination } from "../../utils/typings";
import { CollectionReference, DocumentData } from "firebase/firestore";
import { checkPresenceOfRenewal } from "./functions";
import AddIcon from "@mui/icons-material/Add";
import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import {
  company,
  CustomNoRowsOverlay,
  product_name,
} from "../../components/quotes/utils";
import { addDocument, QuoteData } from "../quote-tracking/functions";

interface RenewalsProps {
  quotes: CollectionReference<DocumentData, DocumentData>;
  renewals: any;
  paginationModel: pagination;
  setPaginationModel: setPagination;
  loading: boolean;
}

export const Renewals = ({
  quotes,
  renewals,
  paginationModel,
  loading,
  setPaginationModel,
}: RenewalsProps) => {
  const handleCloseSnackbar = () => setSnackbar(null);

  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const columns: GridColDef[] = [
    ...DataGridCols,
    {
      field: "actions",
      type: "actions",
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<AddIcon />}
          label="Add"
          onClick={async () => {
            try {
              addDocument({
                clientName: params.row.insured_name,
                productName: params.row.product_name,
                vehicleNo: params.row.vehicle_no,
                policyNo: params.row.policy_no,
                company: params.row.insurance_company,
                policyExpiryDate: params.row.policy_expiry_date,
                status: "TO_DO",
                quoteValue: 0,
                quotes,
              } as QuoteData);
              setSnackbar({
                children: "Quote is being tracked",
                severity: "success",
              });
            } catch (error: any) {
              setSnackbar({
                children: "Error tracking renewal: " + error.message,
                severity: "error",
              });
            }
          }}
        />,
      ],
    },
  ];

  return (
    <Box>
      <DataGrid
        autoHeight
        pageSizeOptions={[5, 10, 25, 100]}
        rows={renewals}
        columns={columns}
        loading={loading}
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        sx={{
          "--DataGrid-overlayHeight": "300px",
          boxShadow: 15,
          border: 2,
          borderColor: "#fde7eb",
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#fde7eb",
          },
          "& .MuiDataGrid-cell:hover": {
            color: "#d63384",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButtonBase-root": {
            color: "#d63384", // icon + label color
          },
          "& .MuiDataGrid-toolbarContainer .MuiSvgIcon-root": {
            color: "#d63384", // icon color explicitly
          },
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              vehicle_no: false,
              policy_expiry_date: false,
            },
          },
        }}
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
      />
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
  );
};

const DataGridCols = [
  {
    field: "policy_no",
    headerName: "Policy No",
    width: 200,
  },
  {
    field: "insured_name",
    headerName: "Insured Name",
    width: 200,
  },
  {
    field: "insurance_company",
    headerName: "Insurance Company",
    width: 200,
    valueOptions: company,
    type: "singleSelect",
  },
  {
    field: "product_name",
    headerName: "Product Name",
    width: 350,
    valueOptions: product_name,
    type: "singleSelect",
  },
  {
    field: "vehicle_no",
    headerName: "Vehicle No",
    width: 150,
  },
  {
    field: "policy_expiry_date",
    headerName: "Policy Expiry Date",
    width: 150,
    type: "date",
    valueGetter: (params: any) => {
      if (params.value) {
        return params.value?.toDate();
      }
      return new Date();
    },
  },
  {
    field: "no_of_days_remaining",
    headerName: "Days till Expiry",
    width: 150,
    valueGetter: (params: any) => {
      const expiryDate = params.row.policy_expiry_date?.toDate();
      if (expiryDate) {
        const today = new Date();
        const timeDiff = expiryDate.getTime() - today.getTime();
        return Math.ceil(timeDiff / (1000 * 3600 * 24));
      }
      return 0;
    },
  },
];
