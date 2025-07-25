const fs = require('fs');

// YouTube ID mappings for all countries
const youtubeIds = {
    "Belgium": "XOCOlKxYdMo",
    "Thailand": "7KdKZEPvK8Q", 
    "Nigeria": "Vn92Gk4rwWI",
    "Austria": "SfANx6d1OSo",
    "Israel": "YRmH-SZ8mYU",
    "Norway": "TcLwBWDKMNE",
    "United Arab Emirates": "4DxGHWfvD0E",
    "Philippines": "YM-DbX4NAmM",
    "Egypt": "c7akPn3AAmQ",
    "Vietnam": "YvmGGg3wMBs",
    "South Africa": "Vn92Gk4rwWI",
    "Bangladesh": "ixJgY2VSct0",
    "Malaysia": "YM-DbX4NAmM",
    "Singapore": "XOCOlKxYdMo",
    "Chile": "8OZF8OkKKN8",
    "Finland": "TcLwBWDKMNE",
    "Romania": "2P8yGOV4aBM",
    "Czech Republic": "2P8yGOV4aBM",
    "New Zealand": "N7d3m16PfQc",
    "Portugal": "oGbpCHWLnL0",
    "Peru": "8OZF8OkKKN8",
    "Greece": "TG_0geh_EfQ",
    "Ireland": "O37yJBFRrfg",
    "Kazakhstan": "dkJX6Q2jls0"
};

// Read the current script file
let scriptContent = fs.readFileSync('D:\\random-nation\\script.js', 'utf8');

// Replace info blocks with youtubeId
Object.entries(youtubeIds).forEach(([countryName, youtubeId]) => {
    // Look for info block patterns and replace with youtubeId
    const infoPattern = /info:\s*\{[^}]*\}/g;
    scriptContent = scriptContent.replace(infoPattern, `youtubeId: "${youtubeId}"`);
});

// Write the updated content back
fs.writeFileSync('D:\\random-nation\\script.js', scriptContent);

console.log('Completed replacing info blocks with YouTube IDs');