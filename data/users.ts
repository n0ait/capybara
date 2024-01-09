import { db } from "@/lib/db";

export const getUserByMail = async (email: string) => {
  try{
    const user = db.user.findUnique({ where: { email } })

    return user;
  } catch {
    return null;
  }
}

export const getUserById = async (id: string) => {
  try{
    const user = db.user.findUnique({ where: { id } })
    
    return user;
  } catch {
    return null;
  }
}

export const getUserSocietes = async (id: string) => {
  try{
    const societes = await db.societe.findMany({
      include: {
        user: {
          where: {userId: id}
        }
      }
    }) 

    const result = societes.map((societe) => {
      return { ...societe, societes: societe.user.map((user) => user.userId) }
    })
    
    
    return result; 
  } catch {
    return null;
  }
};