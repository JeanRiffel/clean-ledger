import { Account } from "./account"

export interface AccountRepository {
  save(account: Account): Promise<void>
  findbyId(account: Account): Promise<Account | null>
}