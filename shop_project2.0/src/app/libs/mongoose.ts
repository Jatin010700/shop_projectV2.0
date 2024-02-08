// mongoose.ts
import mongoose, { Document, Schema } from 'mongoose';

interface ShopContent extends Document {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const ProductSchema = new Schema<ShopContent>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const MongooseProductModel =
  mongoose.models.shopProjectV2 ||
  mongoose.model<ShopContent>('shopProjectV2', ProductSchema);

export default MongooseProductModel;
