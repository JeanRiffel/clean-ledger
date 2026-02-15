import { Account } from "../../../domain/entities/account";
import { AccountRepository } from "../../../domain/entities/account-repository";
import { AccountId } from "../../../domain/value-objects/account-id";

export class InMemoryAccountRepository implements AccountRepository{
  private accounts: Account[] = []

  async save(account: Account): Promise<void> {    
    this.accounts.push(account)
  }

  async findbyId(_accountId: AccountId): Promise<Account | null> {
    throw new Error("Method not implemented.");
  }
}