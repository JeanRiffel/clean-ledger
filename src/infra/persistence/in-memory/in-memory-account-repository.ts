import { Account } from "../../../domain/account/entities/account";
import { AccountRepository } from "../../../domain/account/repository/account-repository";
import { AccountId } from "../../../domain/account/value-objects/account-id-value-object";

export class InMemoryAccountRepository implements AccountRepository{
  private accounts: Account[] = []

  async save(account: Account): Promise<void> {    
    this.accounts.push(account)
  }

  async findbyId(_accountId: AccountId): Promise<Account | null> {
    throw new Error("Method not implemented.");
  }
}