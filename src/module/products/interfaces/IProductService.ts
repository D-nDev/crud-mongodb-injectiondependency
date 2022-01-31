import { createProductDTO } from "../dtos/createProductDTO";
import { getProductDTO } from "../dtos/getProductDTO";
import { updateProductDTO } from "../dtos/updateProductDTO";
import { IProduct } from "../models/product.model";

export interface IProductService {
  execute(data: createProductDTO): Promise<IProduct & { _id: any }>;
  getOne(id: String): Promise<(IProduct & { _id: any }) | null>;
  getMany(): Promise<(IProduct & { _id: any })[] | any>;
  deleteOne(id: String): Promise<any>;
  deleteAll(): Promise<any>;
  updateOne(
    id: String,
    data: updateProductDTO
  ): Promise<
    | (IProduct & {
        _id: any;
      })
    | null
  >;
  updateMany(data: updateProductDTO): Promise<any>;
}
