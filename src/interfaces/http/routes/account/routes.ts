import { Router, Request, Response } from 'express'
import { CreateAccountController } from '../../controllers/create-account.controller'
import { authMiddleware } from '../../middlewares/auth.middleware'

const accountRouter = (
  controller: CreateAccountController  
) => {

  const router = Router()

  router.post('/account', authMiddleware, async(req: Request, res: Response) => {
    try {
      const result = await controller.handle()  
      res.status(result.statusCode).json(result)
    }catch(error){
      res.status(500).json(error)
    }
  })

}

export { accountRouter }