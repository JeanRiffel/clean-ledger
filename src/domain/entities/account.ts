import { AccountId } from "../value-objects/account-id"
import { AccountStatus } from "../value-objects/account-status-value-object"

export type AccountJSON = {
  id: AccountId,
  status: AccountStatus,
  createdAt: Date,
}

export class Account {

  constructor(
    private readonly id: AccountId,
    private readonly status: AccountStatus,
    private readonly createdAt: Date,
  ){}

  getId(): AccountId {
    return this.id
  }

  getStatus(): AccountStatus {
    return this.status
  }

  getCreatedAt(): Date {
    return this.createdAt
  }
  
}