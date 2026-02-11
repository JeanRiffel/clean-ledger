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
  ){
  }

  isValid(): boolean{
    return true
  }

  toJSON(): AccountJSON {
    return {
      id: this.id,
      status: this.status,
      createdAt: this.createdAt,
    }
  }

  
}