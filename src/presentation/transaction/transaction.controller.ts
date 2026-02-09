import { Request, Response } from 'express'
import { CreateTransactionUseCase } from "../../application/transaction/create-transaction-use-case";
import { ApplicationError } from "../../application/errors/ApplicationError";
import { DomainError } from "../../domain/errors/DomainError";

export class TransactionController {
  constructor(private createTransactionUseCase: CreateTransactionUseCase) {}

  async addTransaction(req: Request, res: Response): Promise<Response> {
    try {
      const { method } = req.body;

      if (!method) {
        return res.status(400).json({ 
          error: "Method is required",
          statusCode: 400
        });
      }

      await this.createTransactionUseCase.execute({ method });

      return res.status(201).json({ 
        message: "Transaction created successfully",
        statusCode: 201
      });
    } catch (err: any) {
      if (err instanceof DomainError) {
        return res.status(422).json({ 
          error: err.message,
          statusCode: 422
        });
      }

      if (err instanceof ApplicationError) {
        return res.status(500).json({ 
          error: err.message,
          statusCode: 500
        });
      }

      return res.status(400).json({ 
        error: err.message || 'Unknown error',
        statusCode: 400
      });
    }
  }
}