import React from "react";
import { Navigate } from "react-router";
import { useStore } from "../store";
import { isAdmin, isEmployee, isManager } from "../utils/auth";

const PrivateRoute = ({ children, admin, employee, manager }) => {
  const { userState } = useStore();
  const { isUserLogin, user } = userState;

  if (!isUserLogin) {
    return <Navigate to="/authentication" />;
  }

  if (admin && !isAdmin(user.roles)) {
    return <Navigate to="/not-authorized" />;
  }
  if (employee && !isEmployee(user.roles)) {
    return <Navigate to="/not-authorized" />;
  }
  if (manager && !isManager(user.roles)) {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default PrivateRoute;
