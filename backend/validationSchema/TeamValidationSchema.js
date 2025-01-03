import {z} from "zod"
export const TeamValidationSchema = z.object({
    team_id:z.string(),
    team_name:z.string(),
    members:z.array(z.string()).refine((arr)=>arr.length==5,"Select Maximum 5 Members"),
    selectedProblemStatements:z.array(z.string()).refine((arr)=>arr.length<=1,"Select Only One Problem Statement")
})