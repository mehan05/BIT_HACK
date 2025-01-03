import { Domain, ProblemStatement } from "../models/model.js";
import { DomainValidation } from "../validationSchema/domainSchema.js";
import { ProblemStatementSchema } from "../validationSchema/problemStatementSchema.js";
// CREATE Domain
export const AddDomain = async (req, res) => {
    const body = req.body;
    const ValidationRes = DomainValidation.safeParse(body);
    try {
        if (ValidationRes.success) {
            const addDomain = await Domain.create(body);
            return res.status(200).json({ msg: "Domain Added", data: addDomain });
        }
        return res.status(400).json({ msg: "Invalid Data" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// CREATE Problem Statement
export const AddProblemStatement = async (req, res) => {
    const body = req.body;
    const ValidationRes = ProblemStatementSchema.safeParse(body);
    try {
        if (ValidationRes.success) {
            const addProblemStatement = await ProblemStatement.create(body);
            await addProblemStatement.save();
            return res.status(200).json({ msg: "Problem Statement Added", data: addProblemStatement });
        }
        return res.status(400).json({ msg: "Invalid Data" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// READ All Domains
export const GetAllDomains = async (req, res) => {
    try {
        const domains = await Domain.find().populate("problemStatements");
        return res.status(200).json({ msg: "All Domains", data: domains });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// READ Single Domain
export const GetDomainById = async (req, res) => {
    const { id } = req.params;
    try {
        const domain = await Domain.findById(id).populate("problemStatements");
        if (!domain) return res.status(404).json({ msg: "Domain not found" });
        return res.status(200).json({ msg: "Domain Details", data: domain });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// UPDATE Domain
export const UpdateDomain = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const ValidationRes = DomainValidation.safeParse(body);
    try {
        if (ValidationRes.success) {
            const updatedDomain = await Domain.findByIdAndUpdate(id, body, { new: true });
            if (!updatedDomain) return res.status(404).json({ msg: "Domain not found" });
            return res.status(200).json({ msg: "Domain Updated", data: updatedDomain });
        }
        return res.status(400).json({ msg: "Invalid Data" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// UPDATE Problem Statement
export const UpdateProblemStatement = async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const ValidationRes = ProblemStatementSchema.safeParse(body);
    try {
        if (ValidationRes.success) {
            const updatedProblemStatement = await ProblemStatement.findByIdAndUpdate(id, body, { new: true });
            if (!updatedProblemStatement) return res.status(404).json({ msg: "Problem Statement not found" });
            return res.status(200).json({ msg: "Problem Statement Updated", data: updatedProblemStatement });
        }
        return res.status(400).json({ msg: "Invalid Data" });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// DELETE Domain
export const DeleteDomain = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedDomain = await Domain.findByIdAndDelete(id);
        if (!deletedDomain) return res.status(404).json({ msg: "Domain not found" });
        return res.status(200).json({ msg: "Domain Deleted", data: deletedDomain });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// DELETE Problem Statement
export const DeleteProblemStatement = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProblemStatement = await ProblemStatement.findByIdAndDelete(id);
        if (!deletedProblemStatement) return res.status(404).json({ msg: "Problem Statement not found" });
        return res.status(200).json({ msg: "Problem Statement Deleted", data: deletedProblemStatement });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};

// ADD Problem Statement to Domain
export const AddProblemStatementToDomain = async (req, res) => {
    const { domainId, problemStatementId } = req.body;
    try {
        const domain = await Domain.findByIdAndUpdate(
            domainId,
            { $push: { problemStatements: problemStatementId } },
            { new: true }
        ).populate("problemStatements");
        if (!domain) return res.status(404).json({ msg: "Domain not found" });
        return res.status(200).json({ msg: "Problem Statement added to Domain", data: domain });
    } catch (error) {
        return res.status(500).json({ msg: "Server Error", error });
    }
};
