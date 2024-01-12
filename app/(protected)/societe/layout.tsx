import { CalendarDateRangePicker } from "@/components/dashboard/utils/calendar-date-range-picker";
import { UpdateIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/lib/auth";

const SocieteLayout = ({ 
  children
}: { 
  children: React.ReactNode
}) => { 

  return (
    <>
    <div className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">
        Société
      </h2>
      <div className="flex items-center space-x-2">
        <CalendarDateRangePicker />
        <Button size="sm">
          <UpdateIcon />
        </Button>
      </div>
    </div>
    <div className="pt-6">
      {children}
    </div>
    </>
  )
}

export default SocieteLayout;