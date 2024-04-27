import { PrismaClient } from "@prisma/client"
import prismaClient from "../../prisma";
import {hash} from 'bcryptjs';

interface UserRequest {
    nome: string
    email: string
    login: string
    senha: string
}

class CreateUserService {
    async execute({nome, email, login, senha}:UserRequest) {

        //verifica se foi enviado o valor do e-mail
        if(!email){
            throw new Error("E-mail não enviado!");
        }

        //verifica se o e-mail já foi cadastrado
        const UserAlreadyExists = await prismaClient.usuario.findFirst({
            where:{
                email:email
            }
        })

        if(UserAlreadyExists){
            throw new Error("E-mail já cadastrado!")
        }

        const senhaHash = await hash(senha, 8)

        const user = await prismaClient.usuario.create({
            data:{
                nome:nome,
                email:email,
                login:login,
                senha:senhaHash,
            },
            select:{
                id:true,
                nome:true,
                email:true,
            }
        })

        return user;
    }
}

export { CreateUserService }