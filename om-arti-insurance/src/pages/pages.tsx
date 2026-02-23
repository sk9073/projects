import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Home,
  Login,
  PolicyDetails,
  QuoteTracking,
  RenewalTracking,
} from "./index";
import { getFirebase } from "../firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Loading } from "../components";

const { auth } = getFirebase();

export const Pages = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user && !loading) {
      navigate("/login");
    }
  }, [loading, user]);

  if (loading) return <Loading />;

  return (
    <Routes>
      {" "}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/loading" element={<h2>Loading</h2>} />
      <Route path="/quote-tracking" element={<QuoteTracking />} />
      <Route path="/renewal-tracking" element={<RenewalTracking />} />
      <Route path="/policy-details" element={<PolicyDetails />} />
    </Routes>
  );
};
