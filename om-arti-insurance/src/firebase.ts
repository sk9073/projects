import { initializeApp, FirebaseApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  Auth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

function initialize() {
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const db = getFirestore(app);
  return { firebaseApp, auth, db } as {
    firebaseApp: FirebaseApp;
    auth: Auth;
    db: any;
  };
}

export function getFirebase() {
  return initialize();
}

export const signInUser = async (
  email: string,
  password: string
): Promise<any> => {
  const { auth } = getFirebase();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { user: user, error: null };
  } catch (error: any) {
    const errorMessage = error.message;
    return { user: null, error: errorMessage };
  }
};

export const sendPasswordReset = async (email: string): Promise<any> => {
  const { auth } = getFirebase();
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: "Password reset email sent successfully.", error: null };
  } catch (error: any) {
    const errorMessage = error.message;
    return { success: null, error: errorMessage };
  }
};
