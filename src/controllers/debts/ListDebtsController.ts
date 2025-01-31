import { Request, Response } from "express";
import { ListDebtsService } from "../../services/debts/ListDebtsService";

class ListDebtsController{
    async handle(request:Request, response:Response){
        const user_id=request.user_id
        const persona_id=request.query.persona_id as string
        const listDebts= new ListDebtsService()
        const debts=await listDebts.execute({
            user_id,
            persona_id
        })
        return response.json(debts)
    }
}
export {ListDebtsController}