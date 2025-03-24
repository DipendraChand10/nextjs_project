import {z} from 'zod'
 
export const userValidation = z //ek hi value the to object use nahi kiya
   .string()
   .min(2, "Username must be atleast 2 characters")
   .max(20, "Username must be no more then 20 characters")
   .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema= z.object({  //multipale value hai is liye object ka use kiya
  username: userValidation,
  email: z.string().email({message:"Inavlid email address"}),
  password: z.string().min(6,{message: "password must be at least 6 character"})

})   