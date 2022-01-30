import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { createProductDTO } from "../dtos/createProductDTO";
import { IProductService } from "../interfaces/IProductService";
import { IProduct, IProductModel } from "../models/product.model";

@injectable()
export class ProductService implements IProductService {
  constructor(@inject("ProductModel") private productModel: IProductModel) {}

  public async execute(
    data: createProductDTO
  ): Promise<IProduct & { _id: any }> {
    const result = await this.productModel.model.create({ ...data });

    return result;
  }

  public async getOne(id: String): Promise<(IProduct & { _id: any }) | null> {
    const result = await this.productModel.model.findById(id);

    return result;
  }

  public async getMany(): Promise<(IProduct & { _id: any })[] | any> {
    const result = await this.productModel.model.find({});

    return result;
  }
}
