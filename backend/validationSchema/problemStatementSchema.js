import {z} from "zod"
export const ProblemStatementSchema = z.object({
    title:z.string(),
    description:z.string(),
    cluster:z.string()
})