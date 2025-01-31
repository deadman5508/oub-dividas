import prismaClient from "../../prisma"

interface DeleteItemsrequest{
    item_id:string
}
class DeleteItemsService{
 async execute({item_id}:DeleteItemsrequest){
    const item = await prismaClient.item.delete({
        where:{
            id:item_id
        }
    })
    return item

 }
}
export {DeleteItemsService}