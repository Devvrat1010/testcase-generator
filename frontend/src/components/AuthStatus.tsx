"use client";

import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function AuthStatus() {
  const session = useSession();
  if (session.status === "loading")
    return (
      <div className="w-1/3 h-10 bg-slate-500 opacity-15 rounded-xl animate-pulse"></div>
    );
  if (session.status === "unauthenticated") {
    return (
      <div className="flex items-center gap-4">
        <div className="">Not Signed in</div>
        <Button className="text-sm py-1 h-8" onClick={() => signIn()}>
          Sign in
        </Button>
      </div>
    );
  }

  if (session.status === "authenticated") {
    return (
      <div className="flex items-center gap-4">
        <div className="">Signed in as {session.data.user.role}</div>
        <Button
          className="text-sm py-1 h-8"
          variant="destructive"
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </div>
    );
  }
}
