import { UseCase } from "src/application/common-use-case."
import { Account } from "../../../domain/entities/account"
import { AccountRepository } from "../../../domain/entities/account-repository"
import { AccountId } from "../../../domain/value-objects/account-id-value-object"
import { AccountStatus } from "../../../domain/value-objects/account-status-value-object"
import { SystemClock } from "../../../infra/time/system-clock"
import { CreateAccountOutput } from "./create-account-output"
import { CreateAccountInput } from "./create-account-input"


export class CreateAccountUseCase implements UseCase<CreateAccountInput, CreateAccountOutput> {

  constructor(
    private readonly accountRepository: AccountRepository
  ){}

  async execute(): Promise<CreateAccountOutput>{
    const accountId =  AccountId.generate()
    const accountStatus = new AccountStatus(1)
    const createdAt = new SystemClock().now()

    const account = new Account(
      accountId,
      accountStatus,
      createdAt
    )
    
    await this.accountRepository.save(account);
    return CreateAccountOutput.from(account)
  }

}