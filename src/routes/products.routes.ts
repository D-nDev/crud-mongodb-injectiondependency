import "reflect-metadata";
import "../shared/container";

import { Router } from "express";
import { ProductControllerContainer } from "../shared/container";
import createValidate from "@app/module/products/validations/NewProductValidator";
import updateValidate from "@app/module/products/validations/UpdateProductValidator";

const router = Router();

router.post(
  "/newproduct",
  createValidate.check(),
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
  updateValidate.check(),
  ProductControllerContainer.updateOne.bind(ProductControllerContainer)
);
router.patch(
  "/updateallproducts",
  updateValidate.check(),
  ProductControllerContainer.updateMany.bind(ProductControllerContainer)
);

export default router;
