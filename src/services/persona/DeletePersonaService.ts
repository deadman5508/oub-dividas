import prismaClient from "../../prisma"

interface DeletePersonaRequest{
    persona_id:string
}
class DeletePersonaService{
    async execute({persona_id}:DeletePersonaRequest){
        const debt= await prismaClient.debt.findFirst({
            where:{
                persona_id:persona_id
            },
            include:{
                persona:true
            }
        })
        if(debt?.persona?.id===persona_id){
            throw new Error('A pessoa/empresa nao pode ser excluida pois esta associada a debitos.')
        }
        const persona=await prismaClient.persona.delete({
            where:{
                id:persona_id
            }
        })
        return persona
    }
}
export {DeletePersonaService}