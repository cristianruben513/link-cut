"use server";

import type { CreateLinkSchema, EditLinkSchema } from "@/server/schemas";
import type { z } from "zod";

import { auth } from "@/auth";
import { db } from "@/server/db";
import { revalidatePath } from "next/cache";

/**
 * Get single link data.
 * Return an object.
 * Authentication required.
 * @type {string()}
 */
export const getSingleLink = async (id: string) => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  const result = await db.links.findUnique({
    where: {
      id,
    },
  });

  return result;
};

/**
 * Check if slug is available.
 * Return true or false.
 * Not authentication required.
 * @type {string()}
 */
export const checkIfSlugExist = async (slug: string) => {
  const result = await db.links.findUnique({
    where: {
      slug: slug,
    },
  });

  if (result) {
    return true;
  }

  return false;
};

/**
 * Create new link.
 * Authentication required.
 * @type {z.infer<typeof LinkSchema>}
 */

interface createLinkResult {
  limit?: boolean;
  error?: string;
  linkId?: string;
}

export const createLink = async (
  values: z.infer<typeof CreateLinkSchema>,
): Promise<createLinkResult> => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return { error: "Not authenticated. Please login again." };
  }

  // Create new link:
  const result = await db.links.create({
    data: {
      ...values,
      creatorId: currentUser.user?.id,
    },
  });

  revalidatePath("/");
  revalidatePath("/dashboard");

  return { limit: false, linkId: result.id };
};

/**
 * Update link data.
 * Authentication required.
 * @type {z.infer<typeof EditLinkSchema>}
 */
export const updateLink = async (values: z.infer<typeof EditLinkSchema>) => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  // Update link:
  await db.links.update({
    where: { id: values.id },
    data: {
      ...values,
      creatorId: currentUser.user?.id,
    },
  });

  revalidatePath("/");
  revalidatePath("/dashboard");

  return;
};

/**
 * Delete link.
 * Authentication required.
 * @type {string()}
 */
export const deleteLink = async (id: string) => {
  const currentUser = await auth();

  if (!currentUser) {
    console.error("Not authenticated.");
    return null;
  }

  // Update link:
  const result = await db.links.delete({
    where: { id: id, creatorId: currentUser.user?.id },
  });

  revalidatePath("/dashboard");

  return result;
};
