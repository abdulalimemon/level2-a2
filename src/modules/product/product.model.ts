import { Schema, model } from 'mongoose';
import { TInventory, TProduct, TVariants } from './product.interface';

const variantsSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: [true, 'Product type is required.'],
    trim: true,
  },
  value: {
    type: String,
    required: [true, 'Product value is required.'],
    trim: true,
  },
});

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: [true, 'Product quantity is required.'],
    trim: true,
  },
  inStock: {
    type: Boolean,
  },
});

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    required: [true, 'Product name is required.'],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Product description is required.'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required.'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Product category is required.'],
    trim: true,
  },
  tags: {
    type: [String],
    required: [true, 'Product tags is required.'],
    trim: true,
  },
  variants: {
    type: [variantsSchema],
    required: [true, 'Product variants is required.'],
  },
  inventory: {
    type: inventorySchema,
    required: [true, 'Product inventory is required.'],
  },
});

export const ProductModel = model<TProduct>('Product', productSchema);
