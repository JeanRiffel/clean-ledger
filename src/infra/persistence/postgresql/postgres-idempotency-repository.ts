import { IdempotencyRecord, IdempotencyRepository } from "../../../application/repositories/idempotency-repository";

export class PostgresIdempotencyRepository<O = any> implements IdempotencyRepository<O> {

  // eslint-disable-next-line
  async findByKey(key: string): Promise<IdempotencyRecord<O> | null> {
    throw 'No implemented'
  }
  
  // eslint-disable-next-line
  async save(record: IdempotencyRecord<O>): Promise<void> {
    throw 'No implemented'
  }

}