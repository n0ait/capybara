import { db } from "@/lib/db";

export const getSocietesByUser = async (id: string) => {
  try {
    const societeUsers = await db.societeUser.findMany({
      where: { userId: id },
      include: { societe: true },
    });

    const societes = societeUsers.map(su => su.societe);

    return societes;
  } catch (error) {
    console.error("Error fetching societes by user:", error);
    return null;
  }
};
