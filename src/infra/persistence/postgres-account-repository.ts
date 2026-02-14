import { Account } from "../../domain/entities/account";
import { AccountRepository } from "../../domain/entities/account-repository";

export class PostgresAccountRepository implements AccountRepository{
  
  async save(account: Account): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async findbyId(account: Account): Promise<Account | null> {
    throw new Error("Method not implemented.");
  }
  
}