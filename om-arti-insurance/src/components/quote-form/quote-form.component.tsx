import {
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  TextField,
} from "@mui/material";
import { DefaultSoftRoundedButton } from "../themed-buttons/themed-button";
import { company, product_name } from "../quotes/utils";
interface Props {
  handleClose: () => void;
}

export const QuoteForm = ({ handleClose }: Props) => {
  const status = [
    {
      value: "DONE",
      label: "Done",
    },
    {
      value: "IN_PROGRESS",
      label: "In Progress",
    },
    {
      value: "TO_DO",
      label: "To Do",
    },
    {
      value: "BLOCKED",
      label: "Blocked",
    },
  ];

  return (
    <>
      <DialogTitle>Want to add a new quote?</DialogTitle>
      <DialogContent>
        <TextField
          id="status"
          name="status"
          select
          margin="dense"
          label="Select"
          defaultValue="TO_DO"
          helperText="What is the status of this quote?"
          fullWidth
        >
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          required
          margin="dense"
          id="company"
          name="company"
          label="Company"
          helperText="What is the company for this quote?"
          type="text"
          fullWidth
          variant="standard"
        >
          {company.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          required
          margin="dense"
          id="productName"
          name="productName"
          label="Product Name"
          helperText="What is the product name for this quote?"
          select
          type="text"
          fullWidth
          variant="standard"
        >
          {product_name.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          autoFocus
          required
          margin="dense"
          id="clientName"
          name="clientName"
          label="Client Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          style={{ marginTop: "1rem" }}
          id="quoteValue"
          name="quoteValue"
          label="Quote Value"
          margin="dense"
          required
          fullWidth
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <DefaultSoftRoundedButton onClick={handleClose} color="secondary">
          Cancel
        </DefaultSoftRoundedButton>
        <DefaultSoftRoundedButton
          type="submit"
          color="secondary"
          variant="contained"
        >
          Submit
        </DefaultSoftRoundedButton>
      </DialogActions>
    </>
  );
};
