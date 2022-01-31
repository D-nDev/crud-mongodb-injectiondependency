import "reflect-metadata";
import { container, delay } from "tsyringe";
import ProductSchema from "@app/module/products/models/product.model";
import { ProductService } from "@app/module/products/services/ProductService";
import { IProductService } from "@app/module/products/interfaces/IProductService";
import { IProductSchema } from "@app/module/products/interfaces/IProductModel";
import { ProductController } from "@app/module/products/controllers/ProductController";

container.registerSingleton<IProductSchema>(
  "ProductModel",
  delay(() => ProductSchema)
);

container.registerSingleton<IProductService>(
  "ProductService",
  delay(() => ProductService)
);

export const ProductControllerContainer = container.resolve(ProductController);
