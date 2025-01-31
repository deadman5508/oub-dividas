import prismaClient from "../../prisma"

interface DetailRequest{
    persona_id:string
}
class DetailPersonaService{
    async execute({persona_id}:DetailRequest) {
        const persona = await prismaClient.persona.findFirst({
            where:{
                id:persona_id
            }
        })
    return persona
    }

}
export {DetailPersonaService}