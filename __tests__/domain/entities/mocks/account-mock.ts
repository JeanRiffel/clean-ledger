import { AccountStatus } from '../../../../src/domain/value-objects/account-status-value-object';

export const inputData = {
  id: 1,
  status: 1,
  createdAt: new Date()
}

export const accountStatus = new AccountStatus(1);


export const expectedOutput = (accountId: any) => {
  return {
    id: accountId,
    status: new AccountStatus(inputData.status),
    createdAt: inputData.createdAt,      
  }
};