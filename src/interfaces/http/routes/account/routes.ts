import { Router, Request, Response } from 'express'
import { CreateAccountController } from '../../controllers/create-account.controller'
import { authMiddleware } from '../../middlewares/auth.middleware'
import { TokenVerifier } from 'src/application/shared/authentication/token-authentication'

const accountRouter = (
  controller: CreateAccountController,
  tokenVerifier: TokenVerifier
): void => {

  const router = Router()

  router.post('/account', authMiddleware(tokenVerifier), async(_req: Request, res: Response) => {
    try {
      const result = await controller.handle()  
      res.status(result.statusCode).json(result)
    }catch(error){
      res.status(500).json(error)
    }
  })

}

export { accountRouter }