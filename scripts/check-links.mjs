import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, '../src');

// Regex to find external http/https links in the codebase
const urlRegex = /https?:\/\/[^\s"'`>]+/g;

function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, filesList);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.md')) {
            filesList.push(filePath);
        }
    }
    return filesList;
}

async function checkLinks() {
    const allFiles = getFiles(srcDir);
    const links = new Set();

    for (const file of allFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const matches = content.match(urlRegex);
        if (matches) {
            for (const match of matches) {
                if (!match.includes('localhost') && !match.includes('www.w3.org/2000/svg')) {
                    links.add(match);
                }
            }
        }
    }

    console.log(`Found ${links.size} unique external links to check...`);

    const results = [];

    for (const link of links) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 10000);

            const response = await fetch(link, {
                method: 'HEAD',
                signal: controller.signal,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            clearTimeout(timeoutId);

            if (!response.ok && response.status !== 403 && response.status !== 405) {
                // Some sites block HEAD requests (403/405), fallback to GET
                const getResponse = await fetch(link, { method: 'GET' });
                if (!getResponse.ok) {
                    results.push({ link, status: getResponse.status, error: false });
                }
            } else if (!response.ok) {
                // Try a GET if we get 403 or 405
                const getResponse = await fetch(link, {
                    method: 'GET',
                    headers: {
                        'User-Agent': 'Mozilla/5.0'
                    }
                });
                if (!getResponse.ok) {
                    results.push({ link, status: response.status, error: false });
                }
            }
        } catch (error) {
            results.push({ link, status: 'Error', error: error.message });
        }
    }

    if (results.length > 0) {
        fs.writeFileSync('broken-links.json', JSON.stringify(results, null, 2), 'utf8');
        console.log('Issues found and written to broken-links.json');
    } else {
        fs.writeFileSync('broken-links.json', '[]', 'utf8');
        console.log('All external links are accessible!');
    }
}

checkLinks();
