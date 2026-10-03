import { Request, Response, NextFunction } from "express";
import { z } from "zod"
import { AppError } from "@/utils/AppError";
import { UserService } from "@/services/UserService";

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
  async create(request: Request, response: Response, next: NextFunction) {  }
  async registerFromSignUp(request: Request, response: Response, next: NextFunction) {
    
    try {
      const { completeName, email, password } = request.body
      const userService = new UserService

      const user = await userService.registerUserFromSignUp({ completeName, email, password, createdOrigin: 1 })

      return response.status(201).json(user)
    } catch (error) {
      next(error)
    }
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
