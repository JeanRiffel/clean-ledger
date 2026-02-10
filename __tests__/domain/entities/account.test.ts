import { Account } from '../../../src/domain/entities/account';
import { AccountStatus } from '../../../src/domain/value-objects/account-status-value-object';
import { inputData, outputData } from './mocks/account-mock';

describe('Account', () => {

  it('should create an Account ', () => {
    const account = new Account(
      inputData.id,
      new AccountStatus(inputData.status),
      inputData.createdAt
    );
    
    expect(account.toJSON()).toEqual(outputData);
  });


});
