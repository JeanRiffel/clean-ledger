import { AccountId } from "../value-objects/account-id-value-object"
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
    private password: string
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
  
  getPassword(): String {
    return this.password
  }
  
}