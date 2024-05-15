import { db } from "@/server/db";

export const getUserById = async (id: string | undefined) => {
  try {
    const user = await db.user.findFirst({ where: { id } });
    return user;
  } catch {
    return null;
  }
};
