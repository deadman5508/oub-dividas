import prismaClient from "../../prisma";

interface personaRequest{
    user_id:string
    name:string
    upvalue: string
    dowvalue:string
    cpf:string

}


//verificar se ele é premium , caso nao seja limitar a quantidade de pessoas

class CreatePersonaService{
    async execute ({user_id,name,upvalue,dowvalue,cpf}:personaRequest){
        if(!name){
            throw new Error("Error")
        }
        const userAlreadyExists= await prismaClient.persona.findFirst({
            where:{
                name:name
            }
        })
        if(userAlreadyExists){
            throw new Error("Persona already exist")
        }

        //verificar quantas pessoas esse usuario ja cadastrou
        const myPersonas = await prismaClient.persona.count({
            where:{
                user_id:user_id
            }
        })

        //verificar se ele é premium , caso nao seja limitar a quantidade de pessoas
        const user = await prismaClient.user.findFirst({
            where:{
                id:user_id
            },
            include:{
                subscriptions:true
            }
        })

        //--- codigo para bloqueio caso o assinante nao seja premium
        // if (myPersonas >= 3 && user.subscriptions?.status!=="active"){
        //     throw new Error('Use premium para salvar seu dados online ')
        // }                   

        const persona = await prismaClient.persona.create({
            data:{
                name:name,
                user_id:user_id,
                upvalue:upvalue,
                dowvalue:dowvalue,
                cpf:cpf
                
            }
        })
        return persona
    }
}
export {CreatePersonaService}