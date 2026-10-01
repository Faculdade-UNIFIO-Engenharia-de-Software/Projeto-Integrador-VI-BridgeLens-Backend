import { Request, Response, NextFunction } from "express";
import { z } from "zod"
import { AppError } from "@/utils/AppError";
import {hash} from "bcrypt"

class UserController  {
  async index(request: Request, response: Response, next: NextFunction){
    try {
      
    }
    catch (error) {
      next(error)
    }
  }
  async show(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
  async create(request: Request, response: Response, next: NextFunction) {

    // Estrutura de dados do Objeto
    const bodySchema = z.object({
      user_name: z.string().min(6, {message:"O Username deve ter no mínimo 6 caracteres."}),
      complete_name: z.string(),
      email: z.string(),
      password: z.string()
    })
    const { user_name, complete_name, email, password } = bodySchema.parse(request.body)

    // Validações de Criação de usuário
    // Valida se o e-mail já está cadastrado 
    const userWithSameEmail = await prisma.user.findFirst({ where: { email } })
    if (userWithSameEmail) {
      throw new AppError("E-mail já cadastrado na plataforma")
    }

    // Usa o bcrypt para gerar senha criptografada
    const hashedPassword = await hash(password, 8)

    //Cria usuário
    await prisma.user.create({
      data: {
        user_name,
        complete_name,
        email,
        password: hashedPassword
      }
    })

    response.status(201).json()
  }
  async update(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }
  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      
    } catch (error) {
      next(error)
    }
  }

}

export {UserController}
