import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const map = [
  ["encoded/public_favicon-32.png.b64", "public/favicon-32.png"],
  ["encoded/public_icon-192.png.b64", "public/icon-192.png"],
  ["encoded/public_icon-512.png.b64", "public/icon-512.png"],
  ["encoded/public_images_logo-mark.webp.b64", "public/images/logo-mark.webp"],
  ["encoded/public_images_pack-back.webp.b64", "public/images/pack-back.webp"],
  ["encoded/public_images_pack-front.webp.b64", "public/images/pack-front.webp"],
  ["encoded/public_images_photo-back.webp.b64", "public/images/photo-back.webp"],
  ["encoded/public_images_photo-both.webp.b64", "public/images/photo-both.webp"],
  ["encoded/public_images_photo-front.webp.b64", "public/images/photo-front.webp"],
];

for (const [from, to] of map) {
  const src = join(root, from);
  const dest = join(root, to);
  if (!existsSync(src)) continue;
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, Buffer.from(readFileSync(src, "utf8"), "base64"));
  console.log("decoded", to);
}
