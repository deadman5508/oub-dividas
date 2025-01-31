import { Request, response, Response } from "express";
import { UpdateUserService } from "../../services/user/UpdateUseService";

class UpdateUserController{
    async handle(request:Request, response:Response){
        try{
            const {name}=request.body
            const user_id=request.user_id

            // Validação básica para o campo "name"
                if (!name || typeof name !== "string" || name.trim() === "") {
                return response.status(400).json({ error: "Nome inválido ou não fornecido" });
            }
            const updateUser = new UpdateUserService()

            const user = await updateUser.execute({
                user_id,
                name
                })

        return response.json(user)
        }catch(err){
        console.error("Erro ao atualizar Usuario:",err.message)
        return response.status(500).json({error:err.message || "Erro interno do servidor"})
        }
    }
}

export {UpdateUserController}