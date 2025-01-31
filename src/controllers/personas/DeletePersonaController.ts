import { Request, Response } from "express";
import { DeletePersonaService } from "../../services/persona/DeletePersonaService";

class DeletePersonaController{
    async handle(request:Request,response:Response){
        try {
            const { persona_id } = request.params;
      
            // Valida se o parâmetro foi fornecido
            if (!persona_id) {
              return response.status(400).json({ error: "O parâmetro 'debt_id' é obrigatório." });
            }
      
            // Instancia o serviço e executa
            const deletePersonaService = new DeletePersonaService();
            await deletePersonaService.execute({
               persona_id 
              });
      
            // Retorna resposta de sucesso
            return response.status(200).json({ message: "Dívida deletada com sucesso!" });
          } catch (error: any) {
            // Tratamento de erros
                if (error.message === "Dívida não encontrada.") {
                  return response.status(404).json({ error: "Dívida não encontrada." });
                }
      
                if (error.message === "A pessoa/empresa nao pode ser excluida pois esta associada a debitos.") {
                  return response.status(400).json({ error: "A pessoa/empresa nao pode ser excluida pois esta associada a debitos." });
                }
      
            // Erros genéricos
            console.error(error);
            return response.status(500).json({ error: "Erro interno no servidor." });
          }
        }
      }
export{DeletePersonaController}