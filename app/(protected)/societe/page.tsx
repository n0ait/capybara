import { getSocietesByUser } from "@/data/societes";
import { currentUser } from "@/lib/auth";

const AccueilPage = async () => {
  const user = await currentUser();

  if(!user){
    return {error: "Une erreur est survenue"};
  }

  return ( 
    <div>
      <h2 className={"text-2xl font-medium tracking-tight"}>
        Bienvenue, {user.name}.
      </h2>
    </div>
   );
}
 
export default AccueilPage;