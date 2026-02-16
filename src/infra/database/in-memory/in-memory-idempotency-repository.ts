import { IdempotencyRepository } from "../../../application/repositories/idempotency-repository";

export class InMemoryIdempotencyRepository implements IdempotencyRepository {
  private storage: Array<{ key: string; response: any }> = []

  async save({ key, response }: { key: string; response: any }): Promise<void> {
    this.storage.push({ key, response })
  }

  async findByKey(key: string): Promise<any | null> {
    const entry = this.storage.find(e => e.key === key)
    return entry ? entry.response : null
  }
}