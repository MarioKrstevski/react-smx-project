import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  });

  if (!user) {
    //also return null so we don't show a glimpse (flicker) of the real stuff
    return null;
  }
  console.log("hi"); // this will never be printed unless we have a user

  return children;
}
