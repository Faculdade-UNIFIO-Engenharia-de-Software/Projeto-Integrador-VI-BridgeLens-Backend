import { hash, compare } from "bcrypt"
import { IHashProvider } from "./IHashProvider"

export class BCryptProvider implements IHashProvider {

  async generateHash(payload: string): Promise<string>{
    const saltRounds = 8
    return hash(payload, saltRounds)
  }
  
  async compareHash(payload: string, pwHashed: string): Promise<boolean>{
    return compare(payload, pwHashed)
  }
}