import {z} from 'zod'

export const SignUpSchema = z.object({
    name: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" })
      .max(20)
      .regex(/^[A-Za-z\s]+$/, { message: "Special Characters not allowed" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});