import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IProductService } from "../interfaces/IProductService";
import {
  IProductController,
  IProductDelete,
} from "../interfaces/IProductController";
import { Request, Response } from "express";
import writeLog from "@app/helpers/WriteLog";
import { getProductDTO } from "../dtos/getProductDTO";
import { IProduct } from "../models/product.model";
import createValidate from "../validations/NewProductValidator";
import updateValidate from "../validations/UpdateProductValidator";

@injectable()
export class ProductController implements IProductController {
  constructor(
    @inject("ProductService") private readonly productService: IProductService
  ) {}

  public async create(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO>> {
    const errors = createValidate.resultsValidator(req);
    if (errors.length > 0) {
      return res.status(409).json({
        error: errors,
      });
    }

    try {
      const result = await this.productService.execute(req.body);

      return res.status(201).send(result);
    } catch (error) {
      writeLog(error, "ProductController");
      return res
        .status(500)
        .send({ error: "An error has occured, check logs for more details" });
    }
  }

  public async getOne(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO> | any> {
    try {
      const result = await this.productService.getOne(req.params.id);

      if (!result) {
        return res.status(404).send({ error: "Product not found" });
      } else {
        return res.status(200).send(result);
      }
    } catch (error) {
      writeLog(error, "ProductController");
      return res
        .status(500)
        .send({ error: "An error has occured, check logs for more details" });
    }
  }

  public async getMany(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO[]> | any> {
    try {
      const result: (IProduct & {
        _id: any;
      })[] = await this.productService.getMany();

      if (result.length <= 0) {
        return res.status(404).send({ error: "No products found" });
      } else {
        return res.status(200).send(result);
      }
    } catch (error) {
      writeLog(error, "ProductController");
      return res
        .status(500)
        .send({ error: "An error has occured, check logs for more details" });
    }
  }

  public async deleteOne(req: Request, res: Response): Promise<Response<any>> {
    try {
      const result: IProductDelete = await this.productService.deleteOne(
        req.params.id
      );

      if (result.deletedCount <= 0) {
        return res.status(404).send({ error: "Product not found" });
      } else {
        return res.status(200).send({ success: "Product deleted" });
      }
    } catch (error) {
      writeLog(error, "ProductController");
      return res
        .status(500)
        .send({ error: "An error has occured, check logs for more details" });
    }
  }

  public async deleteAll(req: Request, res: Response): Promise<Response<any>> {
    try {
      const result: IProductDelete = await this.productService.deleteAll();

      if (result.deletedCount <= 0) {
        return res.status(404).send({ error: "No products to be deleted" });
      } else {
        return res.status(200).send({ success: "All Products deleted" });
      }
    } catch (error) {
      writeLog(error, "ProductController");
      return res
        .status(500)
        .send({ error: "An error has occured, check logs for more details" });
    }
  }

  public async updateOne(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO> | any> {
    const errors = updateValidate.resultsValidator(req);
    if (errors.length > 0) {
      return res.status(409).json({
        error: errors,
      });
    }

    try {
      const result = await this.productService.updateOne(
        req.params.id,
        req.body
      );

      if (!result) {
        return res.status(404).send({ error: "Product not found" });
      } else {
        return res.status(200).send(result);
      }
    } catch (error: any) {
      if (error["name"] == "CastError") {
        return res.status(400).send({ error: "ID Malformated" });
      } else {
        writeLog(error, "ProductController");
        return res
          .status(500)
          .send({ error: "An error has occured, check logs for more details" });
      }
    }
  }

  public async updateMany(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO[]> | any> {
    const errors = updateValidate.resultsValidator(req);
    if (errors.length > 0) {
      return res.status(409).json({
        error: errors,
      });
    }

    try {
      const result = await this.productService.updateMany(req.body);

      if (!result) {
        return res.status(404).send({ error: "No products to be updated" });
      } else {
        return res.status(200).send(result);
      }
    } catch (error) {
      writeLog(error, "ProductController");
      return res
        .status(500)
        .send({ error: "An error has occured, check logs for more details" });
    }
  }
}
