import { Request, Response } from "express";
import { ListItemsService } from "../../services/items/ListItemsService";

class ListItemsController{
    async handle(request:Request,response:Response){
        const debt_id=request.query.debt_id as string
        
        const listItems=new ListItemsService()
        const items = await listItems.execute({
            debt_id
        })
        return response.json(items)
    }
}
export {ListItemsController}