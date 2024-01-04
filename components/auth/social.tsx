"use client";

import { FcGoogle } from "react-icons/fc";
import { Icons } from "@/components/icons";

import { Button } from "@/components/ui/button";


export const Social = () => {
  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continuer avec
          </span>
        </div>
      </div>
      <div className="flex items-center w-full gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5 mr-2" />
          Google
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <Icons.microsoft className="h-5 w-5 mr-2" />
          Microsoft
        </Button>
      </div>
    </div>
  );
};