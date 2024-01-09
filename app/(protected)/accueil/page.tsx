"use client";

import { useCurrentUser } from '@/hooks/use-current-user';
import { getUserSocietes } from '@/data/users';
import Societes from '@/components/dashboard/societes';

const SettingsPage = () => {
  const user = useCurrentUser();
  
  
  return ( 
    <div>
      {JSON.stringify(user)}
      <br />
      {/* TODO fix user null */}
        <Societes user={user} />
      <form>
        <button type="submit">Deconnexion</button>
      </form>
    </div>
   );
}
 
export default SettingsPage;