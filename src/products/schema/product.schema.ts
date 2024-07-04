import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

type ProductDocument = Product & Document;

@Schema({ timestamps: true, versionKey: false })
class Product extends Document {
  @Prop()
  name: string;

  @Prop()
  active: boolean;
}

const ProductSchema = SchemaFactory.createForClass(Product).index(
  { _id: 1, active: 1 },
  { unique: true },
);

export { ProductDocument, Product, ProductSchema };
