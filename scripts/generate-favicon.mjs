import sharp from "sharp";
import { writeFileSync, readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svgPath = join(__dirname, "..", "public", "favicon.svg");
const svgBuffer = readFileSync(svgPath);

async function generateIco(sizes) {
	const pngBuffers = [];

	for (const size of sizes) {
		const png = await sharp(svgBuffer)
			.resize(size, size, {
				fit: "contain",
				background: { r: 0, g: 0, b: 0, alpha: 0 },
			})
			.png()
			.toBuffer();
		pngBuffers.push(png);
	}

	const count = sizes.length;
	const headerSize = 6;
	const entrySize = 16;
	const dataOffset = headerSize + count * entrySize;

	const header = Buffer.alloc(headerSize);
	header.writeUInt16LE(0, 0);
	header.writeUInt16LE(1, 2);
	header.writeUInt16LE(count, 4);

	const entries = [];
	let offset = dataOffset;

	for (let i = 0; i < count; i++) {
		const size = sizes[i];
		const pngData = pngBuffers[i];
		const entry = Buffer.alloc(entrySize);
		entry.writeUInt8(size >= 256 ? 0 : size, 0);
		entry.writeUInt8(size >= 256 ? 0 : size, 1);
		entry.writeUInt8(0, 2);
		entry.writeUInt8(0, 3);
		entry.writeUInt16LE(1, 4);
		entry.writeUInt16LE(32, 6);
		entry.writeUInt32LE(pngData.length, 8);
		entry.writeUInt32LE(offset, 12);
		entries.push(entry);
		offset += pngData.length;
	}

	const icoPath = join(__dirname, "..", "public", "favicon.ico");
	writeFileSync(icoPath, Buffer.concat([header, ...entries, ...pngBuffers]));
	console.log(`✅ favicon.ico generated with sizes: ${sizes.join(", ")}`);
}

generateIco([16, 32, 48]).catch((err) => {
	console.error("❌ Failed to generate favicon.ico:", err);
	process.exit(1);
});
