import { createProductDTO } from "../dtos/createProductDTO";
import { IProduct } from "../models/product.model";

export interface IProductService {
  execute(data: createProductDTO): Promise<IProduct & { _id: any }>;
  getOne(id: String): Promise<(IProduct & { _id: any }) | null>;
  getMany(): Promise<(IProduct & { _id: any })[] | any>;
}
