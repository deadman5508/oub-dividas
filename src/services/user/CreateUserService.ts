import prismaClient from "../../prisma";
import { hash } from "bcryptjs";

interface userRequest{
    name:string;
    email:string;
    password:string;
}
class CreateUserService{
    async execute ({name,email,password}:userRequest){
        if(!email){
            throw new Error ("email incorrect")
        }
        const userAlreadyExists= await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })
        if(userAlreadyExists){
            throw new Error("User/Email already exist")
        }
        const passwordHash = await hash(password,8)
        const user = await prismaClient.user.create({
            data:{
                name:name,
                email:email,
                password:passwordHash
            },
            select:{
                id:true,
                name:true,
                email:true
                
            }
        })
        return user;
    }
}
export {CreateUserService}