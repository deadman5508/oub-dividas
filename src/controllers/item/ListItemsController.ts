import { Request, Response } from "express";
import { ListItemsService } from "../../services/items/ListItemsService";

class ListItemsController{
    async handle(request:Request,response:Response){
        const debt_id=request.body
        const listItems=new ListItemsService()
        const items = await listItems.execute({
            debt_id
        })
        return response.json(items)
    }
}
export {ListItemsController}