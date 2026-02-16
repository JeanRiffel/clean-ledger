import { UseCase } from "src/application/shared/idempotency/common-use-case."
import { Account } from "../../../domain/account/entities/account"
import { AccountRepository } from "../../../domain/account/repository/account-repository"
import { AccountId } from "../../../domain/account/value-objects/account-id-value-object"
import { AccountStatus } from "../../../domain/account/value-objects/account-status-value-object"
import { SystemClock } from "../../../infra/time/system-clock"
import { CreateAccountOutput } from "../dto/create-account-output"
import { CreateAccountInput } from "../dto/create-account-input"
import { PasswordHasher } from "src/application/shared/security/password-hasher"


export class CreateAccountUseCase implements UseCase<CreateAccountInput, CreateAccountOutput> {

  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly passwordHasher: PasswordHasher
  ){}

  async execute(input: CreateAccountInput): Promise<CreateAccountOutput>{
    const hashedPassword = await this.passwordHasher.hash(input.password)
    
    const accountId =  AccountId.generate()
    const accountStatus = new AccountStatus(1)
    const createdAt = new SystemClock().now()

    const account = new Account(
      accountId,
      accountStatus,
      createdAt,
      hashedPassword
    )
    
    await this.accountRepository.save(account);
    return CreateAccountOutput.from(account)
  }

}