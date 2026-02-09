import { TransactionRepository } from "../../domain/transaction/repositories/transaction-repository";
import { Transaction } from "../../domain/transaction/transaction-entity";
import { pool } from "../config/database/postgresql/pg";

export class PGTransactionRepostory implements TransactionRepository {
  
  async save(transaction: Transaction): Promise<void> {
    try {
    const  { method }  = transaction.getJSON()

    await pool.query('INSERT INTO transaction ( method ) VALUES ( $1 ) RETURNING *;', 
      [ method ]);
    
    console.log('transaction saved')

    }catch(err){
      throw `Error in transaction respository save: ${err} `
    }
  }

}