import {
  CollectionReference,
  DocumentData,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { quote } from "../../utils/typings";

export interface QuoteData {
  clientName: string;
  company: string;
  productName: string;
  status: string;
  quoteValue: number;
  quotes: CollectionReference<DocumentData, DocumentData>;
  asignee?: string;
  policyNo?: string;
  vehicleNo?: string;
  policyExpiryDate?: any;
}

export const addDocument = async ({
  clientName,
  company,
  productName,
  status,
  quoteValue,
  quotes,
  vehicleNo = "",
  policyNo = "",
  asignee = "",
  policyExpiryDate = null,
}: QuoteData) => {
  const newQuote: quote = {
    client_name: clientName,
    product_name: productName,
    status: status,
    company: company,
    quote_value: quoteValue,
    policy_expiry_date: policyExpiryDate,
    asignee: asignee,
    policy_no: policyNo,
    vehicle_no: vehicleNo,
    created_at: serverTimestamp(),
  };
  try {
    await addDoc(quotes, newQuote);
  } catch (error) {
    throw error;
  }
};
