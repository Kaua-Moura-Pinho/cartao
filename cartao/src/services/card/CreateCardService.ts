import prismaClient from "../../prisma";

interface UserRequest {
    numero: string
    nomeUsuario: string
    validade: string
    cvv: number
    usuarioId?: string
}

class CreateCardService {
    async execute({numero, nomeUsuario, validade, cvv}:UserRequest) {

       /*  //verifica se foi enviado o valor do e-mail
        if(!email){
            throw new Error("E-mail não enviado!");
        } */

        //verifica se o numero já foi cadastrado
        const cardAlreadyExists = await prismaClient.cartao.findFirst({
            where:{
                numero:numero
            }
        })

        if(cardAlreadyExists){
            throw new Error("Número do cartão já cadastrado!")
        }

        const card = await prismaClient.cartao.create({
            data:{
                numero:numero,
                nomeUsuario:nomeUsuario,
                validade:validade,
                cvv:cvv,
            },
            select:{
                id:true,
                numero:true,
                validade:true,
                cvv:true,
            }
        })

        return card;
    }
}

export { CreateCardService }