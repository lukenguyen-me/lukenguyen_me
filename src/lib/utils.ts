import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBlogImageFromPath = async (imagePath?: string) => {
  const images = import.meta.glob<{ default: ImageMetadata }>(
    "/src/assets/blogs/**/*.{jpeg,jpg,png,gif,webp}",
  );

  if (!imagePath) return undefined;
  const cleanPath = imagePath.split("blogs/")[1];
  const assetPath = `/src/assets/blogs/${cleanPath}`;

  if (images[assetPath]) {
    return await images[assetPath]();
  }
  throw new Error(`Image not found: ${assetPath}`);
};
