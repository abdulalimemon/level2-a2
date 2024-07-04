import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>({});

export const ProductModel = model<TProduct>('Product', productSchema);
