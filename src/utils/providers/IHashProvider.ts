export interface IHashProvider{
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, pwHashed: string): Promise<boolean>;
}
