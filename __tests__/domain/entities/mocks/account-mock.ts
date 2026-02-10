import { AccountStatus } from '../../../../src/domain/value-objects/account-status-value-object';

export const inputData = {
  id: 1,
  status: 1,
  createdAt: new Date()
}

export const accountStatus = new AccountStatus(1);

export const outputData = {
  id: 1,
  status: accountStatus,
  createdAt: new Date()
}