import { Account } from "../entities/account"
import { AccountId } from "../value-objects/account-id-value-object"

export interface AccountRepository {
  save(account: Account): Promise<void>
  findbyId(accountId: AccountId): Promise<Account | null>
}