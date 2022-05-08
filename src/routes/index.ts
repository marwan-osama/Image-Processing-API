import { Router, Request, Response } from "express";
import imgRoutes from "./api/images";

const routes = Router();
routes.use(imgRoutes);

routes.get("/", (req: Request, res: Response): void => {
  res.send(`
    <p>Main route for image processing API
    use the url below to get images</p>
    <p>http://localhost:3000/api/images?fileName={image_name}&width={image_width}&height={image_height}</p>
    `);
});

export default routes;
