import { Request, Response } from "express";
import { ListItemsService } from "../../services/items/ListItemsService";

class ListItemsController {
    async handle(request:Request, response: Response) {
            const { debt_id } = request.params;
            const listItems = new ListItemsService();
            const items = await listItems.execute({ 
                debt_id 
            });

            // Se não houver itens com esse 'debt_id', retornamos um 404
            if (items.length === 0) {
                return response.status(404).json({ message: "Nenhum item encontrado para este debt_id." });
            }

            return response.json(items);
        } 
}

export { ListItemsController };
