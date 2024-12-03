import { describe } from "node:test";
import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters",
  }),
  username: z.string().min(2, {
    message: "username must be at least 2 characters",
  }),
});

export function validateWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((error) => error.message);
    throw new Error(errors.join(", "));
  }

  return result.data;
}

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024; // 1MB
  const acceptedFilesTypes = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size <= maxUploadSize;
    }, "File size must be less than 1 MB")
    .refine((file) => {
      return (
        !file || acceptedFilesTypes.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters",
    })
    .max(100, {
      message: "name must be at most 100 characters",
    }),
  tagline: z
    .string()
    .min(2, {
      message: "tagline must be at least 2 characters",
    })
    .max(100, {
      message: "tagline must be at most 100 characters",
    }),
  price: z.coerce.number().int().min(0, {
    message: "price must be a positive integer",
  }),
  category: z.string(),
  description: z.string().refine(
    (description) => {
      const wordCount = description.split(" ").length;
      return wordCount >= 10 && wordCount <= 1000;
    },
    {
      message: "description must be between 10 and 1000 words",
    }
  ),
  country: z.string(),
  guests: z.coerce.number().int().min(0, {
    message: "guests must be a positive integer",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "bedrooms must be a positive integer",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "beds must be a positive integer",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "baths must be a positive integer",
  }),
  amenities: z.string(),
});
