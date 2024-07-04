import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/party-card'),
    ProductsModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
