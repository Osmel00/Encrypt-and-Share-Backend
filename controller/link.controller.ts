
import LinkModel from "../model/link.schema"
import { Request, Response,NextFunction } from "express";
 export const addLinks = async (req:Request,res:Response) => { 
    const { key } = req.body
    await LinkModel.create({link:key}).then((model:any) => res.status(200).send(model)).catch((err) => console.log(err));
  

}

export const getKey = async (req:Request, res:Response) => {
   const {key} = req.params
   //console.log(key)
   await LinkModel.findOneAndDelete({link:key}).then(link =>link? res.status(200).json({ok:true,link}): res.status(404).json({ok:false,link})).catch((err) => res.status(500).send(err));


}//