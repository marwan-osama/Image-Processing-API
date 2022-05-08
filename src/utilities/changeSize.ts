import sharp from "sharp";

export default async (
  path: string,
  outPath: string,
  width: number,
  height: number
): Promise<void> => {
  await sharp(path).resize(width, height).toFile(outPath);
};
