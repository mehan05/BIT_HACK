const {z} = require("zod");
export const DomainValidation  = z.object({
    name:z.string(),
    problemStatements:z.array(z.string())
})