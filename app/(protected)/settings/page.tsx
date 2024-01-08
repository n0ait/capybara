"use client";

import { useCurrentUser } from '@/hooks/use-current-user';
import { useSession } from 'next-auth/react';

const SettingsPage = () => {
  const user = useCurrentUser();
  return ( 
    <div>
      {JSON.stringify(user)}

      <form>
        <button type="submit">Deconnexion</button>
      </form>
    </div>
   );
}
 
export default SettingsPage;