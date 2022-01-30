import 'reflect-metadata';
import { container, delay } from 'tsyringe';
import ProductSchema, { IProductModel } from '@app/module/products/models/product.model';
import { ProductService } from '@app/module/products/services/ProductService';
import { IProductService } from '@app/module/products/interfaces/IProductService';
import { ProductController } from '@app/module/products/controllers/ProductController';

container.registerSingleton<IProductModel>(
  'ProductModel',
  delay(() => ProductSchema),
);

container.registerSingleton<IProductService>(
  'ProductService',
  delay(() => ProductService)
)

export const ProductControllerContainer = container.resolve(ProductController)
