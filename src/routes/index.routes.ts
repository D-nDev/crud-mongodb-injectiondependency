import "reflect-metadata";
import ProductsRoutes from "./products.routes";
import app from "../app";

app.use(ProductsRoutes);

export { app };
