import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { createProductDTO } from "../dtos/createProductDTO";
import { updateProductDTO } from "../dtos/updateProductDTO";
import { IProductService } from "../interfaces/IProductService";
import { IProduct, IProductModel } from "../models/product.model";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject("ProductModel") private readonly productModel: IProductModel
  ) {}

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

  public async deleteOne(id: String): Promise<any> {
    const result = await this.productModel.model.deleteOne({ _id: id }).j(true);

    return result;
  }

  public async deleteAll(): Promise<any> {
    const result = await this.productModel.model.deleteMany({}).j(true);

    return result;
  }

  public async updateOne(
    id: String,
    data: updateProductDTO
  ): Promise<
    | (IProduct & {
        _id: any;
      })
    | null
  > {
    const result = await this.productModel.model.findByIdAndUpdate(
      id,
      {
        ...data,
      },
      {
        new: true,
      }
    );

    return result;
  }

  public async updateMany(data: updateProductDTO): Promise<any> {
    const result = await this.productModel.model.updateMany({}, { ...data });

    if (result.matchedCount <= 0) {
      return null;
    }

    const getUpdatedDocuments = this.getMany();

    return getUpdatedDocuments;
  }
}
