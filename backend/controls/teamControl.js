import { Team } from "../models/model";
import { TeamValidation } from "../validationSchema/teamSchema";

export async function CreateTeam(req, res) {
    const body = req.body;
    const ValidationRes = TeamValidation.safeParse(body);
    try {
        if (ValidationRes.success) {
            const createTeam = await Team.create(body);
            await createTeam.save();
            return res.status(200).json({ msg: "Team Created", data: createTeam });
        }
        return res.status(400).json({ msg: "Invalid Data" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
}

export const GetAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        return res.status(200).json({ msg: "All Teams", data: teams });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

export const GetTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findById(id);
        if (!team) return res.status(404).json({ msg: "Team not found" });
        return res.status(200).json({ msg: "Team Details", data: team });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

export const UpdateTeam = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const ValidationRes = TeamValidation.safeParse(body);
    try {
        if (ValidationRes.success) {
            const updatedTeam = await Team.findByIdAndUpdate(id, body, { new: true });
            if (!updatedTeam) return res.status(404).json({ msg: "Team not found" });
            return res.status(200).json({ msg: "Team Updated", data: updatedTeam });
        }
        return res.status(400).json({ msg: "Invalid Data" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

export const DeleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTeam = await Team.findByIdAndDelete(id);
        if (!deletedTeam) return res.status(404).json({ msg: "Team not found" });
        return res.status(200).json({ msg: "Team Deleted", data: deletedTeam });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

export const AddMembersToTeam = async (req, res) => {
    const { id } = req.params;
    const userId = req.body;
    try {
        const updatedTeam = await Team.findByIdAndUpdate(id, {$push:{members: userId}}, { new: true });
        if (!updatedTeam) return res.status(404).json({ msg: "Team not found" });
        return res.status(200).json({ msg: "Team Updated", data: updatedTeam });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

export const GetAllTeamMembers = async (req, res) => {
    const {id} = req.params;
    try {
        const allMembers = await Team.findById(id).select("members");
        const AllPopulatedMembers = await Team.findById(id).select("members").populate("members");
        return res.status(200).json({ msg: "All Members", data: allMembers, data2: AllPopulatedMembers });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
}

export const UpdateMembersInTeam = async (req, res) => {
    const { id } = req.params;
    const {oldUserId, newUserId} = req.body;
    try {
        const team = await Team.findById(id);
        if(!team) return res.status(404).json({ msg: "Team not found" });

        const TeamMemberIndex = await team.members.indexOd(oldUserId);
        team.members[TeamMemberIndex] = newUserId;
        await team.save();
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
}

export const RemoveMemberFromTeam = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
    try {
       const updatedTeam = await Team.findByIdAndUpdate(id,
        {$pull:{members: userId}},
        { new: true }
       )
       if (!updatedTeam) return res.status(404).json({ msg: "Team not found" });
       return res.status(200).json({ msg: "Team Updated", data: updatedTeam });
    }
    catch (error) {
        return  res.status(500).json({ msg: "Server Error", error });
    }
}

export const SelectProblemStatement = async (req, res) => {
    const { id } = req.params;
    const { problemStatementId } = req.body;
    try {
       const updatedTeam = await Team.findByIdAndUpdate(id,
        {$push:{selectedProblemStatements: problemStatementId}},
        { new: true }
       )
       if (!updatedTeam) return res.status(404).json({ msg: "Team not found" });
       return res.status(200).json({ msg: "Team Updated", data: updatedTeam });
    }
    catch (error) {
        return  res.status(500).json({ msg: "Server Error", error });
    }
}