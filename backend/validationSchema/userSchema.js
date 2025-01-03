import {z} from "zod"
export const userSchema = z.object({
    roll_no:z.string(),
    name:z.string(),
    email:z.string().email(),
    isAdmin:z.boolean()
})