import { TOrder } from './order.interface';
import { model, Schema } from 'mongoose';

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    trim: true,
    unique: true,
  },
  productId: {
    type: String,
    required: [true, 'Product id is required.'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required.'],
  },
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required.'],
  },
});

export const OrderModel = model<TOrder>('Order', orderSchema);
