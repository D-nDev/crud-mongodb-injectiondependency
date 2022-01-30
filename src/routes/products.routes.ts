import "reflect-metadata";
import "../shared/container";

import { Router } from "express";
import { ProductControllerContainer } from "../shared/container";

const router = Router();

router.post(
  "/newproduct",
  ProductControllerContainer.create.bind(ProductControllerContainer)
);
router.get(
  "/product/:id",
  ProductControllerContainer.getOne.bind(ProductControllerContainer)
);
router.get(
  "/products",
  ProductControllerContainer.getMany.bind(ProductControllerContainer)
);

export default router;
