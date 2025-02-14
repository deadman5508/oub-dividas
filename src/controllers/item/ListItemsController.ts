import { Request, Response } from "express";
import { ListItemsService } from "../../services/items/ListItemsService";

class ListItemsController {
    async handle(request: Request, response: Response) {
        try {
            // Captura o 'debt_id' diretamente da URL
            const { debt_id } = request.params;

            if (!debt_id) {
                return response.status(400).json({ message: "Parâmetro 'debt_id' é obrigatório." });
            }

            console.log("🔍 Filtrando items pelo debt_id:", debt_id);

            const listItems = new ListItemsService();
            const items = await listItems.execute({ debt_id });

            // Se não houver itens com esse 'debt_id', retornamos um 404
            if (items.length === 0) {
                return response.status(404).json({ message: "Nenhum item encontrado para este debt_id." });
            }

            return response.json(items);
        } catch (error) {
            console.error("❌ Erro ao listar itens:", error);
            return response.status(500).json({ message: "Erro interno ao buscar itens." });
        }
    }
}

export { ListItemsController };
