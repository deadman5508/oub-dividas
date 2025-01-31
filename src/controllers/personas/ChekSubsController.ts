import { Request, Response } from "express";
import { CheckSubsService } from "../../services/persona/CheckSubsService";

class CheckSubsController{
    async handle(request:Request, response:Response){
        const user_id=request.user_id
        const checkSubs = new CheckSubsService()
        const status=await checkSubs.execute({
            user_id
        })
        return response.json(status)
    }
}
export {CheckSubsController}