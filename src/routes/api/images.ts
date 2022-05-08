import { Router } from "express";
import { promises as fsPromises } from "fs";
import path, { basename } from "path";
import changeSize from "../../utilities/changeSize";

const imgRoutes = Router();

imgRoutes.get("/images", async (req, res) => {
  const imgName = req.query.fileName;
  const imgWidth = parseInt(req.query.width as unknown as string);
  const imgHeight = parseInt(req.query.height as unknown as string);
  const thumbImgPath = path.resolve(
    `assets/thumb/${imgName}_${imgWidth}x${imgHeight}.jpg`
  );
  const fullImgPath = path.resolve(`assets/full/${imgName}.jpg`);
  const fulls = await fsPromises.readdir(`assets/full`);
  const thumbs = await fsPromises.readdir(`assets/thumb`);

  if (fulls.indexOf(`${imgName}.jpg`) === -1) {
    /* checking if image doesn't exists */
    res.send("Image not found!");
  } else if (isNaN(imgHeight) || isNaN(imgWidth)) {
    /* checking if size isn't valid */
    res.send("Invalid image size!");
  } else if (thumbs.indexOf(basename(thumbImgPath)) === -1) {
    /* check if image was processed before */
    await changeSize(fullImgPath, thumbImgPath, imgWidth, imgHeight);
    res.sendFile(thumbImgPath);
  } else {
    res.sendFile(thumbImgPath);
  }
});

export default imgRoutes;
