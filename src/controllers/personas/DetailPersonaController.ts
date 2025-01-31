import { Request, Response } from "express";
import { DetailPersonaService } from "../../services/persona/DetailPersonaService";

class DetailPersonaController{
    async handle(request:Request, response:Response){
        const persona_id= request.query.persona_id as string
        const detailPersona = new DetailPersonaService()
        const persona = await detailPersona.execute({
            persona_id,
        })
        return response.json(persona)
    }
}
export {DetailPersonaController}