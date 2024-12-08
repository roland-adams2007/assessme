import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null state

  useEffect(() => {
    const userDetails = localStorage.getItem("user_details");
    console.log("Checking authentication: ", userDetails); // Log to debug

    if (!userDetails) {
      toast.warn("You need to log in to access this page.");
      navigate("/account"); // Redirect if not authenticated
    } else {
      setIsAuthenticated(true); // Set authentication state to true
    }
  }, [navigate]);

  // Loading state while checking authentication
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Placeholder until authentication state is known
  }

  if (!isAuthenticated) {
    return null; // If not authenticated, nothing renders until redirection
  }

  return <>{children}</>; // If authenticated, render the children
};

export default Auth;
