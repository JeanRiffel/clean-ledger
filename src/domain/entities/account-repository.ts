import { Account } from "./account"
import { AccountId } from "../value-objects/account-id"

export interface AccountRepository {
  save(account: Account): Promise<void>
  findbyId(accountId: AccountId): Promise<Account | null>
}