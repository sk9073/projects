import {
  CollectionReference,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const checkPresenceOfRenewal = async (
  policyNo: string,
  quotes: CollectionReference<DocumentData>
) => {
  const querySnapshot = await getDocs(
    query(quotes, where("policy_no", "==", policyNo))
  );
  return !querySnapshot.empty;
};

export interface RenewalData {
  id: string;
  policyExpiryDate: {
    seconds: number;
    nanoseconds: number;
  };
  policyNo: string;
  vehicleNo: string;
  productName: string;
  insuranceCompany: string;
  insuredName: string;
}
