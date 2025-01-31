import prismaClient from "../../prisma"


interface PersonaRequest{
    user_id:string
    persona_id:string
    name:string
    status:boolean|string
    cpf:string
    upvalue:string
    dowvalue:string  
}
class UpdatePersonaService{
    async execute({user_id,name,dowvalue='0',cpf='0',status=true,upvalue='0',persona_id}:PersonaRequest){
        //buscar informacoes sobre cliente premium
        const user = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            include:{
                subscriptions:true
            }
        })
        //--caso eu queira bloquear quem nao eh premium
        // if(user?.subscriptions?.status !=='active'){
        //     throw new Error("Not Authorized")

        // }

        const persona = await prismaClient.persona.update({
            where:{
                id:persona_id
            },
            data:{
                name:name,
                cpf:cpf,
                status:status ===true?true:false,
                dowvalue:dowvalue,
                upvalue:upvalue,


            }
        })
        return persona
    }
}
export {UpdatePersonaService}