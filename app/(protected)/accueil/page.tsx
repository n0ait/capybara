import { getSocietesByUser } from "@/data/societes";
import { currentUser } from "@/lib/auth";

const AccueilPage = async () => {
  const user = await currentUser();

  if(!user){
    return {error: "Une erreur est survenue"};
  }

  const societes = await getSocietesByUser(user?.id);

  return ( 
    <div>
      {JSON.stringify(user)}
      {JSON.stringify(societes)}
    </div>
   );
}
 
export default AccueilPage;