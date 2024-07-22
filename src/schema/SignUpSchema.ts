import { z } from 'zod'

export const SignUpSchema = z.object({
  name: z
    .string()
    .min(5, { message: "Name must be 5 or more characters long" })
    .max(20)
    .regex(/^[A-Za-z\s]+$/, { message: "Special Characters not allowed" }),

  email: z.string().email({ message: "Please enter a valid email address" }),

  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" })

}).required();