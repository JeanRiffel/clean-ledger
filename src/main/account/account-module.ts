import { IdempotentDecorator } from "src/application/idempotent-decorator"
import { CreateAccountUseCase } from "../../application/uses-cases/account/create-account-use-case"
import { UseCase } from "src/application/common-use-case."
import { CreateAccountInput } from "src/application/uses-cases/account/create-account-input"
import { CreateAccountOutput } from "src/application/uses-cases/account/create-account-output"
import { AccountRepository } from "src/domain/entities/account-repository"
import { IdempotencyRepository } from "src/application/repositories/idempotency-repository"

export type AccountModuleDependencies = {
  accountRepository: AccountRepository
  idempotencyRepository: IdempotencyRepository
}

export function buildAccountModule(
  deps: AccountModuleDependencies
): UseCase<
  CreateAccountInput & { idempotencyKey: string },
  CreateAccountOutput
> {
  const createAccountUseCase = 
    new CreateAccountUseCase(deps.accountRepository)

  const idempotentCreateAccount =
    new IdempotentDecorator(
      createAccountUseCase, 
      deps.idempotencyRepository
    )

  return idempotentCreateAccount
}