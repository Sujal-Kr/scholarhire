import { z } from 'zod'

export const LoginSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Must be 8 or more characters long" }),
}).required()