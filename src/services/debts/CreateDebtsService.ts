import prismaClient from "../../prisma"


interface debtsRequest{
    user_id:string
    persona_id:string
    name:string
    vdate?:string
    vcard?:string
    cvccard?:string
    value?:string
    description?:string
    number?:string

}
class CreateDebtsService{
    async execute({name,vdate,user_id,vcard,cvccard,value,description,persona_id,number}:debtsRequest){
        if(!name || !persona_id || !user_id){
            throw new Error("Error")
        }
        const userAlreadyExists= await prismaClient.debt.findFirst({
            where:{
                name:name,
                persona_id:persona_id,
                user_id
            }
        })
        if(userAlreadyExists){
            throw new Error("Debts already exist")
        }

        const debt = await prismaClient.debt.create({
            data:{
                name:name,
                persona_id:persona_id,
                number:number,
                value:value,
                vcard:vcard,
                cvccard:cvccard,
                vdate:vdate,
                description:description,
                user_id:user_id

            }
        })
        return debt
    }
}
export {CreateDebtsService}