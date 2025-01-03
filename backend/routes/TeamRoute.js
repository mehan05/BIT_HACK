const express = require("express");
const { CreateTeam, GetAllTeams, GetTeamById, UpdateTeam, DeleteTeam, AddMembersToTeam, UpdateMembersInTeam, RemoveMemberFromTeam } = require("../controls/teamControl");
const { checkAdmin } = require("../middleware/adminMiddleware");
const TeamRouter = express.Router();

TeamRouter.post("/create-team",CreateTeam)
.get("/get-all-teams",GetAllTeams)


TeamRouter.get("/get-team/:id",GetTeamById)
.put("/update-team/:id",UpdateTeam)
.delete("/delete-team/:id",DeleteTeam)
.patch("/add-team-members/:id",AddMembersToTeam)
.patch("/update-team-members/:id",UpdateMembersInTeam)
.delete("/remove-member-from-team/:id",RemoveMemberFromTeam)

    
module.exports = TeamRouter;