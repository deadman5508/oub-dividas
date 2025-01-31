import { Request, Response } from "express";
import { UpdateItemsService } from "../../services/items/UpdateItemsService";

class UpdateItemsController{
 async handle(request:Request,response:Response){
    const {item_id,name,value}=request.body
    const updateItemsController = new UpdateItemsService()
    const items = await updateItemsController.execute({
        item_id,
        name,
        value
    })
    return response.json(items)
 }
}
export {UpdateItemsController}