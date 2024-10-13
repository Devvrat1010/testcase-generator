// RoleRoute.tsx
"use client";

import React from "react";
import useRoleRoute from "@/hooks/useRoleRoute";

interface RoleRouteProps {
  children: React.ReactNode;
  role: string;
}

const RoleRoute: React.FC<RoleRouteProps> = ({ children, role }) => {
  const { status, role: userRole } = useRoleRoute();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "authenticated" && userRole === role) {
    return <>{children}</>;
  }

  return (
    <div className="font-bold p-4">
      Access Denied: Insufficient permissions.
    </div>
  );
};

export default RoleRoute;
