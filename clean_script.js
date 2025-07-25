// This script will clean the JavaScript file by removing orphaned description blocks
const fs = require('fs');

const content = fs.readFileSync('script.js', 'utf8');

// Remove orphaned description blocks that start with Korean text
const lines = content.split('\n');
const cleanedLines = [];
let i = 0;

while (i < lines.length) {
    const line = lines[i];
    
    // Check if this line is an orphaned Korean description
    if (/^[가-힣].*",$/.test(line.trim())) {
        // Skip this line and the next 4 lines (zh, ja, en, })
        i += 5;
        continue;
    }
    
    cleanedLines.push(line);
    i++;
}

// Write the cleaned content back
fs.writeFileSync('script.js', cleanedLines.join('\n'));
console.log('Cleaned up orphaned description blocks');