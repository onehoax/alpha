import { Module } from '@nestjs/common';
import { Db, MongoClient, MongoNotConnectedError } from 'mongodb';

@Module({
  providers: [
    {
      provide: 'MONGO_CONNECTION',
      useFactory: async (): Promise<Db> => {
        try {
          const client: MongoClient = await MongoClient.connect(
            'mongodb://admin:pass@localhost:27017/',
          );
          return client.db('alpha');
        } catch (e: unknown) {
          throw new MongoNotConnectedError('Could not connect to MongoDB');
        }
      },
    },
  ],
  exports: ['MONGO_CONNECTION'],
})
export class MongoModule {}
