import Image from "next/image";

import { cookies } from "next/headers"
import { UserNav } from "@/components/dashboard/nav/user-nav";
import { Search } from "@/components/dashboard/nav/search";

import { getSocietesByUser } from "@/data/societes";
import { NavContainer } from "@/components/nav/nav-container";
import { Separator } from "@/components/ui/separator";

const AuthLayout =  async ({ 
  children
}: { 
  children: React.ReactNode
}) => { 
  const collapsed = cookies().get("react-resizable-panels:collapsed")

  const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined

  const societes = await getSocietesByUser();
  if(!societes) {
    return;
  }

  return (
    <>
      <div className="flex h-full">
        <NavContainer
          societes={societes}
          defaultCollapsed={defaultCollapsed}
        />
        <div className="flex flex-col w-full">
          <div>
            <div className="flex h-[52px] items-center px-4">
              <div className="ml-auto flex items-center space-x-4">
                <Search />
                <UserNav />
              </div>
            </div>
            <Separator />
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  )
};

export default AuthLayout;