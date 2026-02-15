import { CreateAccountUseCase } from "../../application/uses-cases/account/create-account-use-case"
import { PostgresAccountRepository } from "../../infra/persistence/postgres-account-repository"

export function buildAccountModule(): CreateAccountUseCase {
  const accountRepository = new PostgresAccountRepository()
  const createAccountUseCase = new CreateAccountUseCase(accountRepository)
  return createAccountUseCase
  
}