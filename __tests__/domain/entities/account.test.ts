import { Account } from '../../../src/domain/account/entities/account';
import { AccountId } from '../../../src/domain/account/value-objects/account-id-value-object';
import { AccountStatus } from '../../../src/domain/account/value-objects/account-status-value-object';
import { expectedOutput, inputData } from './mocks/account-mock';

describe('Account', () => {

  it('should create an Account ', () => {
    const accountId =  AccountId.generate();
    
    const account = new Account(
      accountId,  
      new AccountStatus(inputData.status),
      inputData.createdAt,
      "1234"
    );

    const output = expectedOutput(accountId)
    expect(account).toEqual(output);
  });

});
