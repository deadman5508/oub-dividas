import prismaClient from "../../prisma";

interface ListItemsRequest {
    debt_id: string;
}

class ListItemsService {
    async execute({ debt_id }: ListItemsRequest): Promise<any[]> {
        if (!debt_id) {
            throw new Error("debt_id é obrigatório");
        }

        try {
            console.log("Filtrando pelo debt_id:", debt_id);
            
            const items = await prismaClient.item.findMany({
                where: { debt_id },
            });

            return items;
        } catch (error) {
            console.error("Erro ao listar itens:", error);
            throw new Error("Erro ao buscar itens.");
        }
    }
}

export { ListItemsService };
