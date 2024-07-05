import { z } from 'zod';

// Define the Zod schema for the order
const orderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Invalid email address.' })
    .min(1, { message: 'Email is required.' })
    .trim(),
  productId: z.string().min(1, { message: 'Product id is required.' }).trim(),
  price: z
    .number()
    .min(0, { message: 'Product price is required and must be non-negative.' }), // Assuming price must be non-negative
  quantity: z
    .number()
    .min(0, {
      message: 'Product quantity is required and must be non-negative.',
    }) // Assuming quantity must be non-negative
    .int({ message: 'Quantity must be an integer.' }),
});

// Export the Zod schema
export default orderValidationSchema;
