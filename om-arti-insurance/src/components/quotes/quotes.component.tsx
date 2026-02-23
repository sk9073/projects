import { pagination, quote, setPagination } from "../../utils/typings";
import {
  DataGrid,
  GridColDef,
  GridRowId,
  GridToolbar,
  GridActionsCellItem,
  GridRowModel,
  GridCellParams,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { getFirebase } from "../../firebase";
import { useCallback, useState } from "react";
import { Alert, AlertProps, Box, Snackbar } from "@mui/material";
import { CustomNoRowsOverlay, DataGridCols } from "./utils";
import { create } from "domain";

interface QuotesProps {
  quotes: [quote] | [];
  paginationModel: pagination;
  setPaginationModel: setPagination;
  loading: boolean;
}

const { db } = getFirebase();

export const Quotes = ({
  quotes,
  paginationModel,
  setPaginationModel,
  loading,
}: QuotesProps) => {
  const mutateRow = useMutation();
  const handleCloseSnackbar = () => setSnackbar(null);

  const processRowUpdate = useCallback(
    async (newRow: GridRowModel) => {
      const response = await mutateRow(newRow);
      setSnackbar({
        children: "Quote Successfully updated",
        severity: "success",
      });
      return response;
    },
    [mutateRow]
  );

  const handleProcessRowUpdateError = useCallback((error: Error) => {
    setSnackbar({ children: error.message, severity: "error" });
  }, []);

  const [snackbar, setSnackbar] = useState<Pick<
    AlertProps,
    "children" | "severity"
  > | null>(null);

  const deleteQuote = (id: GridRowId) => () => {
    const quote_doc = doc(db, `quote-tracking/${id}`);
    try {
      deleteDoc(quote_doc);
      setSnackbar({
        children: "Quote Successfully Deleted",
        severity: "success",
      });
    } catch (error: any) {
      setSnackbar({ children: error, severity: "error" });
    }
  };

  const columns: GridColDef[] = [
    ...DataGridCols,
    {
      field: "actions",
      type: "actions",
      width: 150,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteQuote(params.id)}
        />,
      ],
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        "& .to-do": {
          backgroundColor: "#ebf1af",
        },
        "& .done": {
          backgroundColor: "#a1ebaf",
        },
        "& .in-progress": {
          backgroundColor: "#ffd699",
        },
        "& .blocked": {
          backgroundColor: "#ff8c68",
        },
        "& .super-app-theme--header": {
          textAlign: "center",
          fontWeight: "bold",
        },
      }}
    >
      <DataGrid
        autoHeight
        pageSizeOptions={[5, 10, 25, 100]}
        rows={quotes}
        columns={columns}
        processRowUpdate={processRowUpdate}
        onProcessRowUpdateError={handleProcessRowUpdateError}
        loading={loading}
        slots={{
          toolbar: GridToolbar,
          noRowsOverlay: CustomNoRowsOverlay,
        }}
        initialState={{
          columns: {
            columnVisibilityModel: {
              id: false,
              created_at: false,
              policy_no: false,
              vehicle_no: false,
            },
          },
        }}
        getCellClassName={(params: GridCellParams<any, any, number>) => {
          if (params.field != "status") {
            return "";
          }
          if (params.value == "TO_DO") return "to-do";
          else if (params.value == "DONE") return "done";
          else if (params.value == "IN_PROGRESS") return "in-progress";
          else if (params.value == "BLOCKED") return "blocked";
          else return "";
        }}
        sx={{ "--DataGrid-overlayHeight": "300px" }}
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

const useMutation = () => {
  return useCallback(
    (quote: Partial<quote>) =>
      new Promise<Partial<quote>>((resolve, reject) => {
        setTimeout(() => {
          if (quote.status === "" || quote.status == null) {
            reject(
              new Error("Error while saving quote: Parameter is not supported.")
            );
            return;
          }

          const quote_doc = doc(db, `quote-tracking/${quote.id}`);
          updateDoc(quote_doc, {
            status: quote.status,
            quote_value: quote.quote_value,
            created_at: quote.created_at,
            policy_expiry_date: quote.policy_expiry_date,
            asignee: quote.asignee,
            client_name: quote.client_name,
            policy_no: quote.policy_no,
            vehicle_no: quote.vehicle_no,
            company: quote.company,
          });
          resolve({ ...quote });
        }, 200);
      }),
    []
  );
};
