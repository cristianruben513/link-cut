import { cache } from "react";
import { auth } from "@/auth";
import { db } from "@/server/db";

/**
 * Get links by user.
 * Authentication required.
 */
export const getLinksAndTagsByUser = cache(async () => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  try {
    const linkData = await db.links.findMany({
      where: {
        creatorId: currentUser.user?.id,
      },
    });

    return {
      links: linkData,
    };
  } catch (error) {
    console.error("🚧 Error while fetching links:", error);
    throw error; // Propaga el error para que el componente que llama pueda manejarlo adecuadamente
  }
});
