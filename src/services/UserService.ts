import { UserRepository } from "@/repositories/UserRepository";
import { BCryptProvider } from "@/utils/providers/BCryptHashProvider";
import { RegisterUser } from "@/dtos/RegisterUserDTO";
import { AppError } from "@/utils/AppError";

export class UserService{
  private userRepository = new UserRepository
  private hashProvider = new BCryptProvider
  
  async registerUserFromSignUp({ completeName, email, password }: RegisterUser) {
    const userAlreadyExists = await this.userRepository.findByEmail(email)
    if (userAlreadyExists) {
      throw new AppError("Este e-mail já está em uso")
    }

    const hashedPassword = await this.hashProvider.generateHash(password)

    const user = await this.userRepository.registerFromSignUp({
      completeName,
      email,
      password: hashedPassword,
      createdOrigin: 1
    })

    delete user.passwordHash

    return user
  }
  
}