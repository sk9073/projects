import { FieldValue, Timestamp } from "firebase/firestore";

export type quote = {
  client_name?: string;
  company?: string;
  product_name?: string;
  status?: string;
  tags?: string[];
  quote_value?: number;
  created_at?: Timestamp | FieldValue;
  policy_expiry_date?: Timestamp | FieldValue | null;
  id?: string;
  asignee?: string;
  policy_no?: string;
  vehicle_no?: string;
};

export type pagination = {
  pageSize: number;
  page: number;
};

export type setPagination = React.Dispatch<
  React.SetStateAction<{
    pageSize: number;
    page: number;
  }>
>;
