import express, { Request, Response } from "express"
import dotenv from 'dotenv'
import { MongoDatabaseSingleton } from "../infra/config/database/mongo-database-sigleton"
import { accountRouter } from "../interfaces/http/routes"
import { CreateAccountController } from "../interfaces/http/controllers/create-account.controller"
import { buildAccountModule } from "./account/account-module"
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const accountModule = buildAccountModule()
const createAccountController = new CreateAccountController(accountModule)
accountRouter(createAccountController)

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  return res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Initialize database and start server
const startServer = async () => {
  try {
    await MongoDatabaseSingleton.getInstance()
    console.log('✓ Database connection established')

    app.listen(port, () => {
      console.log(`✓ Server is running on port ${port}`)
    })
  } catch (error) {
    console.error('✗ Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

