export type IdempotencyRecord<O = any> = {
  id?: string
  key: string
  request_hash?: string
  response?: O
  response_body?: string
  status_code?: number
  created_at?: Date
}

export interface IdempotencyRepository<O = any> {
  findByKey(key: string): Promise<IdempotencyRecord<O> | null>
  save(record: IdempotencyRecord<O>): Promise<void>
}