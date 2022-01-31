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
router.delete(
  "/deleteoneproduct/:id",
  ProductControllerContainer.deleteOne.bind(ProductControllerContainer)
);
router.delete(
  "/deleteallproducts",
  ProductControllerContainer.deleteAll.bind(ProductControllerContainer)
);
router.patch(
  "/updateoneproduct/:id",
  ProductControllerContainer.updateOne.bind(ProductControllerContainer)
);
router.patch(
  "/updateallproducts",
  ProductControllerContainer.updateMany.bind(ProductControllerContainer)
);

export default router;
