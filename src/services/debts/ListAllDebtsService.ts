import prismaClient from "../../prisma"

interface ListAllRequest{
    user_id:string
}
class ListAllDebtsService{
    async execute({user_id}:ListAllRequest){
        const debts= await prismaClient.debt.findMany({
            where:{
                user_id:user_id,
            }
        })
        return debts
    }
}
export{ListAllDebtsService}