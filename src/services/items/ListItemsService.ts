import prismaClient from "../../prisma"

interface ListItemsRequest{
    debt_id:string
}
class ListItemsService{
    async execute({debt_id}:ListItemsRequest){
        if (!debt_id) {
            throw new Error("debt_id é obrigatório");
        }
        console.log("Filtrando pelo debt_id:", debt_id);
        const items= await prismaClient.item.findMany({
            where:{
                debt_id,
            }
        })
        return items
    }
}
export{ListItemsService}