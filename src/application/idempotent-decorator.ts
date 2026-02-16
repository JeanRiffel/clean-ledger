import { UseCase } from "./common-use-case.";
import { IdempotencyRepository } from "./repositories/idempotency-repository";

export class IdempotentDecorator<I, O> implements UseCase<I, O>{

  constructor(
    private useCase: UseCase<I, O>,
    private idempotencyRepository: IdempotencyRepository
  ){}

  async execute(input: any): Promise<O>{
    const key = input.idempotencyKey

    const existing = await this.idempotencyRepository.findByKey(key)
    if(existing){
      return existing.response as O
    }

    const result = await this.useCase.execute(input)

    await this.idempotencyRepository.save({
      key,
      response: result
    } as any)

    return result
  }

}