"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Societe } from "@prisma/client";

interface AccountSwitcherProps {
  isCollapsed: boolean
  societes: Societe[]
}

export function AccountSwitcher({
  isCollapsed,
  societes,
}: AccountSwitcherProps) {
  const [selectedAccount, setSelectedAccount] = React.useState<string>(
    societes[0].name
  )

  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          isCollapsed &&
            "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        )}
        aria-label="Select account"
      >
        <SelectValue placeholder="Select an account">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">        
            <title>Cocerto</title>         
            <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />       
          </svg>
          <span className={cn("ml-2", isCollapsed && "hidden")}>
            {
              societes.find((societe) => societe.name === selectedAccount)
                ?.name
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {societes.map((societe) => (
          <SelectItem key={societe.name} value={societe.name}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">         
              <title>Cocerto</title>         
              <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />       
            </svg>
              {societe.name}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}