import prismaClient from "../../prisma"

interface CheckSubs{
    user_id:string
}
class CheckSubsService{
    async execute({user_id}:CheckSubs){

        const status = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            select:{
                subscriptions:{
                    select:{
                        id:true,
                        status:true,
                    }
                }
            }
        })
        return status;

    }
}
export {CheckSubsService}