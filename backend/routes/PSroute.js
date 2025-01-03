import express from "express";
import { 
  AddDomain, 
  GetAllDomains, 
  GetDomainById, 
  UpdateDomain, 
  UpdateProblemStatement, 
  DeleteDomain, 
  DeleteProblemStatement, 
  AddProblemStatementToDomain, 
  AddProblemStatement
} from "../controls/problemStatement.js";
import { SelectProblemStatement } from "../controls/teamControl.js";

export const PSrouter = express.Router();

PSrouter.post("/create-domain",AddDomain)
.post("/create-problemStatement",AddProblemStatement)
.get("/get-all-domain",GetAllDomains)


PSrouter.get("/get-domain/:id",GetDomainById)
.put("/update-domain/:id",UpdateDomain)
.put("/update-problem-statement/:id",UpdateProblemStatement)
.delete("/delete-domain/:id",DeleteDomain)
.delete("/delete-problem-statement/:id",DeleteProblemStatement)
.post("/add-problem-statement-to-domain",AddProblemStatementToDomain)
.patch("/choose-problem-statement",SelectProblemStatement)
