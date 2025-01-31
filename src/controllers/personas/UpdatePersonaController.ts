import { Response,Request} from "express";
import { UpdatePersonaService } from "../../services/persona/UpdatePersonaService";

class UpdatePersonaController{
    async handle(request:Request,response:Response){
        const user_id = request.user_id
        const{name,status,persona_id,cpf,dowvalue,upvalue} = request.body
        
        const updatePersona=new UpdatePersonaService()
        
        const persona = await updatePersona.execute({
            user_id,
            cpf,
            dowvalue,
            name,
            persona_id,
            status,
            upvalue

        })

        return response.json(persona)
    }
}
export {UpdatePersonaController}