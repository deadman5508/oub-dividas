import { Request, Response } from "express";
import { CreatePersonaService } from "../../services/persona/CreatePersonaService";

class CreatPersonaController {
    async handle (request:Request , response: Response){
        const {name,upvalue,dowvalue,cpf}= request.body

        const user_id=request.user_id

        const createPersonaSerice = new CreatePersonaService()

        const persona = await createPersonaSerice.execute({
            user_id,
            name,
            upvalue,
            dowvalue,
            cpf,
        })
        return response.json(persona)
    }
}
export { CreatPersonaController}