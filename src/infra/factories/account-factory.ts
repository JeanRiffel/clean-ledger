import { buildAccountModule } from "src/main/account/account-module";
import { PostgresAccountRepository } from "../persistence/postgres-account-repository";
import { PostgresIdempotencyRepository } from "../persistence/postgres-idempotency-repository";
import { UseCase } from "src/application/common-use-case.";
import { CreateAccountInput } from "src/application/uses-cases/account/create-account-input";
import { CreateAccountOutput } from "src/application/uses-cases/account/create-account-output";

export function createAccountUseCase(): UseCase<CreateAccountInput, CreateAccountOutput> {
  const dependencies = {
    accountRepository: new PostgresAccountRepository(),
    idempotencyRepository: new PostgresIdempotencyRepository(),
  }

  return buildAccountModule(dependencies)
}