import { TProduct } from './product.interface';
import { ProductModel } from './product.model';
import { ObjectId } from 'mongodb';

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);

  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await ProductModel.findOne({ _id: new ObjectId(_id) });
  return result;
};

const deleteProductFromDB = async (_id: string) => {
  const result = await ProductModel.updateOne(
    { _id: new ObjectId(_id) },
    { isDeleted: true },
  );

  return result;
};

const updateProductFromDB = async (_id: string, productData: TProduct) => {
  const result = await ProductModel.findOneAndUpdate(
    { _id: new ObjectId(_id) },
    productData,
    {
      new: true,
      runValidators: true,
    },
  );

  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
