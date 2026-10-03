import { IUserRepository, User } from "./IUserRepository";
import { RegisterUser } from "@/dtos/RegisterUserDTO";
import { db } from "../../prisma/db"

export class UserRepository implements IUserRepository{

  async registerFromSignUp(data: RegisterUser): Promise<User>{
    const user = await db.orm.public.User.create({
        completeName: data.completeName,
        email: data.email,
        passwordHash: data.password,
        createdOrigin:1
      },
    );

    return user
  }

  async findByEmail(email: string): Promise<User | null>{
    const user = await db.orm.public.User.where({email: email}).first()

    return user
  }
  async findById(id: string): Promise<User | null>{
    const user = await db.orm.public.User.where({ userId: id }).first()
    
    return user
  }
  async findAll(): Promise<User[] | null>{
    const user = await db.orm.public.User.select("userId","completeName","email","createdAt","createdOrigin").all()

    return user
  }
  async delete(id: string): Promise<void>{
    await db.orm.public.User.where({userId: id}).delete()
  }
  
}