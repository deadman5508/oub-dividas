import prismaClient from "../../prisma"

interface DeleteDebtsRequest{
    debt_id:string
}
class DeleteDebtsService{
    async execute({debt_id}:DeleteDebtsRequest){
        const item = await prismaClient.item.findFirst({
            where:{
                debt_id:debt_id
            },
            include:{
                debt:true
            }
        })

        if(item?.debt?.id===debt_id){
            throw new Error("A dívida não pode ser excluída porque está associada a itens.")
        }

        const debt=await prismaClient.debt.delete({
            where:{
                id:debt_id
            }
        })
        return debt
    }
}
export{DeleteDebtsService}