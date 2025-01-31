import { Request, Response } from "express";
import { CreateItemsService } from "../../services/items/CreateItemsService";

class CreateItemsController{
    async handle(request:Request,response:Response){
        const {debt_id,name,persona_id,value}=request.body
        const createItemsController = new CreateItemsService()
        const Items= await createItemsController.execute({
            debt_id,
            name,
            persona_id,
            value
        })
        return response.json(Items)
    }
}
export{CreateItemsController}