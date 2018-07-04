import express from 'express';
import register from '../../model/register_schema';

export default (req,res)=>{
	register.find({email: req.body.email},(error,data)=>{

		if(error){
			res.json({message:"Error"});
		}
		else{
			console.log("In login");
			res.json({message:"Success"});
		}

	})

}