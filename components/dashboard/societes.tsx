import { getUserSocietes } from "@/data/users";
import { User } from "next-auth";

interface SocietesProps {
  user: User
}

const Societes = async (
  {
    user
  }: SocietesProps) => {
  const societes = await getUserSocietes(user.id);

  return ( 
    <>
      {JSON.stringify(societes)}
    </>
   );
}
 
export default Societes;