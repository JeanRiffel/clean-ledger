import { Account } from "../../../domain/account/entities/account";

export class CreateAccountOutput {
  constructor(
    public readonly accountId: string,
    public readonly status: string,
    public readonly createdAt: string
  ) {}


  static from(account: Account): CreateAccountOutput {
    return new CreateAccountOutput(
      account.getId().getValue(),
      account.getStatus().getDescription(),
      account.getCreatedAt().toISOString()
    )
  }
}