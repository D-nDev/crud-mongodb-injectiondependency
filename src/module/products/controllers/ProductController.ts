import "reflect-metadata";
import { inject, injectable } from "tsyringe";
import { IProductService } from "../interfaces/IProductService";
import { IProductController } from "../interfaces/IProductController";
import { Request, Response } from "express";
import writeLog from "@app/helpers/WriteLog";
import { getProductDTO } from "../dtos/getProductDTO";

@injectable()
export class ProductController implements IProductController {
  constructor(
    @inject("ProductService") private productService: IProductService
  ) {}

  public async create(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO>> {
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
      const result = await this.productService.getMany();

      if (!result) {
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
}
