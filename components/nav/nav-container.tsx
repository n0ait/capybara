"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

import {
  Wand,
  Folder,
  PencilLine,
  FolderCog,
  FileBarChart2,
  BadgeEuro,
  MessageCircleQuestion,
  ArrowLeftToLine
} from "lucide-react";

import { AccountSwitcher } from "./account-switcher";
import { Nav } from "./nav";
import { Separator } from "@/components/ui/separator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Societe } from "@prisma/client";
import { Button } from "../ui/button";

interface NavContainerProps {
  societes: Societe[]
  defaultCollapsed?: boolean
}

export function NavContainer({
  societes,
  defaultCollapsed = false
}: NavContainerProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  const shouldCollapse = () => window.innerWidth < 991;

  React.useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(shouldCollapse());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={cn(
          "h-[100vh] w-full max-w-[200px] items-stretch transition-all duration-300 ease-in-out relative",
          isCollapsed && "min-w-[50px] max-w-[50px]"
        )}
      >
        <div className={cn("flex h-[52px] items-center justify-center", isCollapsed ? 'h-[52px]': 'px-2')}>
          <AccountSwitcher isCollapsed={isCollapsed} societes={societes} />
        </div>
        <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Saisie",
              label: "",
              icon: PencilLine,
              variant: "default",
            },
            {
              title: "Révision",
              label: "7",
              icon: Wand,
              variant: "ghost",
            },
            {
              title: "Dossier",
              label: "",
              icon: Folder,
              variant: "ghost",
            },
            {
              title: "États",
              label: "",
              icon: FileBarChart2,
              variant: "ghost",
            },
            {
              title: "Fiscalité",
              label: "3",
              icon: BadgeEuro,
              variant: "ghost",
            }
          ]}
        />
        <Separator />
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: "Paramètres",
              label: "",
              icon: FolderCog,
              variant: "ghost",
            },
            {
              title: "Support",
              label: "",
              icon: MessageCircleQuestion,
              variant: "ghost",
            }
          ]}
        />
        <div className="absolute bottom-2 p-2">
          <Button 
            onClick={toggleCollapse}
            variant={"ghost"}
          >
            <div className={cn("transition-all duration-300 ease-in-out", isCollapsed ? "rotate-180" : "")}>
              <ArrowLeftToLine size={"14"}/>
            </div>
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
}