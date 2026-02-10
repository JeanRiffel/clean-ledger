import { AccountStatus } from "../value-objects/account-status-value-object"

export type AccountJSON = {
  id: number,
  status: AccountStatus,
  createdAt: Date,
}

export class Account {

  constructor(
    private id: number,
    private status: AccountStatus,
    private createdAt: Date,
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