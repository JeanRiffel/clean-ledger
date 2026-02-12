import { Account } from "../../../domain/entities/account"
import { AccountId } from "../../../domain/value-objects/account-id"
import { AccountStatus } from "../../../domain/value-objects/account-status-value-object"
import { SystemClock } from "../../../infra/time/system-clock"
import { CreateAccountOutput } from "./create-account-output"

export class CreateAccountUseCase {

  constructor(){}

  async execute(): Promise<CreateAccountOutput>{
    const accountId =  AccountId.generate()
    const accountStatus = new AccountStatus(1)
    const createdAt = new SystemClock().now()

    const account = new Account(
      accountId,
      accountStatus,
      createdAt
    )
    
    return CreateAccountOutput.from(account)
  }

}