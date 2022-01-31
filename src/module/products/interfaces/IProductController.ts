import { Request, Response } from "express";
import { getProductDTO } from "../dtos/getProductDTO";

export interface IProductController {
  create(req: Request, res: Response): Promise<Response<getProductDTO>>;
  getOne(req: Request, res: Response): Promise<Response<getProductDTO> | null>;
  getMany(
    req: Request,
    res: Response
  ): Promise<Response<getProductDTO[]> | any>;
  deleteOne(req: Request, res: Response): Promise<Response<any>>;
  deleteAll(req: Request, res: Response): Promise<Response<any>>;
  updateOne(req: Request, res: Response): Promise<Response<getProductDTO>>;
}

export interface IProductDelete {
  deletedCount: number;
}
