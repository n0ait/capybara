import Image from "next/image";

import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/dashboard/nav/main-nav";
import { UserNav } from "@/components/dashboard/nav/user-nav";
import { Search } from "@/components/dashboard/nav/search";
import TeamSwitcher from "@/components/dashboard/nav/team-switcher";
import { CalendarDateRangePicker } from "@/components/dashboard/utils/calendar-date-range-picker";
import { UpdateIcon } from "@radix-ui/react-icons";

const AuthLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => { 

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search />
              <UserNav />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              <CalendarDateRangePicker />
              <Button size="sm">
                <UpdateIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  )
};

export default AuthLayout;