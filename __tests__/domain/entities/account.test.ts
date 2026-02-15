import { Account } from '../../../src/domain/entities/account';
import { AccountId } from '../../../src/domain/value-objects/account-id';
import { AccountStatus } from '../../../src/domain/value-objects/account-status-value-object';
import { inputData, expectedOutput } from './mocks/account-mock';

describe('Account', () => {

  it('should create an Account ', () => {
    const accountId =  AccountId.generate();
    
    const account = new Account(
      accountId,  
      new AccountStatus(inputData.status),
      inputData.createdAt
    );

    const output = expectedOutput(accountId)
    expect(account).toEqual(output);
  });

});
