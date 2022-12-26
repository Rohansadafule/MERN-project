import { Router } from "express";
import Transaction from "../models/Transaction.js";

const router = Router();

router.get('/',async(req,res)=>{
    const transaction = await Transaction.find({}).sort({createAt : -1})
    res.json({data:transaction})
})

router.post('/',async(req,res)=>{
    const {amount,description,date}=req.body;
    const transaction = new Transaction({
        amount,
        description,
        date,
    })
    // console.log(req.body);
    await transaction.save()
    res.json({message:'Success'});
})

export default router;