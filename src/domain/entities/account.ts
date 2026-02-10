export type AccountJSON = {
  id: number,
  status: number,
  createdAt: Date,
}

export class Account {

  constructor(
    private id: number,
    private status: number,
    private createdAt: Date,
  ){
  }

  toJSON(): AccountJSON {
    return {
      id: this.id,
      status: this.status,
      createdAt: this.createdAt,
    }
  }

  
}