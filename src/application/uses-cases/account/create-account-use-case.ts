import { Account } from "../../../domain/entities/account"
import { AccountId } from "../../../domain/value-objects/account-id"
import { AccountStatus } from "../../../domain/value-objects/account-status-value-object"
import { SystemClock } from "../../../infra/time/system-clock"

export class CreateAccountUseCase {

  constructor(){}

  async execute(): Promise<boolean>{
    const accountId =  AccountId.generate()
    const accountStatus = new AccountStatus(1)
    const createdAt = new SystemClock().now()

    const account = new Account(
      accountId,
      accountStatus,
      createdAt
    )
    
    return account.isValid()
  }

}