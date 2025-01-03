import express from "express";
import { 
  CreateTeam, 
  GetAllTeams, 
  GetTeamById, 
  UpdateTeam, 
  DeleteTeam, 
  AddMembersToTeam, 
  UpdateMembersInTeam, 
  RemoveMemberFromTeam 
} from "../controls/teamControl";
import { checkAdmin } from "../middleware/adminMiddleware"
export const TeamRouter = express.Router();

TeamRouter.post("/create-team",CreateTeam)
.get("/get-all-teams",GetAllTeams)


TeamRouter.get("/get-team/:id",GetTeamById)
.put("/update-team/:id",UpdateTeam)
.delete("/delete-team/:id",DeleteTeam)
.patch("/add-team-members/:id",AddMembersToTeam)
.patch("/update-team-members/:id",UpdateMembersInTeam)
.delete("/remove-member-from-team/:id",RemoveMemberFromTeam)

    
