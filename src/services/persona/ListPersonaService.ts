import prismaClient from "../../prisma"

interface PersonaRequest{
    user_id:string
    status:boolean | string
}
class ListPersonService{

    async execute({user_id,status}:PersonaRequest){
        const persona = await prismaClient.persona.findMany({
            where:{
                user_id: user_id,
                status: status === 'true' ? true : false
            }
        })
        return persona
    }
}

export {ListPersonService}