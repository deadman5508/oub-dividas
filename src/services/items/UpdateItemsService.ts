import prismaClient from "../../prisma"

interface UpdateItemsRequest{
    name:string
    value:number
    item_id:string
}
class UpdateItemsService{
    async execute({item_id,name,value}:UpdateItemsRequest){
        const items= await prismaClient.item.update({
            where:{
                id:item_id
            },
            data:{
                name,
                value
            }
        })
        return items
    }
}
export {UpdateItemsService}