import { PopoverContent } from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { currentUser } from "@/lib/auth";
import { getSocietesByUser } from "@/data/societes";

export const SocietesItems = async () => {
  const user = await currentUser();

  if(!user){
    return {error: "Une erreur est survenue"}
  }

  const societes = await getSocietesByUser(user.id);

  return (
    <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Une société..." />
            <CommandEmpty>Aucun résultat.</CommandEmpty>
            <CommandGroup heading="Sociétés">
                {societes && societes.map((societe) => (
                  <CommandItem
                    key={societe.id}
                    // onSelect={() => {
                    //   setSelectedTeam(societe)
                    //   setOpen(false)
                    // }}
                    className="text-sm"
                  >
                    <Avatar className="mr-2 h-5 w-5">
                      <AvatarImage
                        src={`https://avatar.vercel.sh/${societe.id}.png`}
                        alt={societe.name}
                      />
                      <AvatarFallback>{societe.name.slice(0, 1)}</AvatarFallback>
                    </Avatar>
                    {societe.name}
                    {/* <Check
                      className={cn(
                        "ml-auto h-4 w-4",
                        selectedTeam.value === team.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    /> */}
                  </CommandItem>
                ))}
              </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
  )
}