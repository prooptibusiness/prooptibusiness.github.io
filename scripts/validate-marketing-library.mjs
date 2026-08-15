import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(import.meta.dirname, "..");
const postsDir = path.join(root, "_posts");
const expected = {
  "chien-luoc": 5,
  performance: 5,
  "van-hanh": 5,
  analytics: 5,
  "content-seo": 5,
};

const files = fs.readdirSync(postsDir).filter((name) => name.startsWith("2026-08-15-") && name.endsWith(".md"));
const errors = [];
const counts = {};
const imageHashes = new Map();

if (files.length !== 25) errors.push(`Expected 25 new posts, found ${files.length}.`);

for (const file of files) {
  const source = fs.readFileSync(path.join(postsDir, file), "utf8");
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    errors.push(`${file}: invalid front matter.`);
    continue;
  }

  const [front, body] = [match[1], match[2]];
  const read = (key) => front.match(new RegExp(`^${key}:\\s*(.+)$`, "m"))?.[1]?.replace(/^"|"$/g, "");
  const category = read("category");
  const image = read("image");
  counts[category] = (counts[category] || 0) + 1;

  for (const key of ["title", "slug", "description", "answer_summary", "target_query", "date", "date_modified", "category", "category_label", "tags", "image", "image_alt", "author", "read_time", "faq"]) {
    if (!new RegExp(`^${key}:`, "m").test(front)) errors.push(`${file}: missing ${key}.`);
  }

  const words = body.replace(/https?:\/\/\S+/g, "").match(/[\p{L}\p{N}]+/gu)?.length || 0;
  const summaryRaw = read("answer_summary") || "";
  let summary = summaryRaw;
  try { summary = JSON.parse(summaryRaw); } catch {}
  const summaryWords = summary.match(/[\p{L}\p{N}]+/gu)?.length || 0;
  const faqCount = (front.match(/^  - question:/gm) || []).length;
  const sourceCount = (body.match(/https?:\/\//g) || []).length;
  const h2Count = (body.match(/^## /gm) || []).length;

  if (words < 700) errors.push(`${file}: only ${words} body words.`);
  if (summaryWords < 40 || summaryWords > 75) errors.push(`${file}: answer summary has ${summaryWords} words.`);
  if (faqCount < 4) errors.push(`${file}: only ${faqCount} FAQ items.`);
  if (sourceCount < 3) errors.push(`${file}: only ${sourceCount} cited source links.`);
  if (h2Count < 5) errors.push(`${file}: only ${h2Count} H2 sections.`);
  if (category === "ai-marketing") errors.push(`${file}: AI Marketing article was added unexpectedly.`);

  if (image) {
    const imagePath = path.join(root, image.replace(/^\//, ""));
    if (!fs.existsSync(imagePath)) {
      errors.push(`${file}: missing image ${image}.`);
    } else {
      const hash = crypto.createHash("sha256").update(fs.readFileSync(imagePath)).digest("hex");
      if (imageHashes.has(hash)) errors.push(`${file}: duplicate image with ${imageHashes.get(hash)}.`);
      imageHashes.set(hash, file);
    }
  }
}

for (const [category, expectedCount] of Object.entries(expected)) {
  if (counts[category] !== expectedCount) errors.push(`${category}: expected ${expectedCount}, found ${counts[category] || 0}.`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(JSON.stringify({ posts: files.length, categories: counts, uniqueImages: imageHashes.size }, null, 2));
