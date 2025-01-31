import { Request, Response } from "express";
import { ListPersonService } from "../../services/persona/ListPersonaService";
class ListPersonaController{
    async handle(request:Request, response:Response){
        const user_id=request.user_id
        const status = request.query.status as string

        const listPersona = new ListPersonService()

        const persona = await listPersona.execute({
            user_id,
            status
        })
        return response.json(persona)
    }
}

export { ListPersonaController}