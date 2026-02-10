import { Router, Request, Response } from 'express'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateAccountUseCase } from '../../application/uses-cases/account/create-account-use-case'

const accountRouter = Router()

accountRouter.post('/account', async(req: Request, res: Response) => {
  const createAccount = new CreateAccountController(new CreateAccountUseCase)
  const result = await createAccount.handle()  
  res.status(201).json(result)
})



export { accountRouter }