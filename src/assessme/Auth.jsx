/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null state for loading

  useEffect(() => {
    const userDetails = localStorage.getItem("user_details");
    if (!userDetails) {
      toast.warn("You need to log in to access this page."); // Inform user
      navigate("/account"); // Redirect user to login page
    } else {
      setIsAuthenticated(true); // Set authentication state to true
    }
  }, [navigate]);

  if (isAuthenticated === null) {
    // You can show a loading spinner or nothing while checking authentication
    return <div>Loading...</div>; // Simple placeholder, can be a loader component
  }

  if (!isAuthenticated) {
    return null; // If not authenticated, nothing renders until the user is redirected
  }

  return <>{children}</>; // If authenticated, render the children (protected routes)
};

export default Auth;
