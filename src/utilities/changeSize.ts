import sharp, { OutputInfo } from "sharp";

export default async (
  path: string,
  outPath: string,
  width: number,
  height: number
): Promise<OutputInfo> => {
  return await sharp(path).resize(width, height).toFile(outPath);
};
