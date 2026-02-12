import { Account } from "../../../domain/entities/account"
import { AccountId } from "../../../domain/value-objects/account-id"
import { AccountStatus } from "../../../domain/value-objects/account-status-value-object"

export class CreateAccountUseCase {

  constructor(){}

  async execute(): Promise<boolean>{
    const accountStatus = new AccountStatus(1)

    const account = new Account(
      AccountId.generate(),
      accountStatus,
      new Date()
    )
    
    return account.isValid()
  }

}