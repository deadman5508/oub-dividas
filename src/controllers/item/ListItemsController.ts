import { Request, Response } from "express";
import { ListItemsService } from "../../services/items/ListItemsService";

class ListItemsController {
    async handle(request: Request, response: Response) {
        const debt_id = request.query.debt_id as string;

        if (!debt_id) {
            return response.status(400).json({ message: "debt_id é obrigatório" });
        }

        console.log("Filtrando items pelo debt_id:", debt_id); // 🔍 Debug

        const listItems = new ListItemsService();
        const items = await listItems.execute({ debt_id });

        return response.json(items);
    }
}
export{ListItemsController}