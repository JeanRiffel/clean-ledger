import { buildAccountModule } from "src/main/account/account-module";
import { PostgresAccountRepository } from "../persistence/postgresql/postgres-account-repository";
import { PostgresIdempotencyRepository } from "../persistence/postgresql/postgres-idempotency-repository";
import { UseCase } from "src/application/shared/idempotency/common-use-case.";
import { CreateAccountInput } from "src/application/account/dto/create-account-input";
import { CreateAccountOutput } from "src/application/account/dto/create-account-output";
import { BcryptPasswordHasher } from "../security/bycrypt-password-hasher";

export function createAccountUseCase(): UseCase<CreateAccountInput, CreateAccountOutput> {
  const dependencies = {
    accountRepository: new PostgresAccountRepository(),
    idempotencyRepository: new PostgresIdempotencyRepository(),
    passwordHasher: new BcryptPasswordHasher()
  }

  return buildAccountModule(dependencies)
}