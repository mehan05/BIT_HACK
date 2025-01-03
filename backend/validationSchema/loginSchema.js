import {z} from "zod"
export const loginSchema = z.object({
    roll_no:z.string(),
    name:z.string(),
    email:z.string().email(),
    isAdmin:z.boolean()
})