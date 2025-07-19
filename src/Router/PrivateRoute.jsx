// src/routes/PrivateRoute.jsx
import { use} from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Constexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
