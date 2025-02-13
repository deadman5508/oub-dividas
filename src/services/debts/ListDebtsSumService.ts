import prismaClient from "../../prisma";
interface ListRequest{
    debt_id:string
}
class ListDebtsSumService{
     async execute ({debt_id}:ListRequest) {
        // Busca o débito e calcula a soma diretamente no banco
        const debt = await prismaClient.debt.findUnique({
          where: { id: debt_id },
          include: {
            item: true, // Se precisar listar os itens
          },
        });
  
        // Calcula a soma diretamente no Prisma
        const total = await prismaClient.item.aggregate({
          where: { debt_id },
          _sum: {
            value: true,
          },
        });
  
        // Retorna os dados do débito com o total dos itens
        return { ...debt, totalValue: total._sum.value || 0 };
      
    }
  }
export{ListDebtsSumService}
