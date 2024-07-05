import { z } from 'zod';

// Define the Zod schemas for nested objects first
const variantsValidationSchema = z.object({
  type: z.string().min(1, { message: 'Product type is required.' }).trim(),
  value: z.string().min(1, { message: 'Product value is required.' }).trim(),
});

const inventoryValidationSchema = z.object({
  quantity: z.number().min(0, { message: 'Product quantity is required.' }), // Assuming quantity must be non-negative
  inStock: z.boolean().optional(),
});

// Define the main product schema
const productValidationSchema = z.object({
  name: z.string().min(5, { message: 'Product name is required.' }).trim(),
  description: z
    .string()
    .min(10, { message: 'Product description is required.' })
    .trim(),
  price: z.number().min(0, { message: 'Product price is required.' }), // Assuming price must be non-negative
  category: z
    .string()
    .min(1, { message: 'Product category is required.' })
    .trim(),
  tags: z.array(
    z.string().min(1, { message: 'Product tags is required.' }).trim(),
  ),
  variants: z
    .array(variantsValidationSchema)
    .min(1, { message: 'Product variants is required.' }),
  inventory: inventoryValidationSchema.required(),
});

// Export the Zod schema
export default productValidationSchema;
