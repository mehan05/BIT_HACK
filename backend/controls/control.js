const DataModel = require('../models/model');
const AddDomain =async (req,res)=>{
    const{name} =req.body;
    try {
        const existing = await DataModel.findOne({name});
        if(existing){
            return res.json({msg:"Domain already Exist"});
        }
        const newDomain = await DataModel.create({name, problemStatement: []});
        res.json({msg:"Domain Added",data:newDomain})
    } catch (error) {
        res.json({msg:error})
    }

}


const deleteDomain = async(req,res)=>{
    const {name} = req.body;
    try {
        const contains = await DataModel.findOne({name});
        if(!contains)
        {
            return res.status(100).json({msg:`No domain named:${name}`});
        }
        try {
            const deleting = await DataModel.findOneAndDelete({name});
            if(deleting)
            {
                res.status(200).json({msg:`Deleted:${name}`})
            }
            else{
                res.status(400).json({msg:`Can't Deleted:${name}`})
                
            }
            
        } catch (error) {
            res.status(500).json({msg:error})
            
        }

    } catch (error) {
        
    }
}
const AddProblemStatement = async(req,res)=>{
    const{name,problemStatement} = req.body;
    try {
        const AddProblemStatement = await DataModel.findOneAndUpdate(
            {name},
            { $addToSet: { problemStatement: { $each: problemStatement } } },  
            { new: true, useFindAndModify: false }  ,
        )
        if(AddProblemStatement)
        {
            res.status(200).json({sussess:true,msg:AddProblemStatement})

        }
    } catch (error) {
        res.ststus(500).json({success:false,msg:"Failed TO update in DB"})
    }
}

const deleteProblemStatement = async (req, res) => {
    const index = req.params.id;
    const { name } = req.body; 

    try {
        const domain = await DataModel.findOne({ name });
        if (!domain) {
            return res.status(404).json({ success: false, msg: `Domain not found: ${name}` });
        }

        if (index < 0 || index >= domain.problemStatement.length) {
            return res.status(400).json({ success: false, msg: `Index out of bounds` });
        }

        domain.problemStatement.splice(index, 1);

        await domain.save();

        res.status(200).json({ success: true, msg: `Deleted problem statement at index ${index}`, data: domain });
    } catch (error) {
        res.status(500).json({ success: false, msg: "Failed to delete problem statement", error });
    }
}


const updateProblemStatementByIndex = async (req, res) => {
    const index = req.params.id;
    const { name, updatedProblemStatement } = req.body;

    try {
        const domain = await DataModel.findOne({ name });
        
        if (!domain) {
            return res.status(404).json({ success: false, msg: `Domain not found: ${name}` });
        }

        if (index < 0 || index >= domain.problemStatement.length) {
            return res.status(400).json({ success: false, msg: `Index out of bounds` });
        }

        const updatedDomain = await DataModel.findOneAndUpdate(
            { name }, 
            { $set: { [`problemStatement.${index}`]: updatedProblemStatement } },  
            { new: true, useFindAndModify: false }
        );

        if (updatedDomain) {
            res.status(200).json({ success: true, msg: `Updated problem statement at index ${index}`, data: updatedDomain });
        } else {
            res.status(500).json({ success: false, msg: "Failed to update the problem statement" });
        }

    } catch (error) {
        res.status(500).json({ success: false, msg: "Server error", error });
    }
}

module.exports = {AddDomain,AddProblemStatement,deleteProblemStatement,deleteDomain,updateProblemStatementByIndex,};