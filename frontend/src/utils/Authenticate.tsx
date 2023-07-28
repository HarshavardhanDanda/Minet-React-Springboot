import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface AuthenticatorProps {
  children: React.ReactNode;
}

const Authenticate = (props: AuthenticatorProps) => {
  const user = useSelector((state: any) => {
    return state.user.user;
  });
  if (user === null) return <Navigate to="/"></Navigate>;
  else return props.children;
};

export default Authenticate;
