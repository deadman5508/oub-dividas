import prismaClient from "../../prisma";
interface ListRequest{
    persona_id:string
}
class ListSumItemsService{
     async execute ({persona_id}:ListRequest) {
        // Busca o débito e calcula a soma diretamente no banco
        const personaValue = await prismaClient.debt.findUnique({
          where: { id: persona_id },
          include: {
            item: true, // Se precisar listar os itens
          },
        });
  
        // Calcula a soma diretamente no Prisma
        const total = await prismaClient.item.aggregate({
          where: { persona_id },
          _sum: {
            value: true,
          },
        });
  
        // Retorna os dados do débito com o total dos itens
        return { ...personaValue, totalValue: total._sum.value || 0 };
      
    }
  }
export{ListSumItemsService}
