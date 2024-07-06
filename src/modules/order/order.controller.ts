import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response) => {
  try {
    const { order: orderData } = req.body;

    // zod validation
    const zodParsedData = orderValidationSchema.parse(orderData);

    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong.',
      data: error,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
