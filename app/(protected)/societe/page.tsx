import { getSocietesByUser } from "@/data/societes";
import { currentUser } from "@/lib/auth";

const AccueilPage = async () => {
  const user = await currentUser();

  if(!user){
    return {error: "Une erreur est survenue"};
  }

  return ( 
    <div>
      {JSON.stringify(user)}
    </div>
   );
}
 
export default AccueilPage;