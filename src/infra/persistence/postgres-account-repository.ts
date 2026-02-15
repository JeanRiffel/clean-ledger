import { Account } from "../../domain/entities/account";
import { AccountRepository } from "../../domain/entities/account-repository";
import { AccountId } from "../../domain/value-objects/account-id";

export class PostgresAccountRepository implements AccountRepository{
  
  async save(account: Account): Promise<void> {
    throw new Error("Method not implemented.");
  }
  
  async findbyId(_accountId: AccountId): Promise<Account | null> {
    throw new Error("Method not implemented.");
  }
  
}