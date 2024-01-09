import { Input } from "@/components/ui/input";

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Recherche..."
        className="h-9 md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}