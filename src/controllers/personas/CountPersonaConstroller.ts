import { Request, Response } from "express";
import { CountPersonaService } from "../../services/persona/CountPersonaService";

class CountPersonaController{
    async handle(request:Request,response:Response){
        const user_id = request.user_id
        const countPersona = new CountPersonaService()
        const count = await countPersona.execute({
            user_id
        })
        return response.json(count)
    }
}

export {CountPersonaController}