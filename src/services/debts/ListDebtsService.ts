import prismaClient from "../../prisma"

interface ListRequest{
    persona_id:string
    user_id:string
}
class ListDebtsService{
    async execute({persona_id,user_id}:ListRequest){
        const debts= await prismaClient.debt.findMany({
            where:{
                user_id:user_id,
                persona_id:persona_id
            }
        })
        return debts
    }
}
export{ListDebtsService}