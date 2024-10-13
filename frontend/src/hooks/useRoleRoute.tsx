// useRoleRoute.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useRoleRoute = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/api/auth/signin");
    }
  }, [status, router]);

  // Return role if authenticated
  const role =
    status === "authenticated"
      ? (session?.user?.role as string | undefined)
      : undefined;

  return { session, status, role };
};

export default useRoleRoute;
