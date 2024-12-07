/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userDetails = localStorage.getItem("user_details");
    if (!userDetails) {
      toast.warn("You need to log in to access this page."); // Inform user
      navigate("/account");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Prevent rendering children until authentication is confirmed
  }

  return <>{children}</>;
};

export default Auth;
