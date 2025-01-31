import { Request, Response } from "express";
import { DeleteItemsService } from "../../services/items/DeleteItemsService";

class DeleteItemsController{
    async handle(request:Request, response:Response){
        const {item_id}=request.params
        const deleteItemController = new DeleteItemsService()
        const item = await deleteItemController.execute({
            item_id
        })
        return response.json({message:`item deletado com sucesso`})
    }
}
export {DeleteItemsController}