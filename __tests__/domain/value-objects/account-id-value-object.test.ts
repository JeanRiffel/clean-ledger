import { AccountId } from '../../../src/domain/account/value-objects/account-id-value-object'

describe('AccountIdValue', ()=>{

  test('create an account ID', ()=> {
    const id = AccountId.generate()   

    expect(id.getValue()).toBeDefined()
    expect(typeof id.getValue()).toBe('string')
  })

  test('create account from a valid UUID', ()=> {
    const uuid  = crypto.randomUUID()
    const id = AccountId.from(uuid)

    expect(id.getValue()).toBe(uuid)
  })  

})