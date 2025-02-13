import { Request, Response } from "express";
import { ListSumItemsService } from "../../services/persona/ListSumItemsService";

class ListSumItemsController {
  async handle(request: Request, response: Response) {
      const persona_id = request.query.persona_id as string; // Pegando debt_id da query

      const listSumItemsService = new ListSumItemsService();
      const personaValue = await listSumItemsService.execute({ 
        persona_id
    });
      
      return response.json(personaValue); 
  }
}

export { ListSumItemsController };
