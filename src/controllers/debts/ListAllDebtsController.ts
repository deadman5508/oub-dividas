import { Request, Response } from "express";
import { ListAllDebtsService } from "../../services/debts/ListAllDebtsService";

class ListAllDebtsController{
    async handle(request:Request, response:Response){
        const user_id=request.user_id
        const listDebts= new ListAllDebtsService()
        const debts=await listDebts.execute({
            user_id,
        })
        return response.json(debts)
    }
}
export {ListAllDebtsController}