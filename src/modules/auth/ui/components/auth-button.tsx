"use client";

import { UserCircle2Icon } from "lucide-react";
import { UserButton, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";

export const AuthButton = () => {

  return (
    <>
      <SignedIn>
        <UserButton />
        {/* //todo: Add menu items */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant={"outline"}
            className="px-4 py-2 text-sm font-medium text-blue-500 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircle2Icon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};