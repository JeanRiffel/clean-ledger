export type AccountStatusJSON = {
  id: number,
  description: 'OPEN' | 'BLOCKED' | 'CLOSED' | 'INVALID'
}

export class AccountStatus {  

  constructor(private id: number){}

  toJSON(): AccountStatusJSON {
    if(this.id === 1){
      return {
        id: this.id,
        description: 'OPEN'
      }
    }

    if(this.id === 2){
      return {
        id: this.id,
        description: 'BLOCKED'
      }
    }

    if(this.id === 3){
      return {
        id: this.id,
        description: 'CLOSED'
      }
    }

    return {
      id: this.id,
      description: 'INVALID'
    }
  }


}