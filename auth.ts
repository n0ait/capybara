import { PrismaAdapter } from "@auth/prisma-adapter";
import { UserRole } from "@prisma/client";
import { db } from "./lib/db";
import { getUserById } from "./data/users";
import authConfig from "./auth.config";
import NextAuth, { type DefaultSession} from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async session({ session, token }){
      if(token.sub && session.user){ //sub = id user
        session.user.id = token.sub;
      }

      if(token.role && session.user){
        session.user.role = token.role as UserRole;
      }


      return session;
    },

    async jwt({ token }){
      if(!token.sub) return token; //sub = id user

      const existingUser = await getUserById(token.sub);

      if(!existingUser) return token;
      token.role = existingUser.role;

      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig
})