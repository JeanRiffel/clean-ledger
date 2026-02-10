import { Account } from '../../../src/domain/entities/account';
import { inputData, outputData } from './mocks/account-mock';

describe('Account', () => {

  it('should create an Account ', () => {
    const account = new Account(
      inputData.id,
      inputData.status,
      inputData.createdAt
    );

    expect(account.toJSON()).toEqual(outputData)
    
  });


});
