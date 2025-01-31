import prismaClient from "../../prisma"

interface CountPersona{
    user_id:string
}
class CountPersonaService{
    async execute({user_id}:CountPersona){
        const count = await prismaClient.persona.count({
            where:{
                user_id:user_id
            }
        })
        return count

    }
}
export {CountPersonaService}