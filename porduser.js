const amqp = require('amqplib');

async function ConnectToService1() {
    const queueName = 'service1';
    const connection = await amqp.connect('amqp://localhost:5672');
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    await channel.sendToQueue(queueName, Buffer.from('Hello RabbitMQ'));
};

ConnectToService1();