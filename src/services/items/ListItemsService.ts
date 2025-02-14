import prismaClient from "../../prisma"

interface ListItemsRequest{
    debt_id:string
}
class ListItemsService{
    async execute({debt_id}:ListItemsRequest){
        const items= await prismaClient.item.findMany({
            where:{
                debt_id,
            }
        })
        return items
    }
}
export{ListItemsService}