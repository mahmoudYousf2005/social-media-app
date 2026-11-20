import { z } from "zod";

export const  signupSchema = z.object({
    name : z.string().min(2 , "Name must be at least 2 characters"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().min(1 , "Email is required").email("Enterr a valed email"),
    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine((d) => new Date(d) <= new Date(), "Date of birth can’t be in the future"),
    gender: z.enum(["male", "female"], { message: "Select your gender" }),
    password: z.string().min(8, "Password must be at least 8 characters"),
    rePassword: z.string().min(1, "Confirm your password"),
    })
    .refine((d) => d.password === d.rePassword, {
    message: "Passwords do not match",
    path: ["rePassword"],
}) 