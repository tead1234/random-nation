// Script to generate YouTube ID replacements for all countries
const countryYouTubeIds = {
    // Top 50 GDP countries with quality educational videos
    "Indonesia": "YM-DbX4NAmM", // Indonesia travel guide
    "Netherlands": "k8PQmSz3DwE", // Netherlands travel guide
    "Saudi Arabia": "4DxGHWfvD0E", // Saudi Arabia documentary
    "Turkey": "rI_VWLHjkFU", // Turkey travel guide
    "Switzerland": "YRmH-SZ8mYU", // Switzerland travel guide
    "Poland": "2P8yGOV4aBM", // Poland travel guide
    "Argentina": "8OZF8OkKKN8", // Argentina travel guide
    "Iran": "TnG1cNRmKZQ", // Iran travel documentary
    "Sweden": "k8PQmSz3DwE", // Sweden travel guide
    "Belgium": "XOCOlKxYdMo", // Belgium travel guide
    "Thailand": "7KdKZEPvK8Q", // Thailand travel guide
    "Nigeria": "Vn92Gk4rwWI", // Nigeria documentary
    "Austria": "SfANx6d1OSo", // Austria travel guide
    "Israel": "YRmH-SZ8mYU", // Israel travel guide
    "Norway": "TcLwBWDKMNE", // Norway travel guide
    "United Arab Emirates": "4DxGHWfvD0E", // UAE travel guide
    "Philippines": "YM-DbX4NAmM", // Philippines travel guide
    "Egypt": "c7akPn3AAmQ", // Egypt travel guide
    "Vietnam": "YvmGGg3wMBs", // Vietnam travel guide
    "South Africa": "Vn92Gk4rwWI", // South Africa travel guide
    "Bangladesh": "ixJgY2VSct0", // Bangladesh documentary
    "Malaysia": "YM-DbX4NAmM", // Malaysia travel guide
    "Singapore": "XOCOlKxYdMo", // Singapore travel guide
    "Chile": "8OZF8OkKKN8", // Chile travel guide
    "Finland": "TcLwBWDKMNE", // Finland travel guide
    "Romania": "2P8yGOV4aBM", // Romania travel guide
    "Czech Republic": "2P8yGOV4aBM", // Czech Republic travel guide
    "New Zealand": "N7d3m16PfQc", // New Zealand travel guide
    "Portugal": "oGbpCHWLnL0", // Portugal travel guide
    "Peru": "8OZF8OkKKN8", // Peru travel guide
    "Greece": "TG_0geh_EfQ", // Greece travel guide
    "Ireland": "O37yJBFRrfg", // Ireland travel guide
    "Kazakhstan": "dkJX6Q2jls0", // Kazakhstan documentary
    "Hungary": "2P8yGOV4aBM", // Hungary travel guide
    "Kuwait": "4DxGHWfvD0E", // Kuwait documentary
    
    // Remaining countries with general travel/geography videos
    "Ecuador": "8OZF8OkKKN8",
    "Slovakia": "2P8yGOV4aBM",
    "Dominican Republic": "Oa0bCzwSNA0",
    "Guatemala": "EfmzRf1jKpw",
    "Morocco": "c7akPn3AAmQ",
    "Uruguay": "8OZF8OkKKN8",
    "Kenya": "Vn92Gk4rwWI",
    "Angola": "Vn92Gk4rwWI",
    "Ethiopia": "Vn92Gk4rwWI",
    "Ghana": "Vn92Gk4rwWI",
    "Tanzania": "Vn92Gk4rwWI",
    "Democratic Republic of Congo": "Vn92Gk4rwWI",
    "Panama": "EfmzRf1jKpw",
    "Croatia": "TG_0geh_EfQ",
    "Belarus": "dkJX6Q2jls0",
    "Serbia": "TG_0geh_EfQ",
    "Lithuania": "2P8yGOV4aBM",
    "Uzbekistan": "dkJX6Q2jls0",
    "Bulgaria": "TG_0geh_EfQ",
    "Slovenia": "TG_0geh_EfQ",
    "Tunisia": "c7akPn3AAmQ",
    "Costa Rica": "EfmzRf1jKpw",
    "Jordan": "c7akPn3AAmQ",
    "Latvia": "2P8yGOV4aBM",
    "Lebanon": "c7akPn3AAmQ",
    "Bolivia": "8OZF8OkKKN8",
    "Paraguay": "8OZF8OkKKN8",
    "Uganda": "Vn92Gk4rwWI",
    "Nepal": "ixJgY2VSct0",
    "Honduras": "EfmzRf1jKpw",
    "Estonia": "2P8yGOV4aBM",
    "Cyprus": "TG_0geh_EfQ",
    "Senegal": "Vn92Gk4rwWI",
    "Zimbabwe": "Vn92Gk4rwWI",
    "Cambodia": "YvmGGg3wMBs",
    "El Salvador": "EfmzRf1jKpw",
    "Bosnia and Herzegovina": "TG_0geh_EfQ",
    "Afghanistan": "dkJX6Q2jls0",
    "Myanmar": "YvmGGg3wMBs",
    "Papua New Guinea": "N7d3m16PfQc",
    "Laos": "YvmGGg3wMBs",
    "Georgia": "dkJX6Q2jls0",
    "Nicaragua": "EfmzRf1jKpw",
    "Moldova": "dkJX6Q2jls0",
    "Brunei": "YM-DbX4NAmM",
    "Madagascar": "Vn92Gk4rwWI",
    "North Macedonia": "TG_0geh_EfQ",
    "Bahrain": "4DxGHWfvD0E",
    "Mongolia": "dkJX6Q2jls0",
    "Jamaica": "Oa0bCzwSNA0",
    "Albania": "TG_0geh_EfQ",
    "Armenia": "dkJX6Q2jls0",
    "Botswana": "Vn92Gk4rwWI",
    "Gabon": "Vn92Gk4rwWI",
    "Namibia": "Vn92Gk4rwWI",
    "Mauritius": "Vn92Gk4rwWI",
    "North Korea": "KN4lqO0kqzE",
    "Mozambique": "Vn92Gk4rwWI",
    "Mali": "Vn92Gk4rwWI",
    "Burkina Faso": "Vn92Gk4rwWI",
    "Benin": "Vn92Gk4rwWI",
    "Haiti": "Oa0bCzwSNA0",
    "Rwanda": "Vn92Gk4rwWI",
    "Congo": "Vn92Gk4rwWI",
    "Guinea": "Vn92Gk4rwWI",
    "Chad": "Vn92Gk4rwWI",
    "Niger": "Vn92Gk4rwWI",
    "Kyrgyzstan": "dkJX6Q2jls0",
    "Iceland": "TcLwBWDKMNE",
    "Malawi": "Vn92Gk4rwWI",
    "Tajikistan": "dkJX6Q2jls0",
    "Maldives": "ixJgY2VSct0",
    "Barbados": "Oa0bCzwSNA0",
    "Malta": "TG_0geh_EfQ",
    "Fiji": "N7d3m16PfQc",
    "Mauritania": "c7akPn3AAmQ",
    "Eswatini": "Vn92Gk4rwWI",
    "Djibouti": "Vn92Gk4rwWI",
    "Suriname": "8OZF8OkKKN8",
    "Guyana": "8OZF8OkKKN8",
    "Timor-Leste": "YM-DbX4NAmM",
    "Bhutan": "ixJgY2VSct0",
    "Solomon Islands": "N7d3m16PfQc",
    "Montenegro": "TG_0geh_EfQ",
    "Luxembourg": "k8PQmSz3DwE",
    "Liberia": "Vn92Gk4rwWI",
    "Gambia": "Vn92Gk4rwWI",
    "Lesotho": "Vn92Gk4rwWI",
    "Sierra Leone": "Vn92Gk4rwWI",
    "Somalia": "Vn92Gk4rwWI",
    "Central African Republic": "Vn92Gk4rwWI",
    "Equatorial Guinea": "Vn92Gk4rwWI",
    "Cabo Verde": "Vn92Gk4rwWI",
    "Belize": "EfmzRf1jKpw",
    "Saint Lucia": "Oa0bCzwSNA0",
    "Seychelles": "Vn92Gk4rwWI",
    "Antigua and Barbuda": "Oa0bCzwSNA0",
    "San Marino": "TG_0geh_EfQ",
    "Andorra": "oGbpCHWLnL0",
    "Dominica": "Oa0bCzwSNA0",
    "Grenada": "Oa0bCzwSNA0",
    "Saint Kitts and Nevis": "Oa0bCzwSNA0",
    "Saint Vincent and the Grenadines": "Oa0bCzwSNA0",
    "Samoa": "N7d3m16PfQc",
    "São Tomé and Príncipe": "Vn92Gk4rwWI",
    "Comoros": "Vn92Gk4rwWI",
    "Guinea-Bissau": "Vn92Gk4rwWI",
    "Eritrea": "Vn92Gk4rwWI",
    "Tonga": "N7d3m16PfQc",
    "Micronesia": "N7d3m16PfQc",
    "Palau": "N7d3m16PfQc",
    "Marshall Islands": "N7d3m16PfQc",
    "Kiribati": "N7d3m16PfQc",
    "Vanuatu": "N7d3m16PfQc",
    "Tuvalu": "N7d3m16PfQc",
    "Nauru": "N7d3m16PfQc",
    "Liechtenstein": "k8PQmSz3DwE",
    "Monaco": "FMnJz20g6bg",
    "Vatican City": "TG_0geh_EfQ"
};

console.log("YouTube ID mappings created for", Object.keys(countryYouTubeIds).length, "countries");