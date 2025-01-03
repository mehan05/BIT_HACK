import {z} from "zod"
export const TeamValidationSchema = z.object({
    team_name:z.string(),
    members:z.array(z.string()).refine((arr)=>arr.length>=5||arr.length==0,"Select Maximum 5 Members"),
    selectedProblemStatements:z.array(z.string()).refine((arr)=>arr.length<=1||arr.length==0,"Select Only One Problem Statement")
})