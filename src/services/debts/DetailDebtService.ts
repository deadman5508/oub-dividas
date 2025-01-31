import prismaClient from "../../prisma"

interface DetailRequest{
    debt_id:string
}
class DetailDebtService{
    async execute({debt_id}:DetailRequest){
        const debt = await prismaClient.debt.findFirst({
            where:{
                id:debt_id
            }
        })
        return debt
    }
}
export{DetailDebtService}