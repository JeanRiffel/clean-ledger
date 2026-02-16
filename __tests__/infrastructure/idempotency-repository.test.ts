import { InMemoryIdempotencyRepository } from '../../src/infra/database/in-memory/in-memory-idempotency-repository'

describe("Idempotency Respository", ()=> {

  let repository: InMemoryIdempotencyRepository

  beforeEach(()=>{
    repository = new InMemoryIdempotencyRepository()
  })

  test('persists idempotency key', async ()=>{

    const key = "abc-123"
    const response = { accountId: "1"}

    await repository.save({key, response})

    const result = await repository.findByKey(key)

    expect(result).toEqual(response)
  })

})