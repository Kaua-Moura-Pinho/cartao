import prismaClient from "../../prisma";

interface AuthRequest {
    numero: string;
    usuarioId: string;
}

class ValidateCardService {
    async execute({ numero, usuarioId }: AuthRequest) {
        console.log("Numero do cartão:", numero);
        console.log("ID do usuário:", usuarioId);

        //verifica se o número do cartão está cadastrado
        const card = await prismaClient.cartao.findFirst({
            where: {
                numero: numero,
            }
        });

        console.log("Cartão encontrado:", card);

        if (!card) {
            console.log("Cartão não encontrado");
            return { isValid: false };
        }

        console.log("ID do usuário no cartão:", card.usuarioId);

        // Comparando o ID do usuário do cartão com o ID do usuário autenticado
        const isValid = card.usuarioId === usuarioId;

        console.log("Validação do cartão:", isValid);

        return { isValid };
    }
}

export { ValidateCardService };
