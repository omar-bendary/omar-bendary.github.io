import { z } from "zod";

// Define and export the schema
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z
    .string()
    .optional()
    .refine((value) => !value || /^\d{10,15}$/.test(value), {
      message: "Phone number must be 10-15 digits",
    }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default formSchema;
