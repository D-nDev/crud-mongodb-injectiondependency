import "reflect-metadata";
import ProductsRoutes from "./products.routes";
import app from "../app";

import swaggerUi from "swagger-ui-express";
import swaggerFile from "../swagger.json";

app.use(ProductsRoutes);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

export { app };
