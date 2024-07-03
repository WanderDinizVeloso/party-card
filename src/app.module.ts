import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/data')],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
