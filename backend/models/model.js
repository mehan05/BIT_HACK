import { Schema, model } from "mongoose";

const problemStatementSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    cluster: { type: String, required: true }, 
});

const domainSchema = new Schema({
    name: { type: String, required: true, unique: true },
    problemStatements: [{ type: Schema.Types.ObjectId, ref: "ProblemStatement" }],
});

const userSchema = new Schema({
    roll_no: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    isAdmin: { type: Boolean, default: false }, 
});

const teamSchema = new Schema({
    team_name: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    selectedProblemStatements: [{ type: Schema.Types.ObjectId, ref: "ProblemStatement" }],
});

const ProblemStatement = model("ProblemStatement", problemStatementSchema);
const Domain = model("Domain", domainSchema);
const User = model("User", userSchema);
const Team = model("Team", teamSchema);

export  {
    ProblemStatement,
    Domain,
    User,
    Team,
};
