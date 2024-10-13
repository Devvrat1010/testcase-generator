"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LoginForm() {
  const router = useRouter();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  return (
    <Card className="mx-auto max-w-sm ">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required ref={emailRef} />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required ref={passwordRef} />
          </div>
          <Button
            type="submit"
            className="w-full"
            onClick={() => {
              signIn("credentials", {
                email: emailRef.current?.value,
                password: passwordRef.current?.value,
                redirect: false,
                //@ts-ignore
              }).then(({ ok }) => {
                if (ok) {
                  router.push("/");
                } else {
                  toast.error("Invalid email or password");
                }
              });
            }}
          >
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SignIn() {
  return (
    <div className="h-screen flex items-center justify-center">
      <LoginForm />
    </div>
  );
}
