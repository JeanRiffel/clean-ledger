import { Router, Request, Response } from 'express'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateAccountUseCase } from '../../application/uses-cases/account/create-account-use-case'

const accountRouter = Router()

accountRouter.post('/account', async(req: Request, res: Response) => {
  try {
    const createAccount = new CreateAccountController(new CreateAccountUseCase)
    const result = await createAccount.handle()  
    res.status(result.statusCode).json(result)
  }catch(error){
    res.status(500).json(error)
  }
})



export { accountRouter }