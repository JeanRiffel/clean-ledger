import amqp from 'amqplib';

export const connectRabbitMQ = async () => {
    try {
        const connection = await amqp.connect('amqp://user:pass@localhost:5672');
        const channel = await connection.createChannel();
        console.log('Connected to RabbitMQ');
        return { connection, channel };
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        throw error;
    }
};
