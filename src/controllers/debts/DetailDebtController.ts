import { Request, Response } from "express"
import { DetailDebtService } from "../../services/debts/DetailDebtService"

class DetailDebtController{
    async handle(request:Request,response:Response){
        const debt_id=request.query.debt_id as string
        const detailDebt=new DetailDebtService()
        const debt =await detailDebt.execute({
            debt_id
        })
        return response.json(debt)
    }
}
export {DetailDebtController}