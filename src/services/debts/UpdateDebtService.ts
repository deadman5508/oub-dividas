import prismaClient from "../../prisma";

interface debtsRequest{
    user_id:string
    persona_id:string
    debt_id:string
    name:string
    vdate?:string
    vcard?:string
    cvccard?:string
    value?:string
    description?:string
    number?:string
    status?:string|boolean

}
class UpdateDebtService{
    async execute({name,vdate,vcard,cvccard,value,description,persona_id,number,status,debt_id,user_id}:debtsRequest){
        const debt = await prismaClient.debt.update({
            where:{
                id:debt_id
            },
            data:{
                name:name,
                persona_id:persona_id,
                number:number,
                value:value,
                vcard:vcard,
                cvccard:cvccard,
                vdate:vdate,
                description:description,
                status:status===true?true:false,
            }
        })
        return debt
    }
}
export {UpdateDebtService}