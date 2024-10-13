// app/ProtectedRoute.js
"use client";

import useProtectedRoute from "../hooks/useProtectedRoute";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { status } = useProtectedRoute();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated") {
    return <>{children}</>;
  }

  return null; // or a fallback component
};

export default ProtectedRoute;
