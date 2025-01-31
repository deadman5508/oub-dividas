import prismaClient from "../../prisma"

interface UpdateItemsRequest{
    name:string
    value:string
    item_id:string
}
class UpdateItemsService{
    async execute({item_id,name,value}:UpdateItemsRequest){
        const items= await prismaClient.item.update({
            where:{
                id:item_id
            },
            data:{
                name:name,
                value:value
            }
        })
        return items
    }
}
export {UpdateItemsService}