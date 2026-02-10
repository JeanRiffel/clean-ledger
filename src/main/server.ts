import express, { Request, Response } from "express"
import dotenv from 'dotenv'
import { MongoDatabaseSingleton } from "../infra/config/database/mongo-database-sigleton"
import { accountRouter } from "../interfaces/http/routes"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(accountRouter)
app.use(express.json())

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

