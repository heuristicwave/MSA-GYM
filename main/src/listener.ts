import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
        transport: Transport.RMQ,
        options: {
            // urls: ['amqp://guest:guest@localhost:30000'],
            urls: [process.env.RABBITMQ_URL],
            queue: 'main_queue',
            queueOptions: {
                durable: false
            },
        },
    });

    const handleListening = () =>
        console.log('🙆 Microservice is listening.');
    app.listen().then(handleListening);
}
bootstrap();
