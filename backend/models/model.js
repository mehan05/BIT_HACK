const mongoose = require("mongoose");

const problemStatementSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    cluster: { type: String, required: true }, 
});

const domainSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    problemStatements: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProblemStatement" }],
});

const userSchema = new mongoose.Schema({
    roll_no: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    isAdmin: { type: Boolean, default: false }, 
});

const teamSchema = new mongoose.Schema({
    team_id: { type: String, unique: true, required: true },
    team_name: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    selectedProblemStatements: [{ type: mongoose.Schema.Types.ObjectId, ref: "ProblemStatement" }],
});

const ProblemStatement = mongoose.model("ProblemStatement", problemStatementSchema);
const Domain = mongoose.model("Domain", domainSchema);
const User = mongoose.model("User", userSchema);
const Team = mongoose.model("Team", teamSchema);

module.exports = {
    ProblemStatement,
    Domain,
    User,
    Team,
};
