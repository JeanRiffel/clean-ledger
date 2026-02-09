import { ProductFactory } from '../../../domain/transaction/factories/product-factory';
import { PGTransactionRepostory } from '../../repositories/PGTransactionRepository';
import { connectRabbitMQ } from './rabbitmq-connection';

export const consumeMessages = async (queue: string) => {
    const { channel } = await connectRabbitMQ();
    await channel.assertQueue(queue, { durable: true });
    
    console.log(`Waiting for messages in ${queue}...`);

    channel.consume(queue, async (message) => {
      if (!message) return 

      const transactionInput = JSON.parse(message.content.toString())      
      const transaction = ProductFactory.create(transactionInput)
      
      await new PGTransactionRepostory().save(transaction)

      channel.ack(message);
    });
};


