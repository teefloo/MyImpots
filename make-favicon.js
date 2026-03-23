// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require('sharp');

async function main() {
    try {
        const size = 512;
        const padding = 0; // 0 margin as requested
        const innerSize = size;

        // Resize logo
        const logoBuffer = await sharp('public/logo.png')
            .resize(innerSize, innerSize, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .toBuffer();

        // Create a rounded rect mask
        const radius = Math.floor(size * 0.22);
        const svgMask = `
            <svg width="${size}" height="${size}">
                <rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="white" />
            </svg>
        `;

        // Create white bg
        const bgBuffer = await sharp({
            create: {
                width: size,
                height: size,
                channels: 4,
                background: { r: 255, g: 255, b: 255, alpha: 1 }
            }
        })
            .composite([
                { input: logoBuffer, top: padding, left: padding }
            ])
            .png()
            .toBuffer();

        // Apply rounded mask
        await sharp(bgBuffer)
            .composite([
                { input: Buffer.from(svgMask), blend: 'dest-in' }
            ])
            .toFile('src/app/icon.png');

        console.log("Success: Created customized icon.png with sharp");
    } catch (e) {
        console.error("Error creating favicon:", e);
    }
}

main();
