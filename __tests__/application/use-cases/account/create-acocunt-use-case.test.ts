import { CreateAccountUseCase } from '../../../../src/application/uses-cases/account/create-account-use-case'
import { InMemoryAccountRepository  } from '../../../../src/infra/database/in-memory/in-memory-account-repository'

describe('CreateAccountUseCase', () => {
  it('should create an account', async () => {
    
    const createUseCase = new CreateAccountUseCase(
      new InMemoryAccountRepository
    )

    const useCase = await createUseCase.execute()

    expect(useCase.status ).toEqual('OPEN')
    
  })
})
