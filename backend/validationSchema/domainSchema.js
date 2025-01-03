import {z} from "zod"
export const DomainValidation  = z.object({
    name:z.string(),
    problemStatements:z.array(z.string())
})