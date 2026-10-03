import { RegisterUser } from "@/dtos/RegisterUserDTO";

export interface User{
  id?: string,
  people_id?: string | null,
  username?: string | null,
  completeName: string,
  email: string
  passwordHash?: string
  createdAt?: string
  updatedAt?: string
  createdOrigin: number
}

export interface IUserRepository{
  registerFromSignUp(data: RegisterUser): Promise<User>;
  findByEmail(email: string): Promise<User|null>
  findById(id: string): Promise<User|null>
  findAll(): Promise<User[]|null>
  delete(id: string): Promise<void>
}