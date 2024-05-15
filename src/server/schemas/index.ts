import z from "zod";

export const LinkSchema = z.object({
  id: z.number(),
  url: z.string(),
  slug: z.string(),
  description: z.string().optional(),
});

export const CreateLinkSchema = z.object({
  url: z
    .string()
    .min(1, { message: "URL is required." })
    .url({
      message: "Please enter a valid URL. Include http:// or https://",
    })
    .regex(/^(?!.*(?:http|https):\/\/(?:slug|slugr)\.vercel\.app).*$/, {
      message: "You cannot redirect to the Slug url.",
    })
    // not contain any blank spaces
    .regex(/^\S+$/, {
      message: "URL must not contain any blank spaces.",
    }),
  slug: z
    .string()
    .min(4, {
      message: "Short link is required and must be at least 4 characters long.",
    })
    .regex(/^[a-zA-Z0-9_-]*$/, {
      message:
        "Custom short link must not contain any blank spaces or special characters.",
    })
    .regex(/^(?!.*&c$)/, {
      message: "Custom short link can't end with &c.",
    }),

  description: z
    .string()
    .max(100, { message: "The description must be less than 100 characters." }),
});

export const EditLinkSchema = z.object({
  id: z.string(),
  url: z
    .string()
    .min(1, { message: "URL is required." })
    .regex(/^(?!.*(?:http|https):\/\/(?:slug|slugr)\.vercel\.app).*$/, {
      message: "You cannot redirect to the Slug url.",
    })
    // not contain any blank spaces
    .regex(/^\S+$/, {
      message: "URL must not contain any blank spaces.",
    }),
  slug: z
    .string()
    .min(4, {
      message: "Short link is required and must be at least 4 characters long.",
    })
    .regex(/^[a-zA-Z0-9_-]*$/, {
      message: "Custom short link must not contain any blank spaces.",
    })
    .regex(/^(?!.*&c$)/, {
      message: "Custom short link can't end with &c.",
    }),
  description: z
    .string()
    .max(100, { message: "The description must be less than 100 characters." }),
});

export const DeleteLinkSchema = z.object({
  slug: z.string().min(1, { message: "Slug is required." }),
});

export const getSingleLinkSchema = z.object({
  linkId: z.number(),
});

export type LinkSchema = z.TypeOf<typeof LinkSchema>;
export type CreateLinkInput = z.TypeOf<typeof CreateLinkSchema>;
export type EditLinkInput = z.TypeOf<typeof EditLinkSchema>;
