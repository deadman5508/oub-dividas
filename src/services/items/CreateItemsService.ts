import prismaClient from "../../prisma"

interface itemsRequest{
    persona_id:string
    debt_id:string
    name:string
    value:string

}
class CreateItemsService{
    async execute ({debt_id,name,persona_id,value}:itemsRequest){
        if(!name || !persona_id || !value || !debt_id){
            throw new Error("Error")
        }
        const item = await prismaClient.item.create({
            data:{
                name:name,
                persona_id:persona_id,
                value:value,
                debt_id:debt_id,
            }
        })
        return item
    }
}
export{CreateItemsService}