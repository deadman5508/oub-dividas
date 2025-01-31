import { Request, Response } from "express";
import { UpdateDebtService } from "../../services/debts/UpdateDebtService";

class UpdateDebtController{
    async handle(request:Request,response:Response){
        const user_id=request.user_id
        const {
            name,
            vdate,
            vcard,
            cvccard,
            value,
            description,
            persona_id,
            number,
            status,
            debt_id
          } = request.body;
        
        const updateDebt=new UpdateDebtService()
        const debt = await updateDebt.execute({
            user_id,
            name,
            value,
            number,
            description,
            persona_id,
            cvccard,
            vcard,
            vdate,
            debt_id,
            status
        })
        return response.json(debt)
    }
}
export{UpdateDebtController}