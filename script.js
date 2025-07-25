let currentLanguage = 'ko';

const countries = [
    // Top 50 GDP Countries with Full Multilingual Support
    { 
        names: { ko: "미국", zh: "美国", ja: "アメリカ", en: "United States" }, 
        flag: "🇺🇸", 
        gdpRank: 1,
    },
    { 
        names: { ko: "중국", zh: "中国", ja: "中国", en: "China" }, 
        flag: "🇨🇳", 
        gdpRank: 2,
    },
    { 
        names: { ko: "독일", zh: "德国", ja: "ドイツ", en: "Germany" }, 
        flag: "🇩🇪", 
        gdpRank: 3,
    },
    { 
        names: { ko: "일본", zh: "日本", ja: "日本", en: "Japan" }, 
        flag: "🇯🇵", 
        gdpRank: 4,
    },
    { 
        names: { ko: "인도", zh: "印度", ja: "インド", en: "India" }, 
        flag: "🇮🇳", 
        gdpRank: 5,
    },
    { 
        names: { ko: "영국", zh: "英国", ja: "イギリス", en: "United Kingdom" }, 
        flag: "🇬🇧", 
        gdpRank: 6,
    },
    { 
        names: { ko: "프랑스", zh: "法国", ja: "フランス", en: "France" }, 
        flag: "🇫🇷", 
        gdpRank: 7,
    },
    { 
        names: { ko: "이탈리아", zh: "意大利", ja: "イタリア", en: "Italy" }, 
        flag: "🇮🇹", 
        gdpRank: 8,
    },
    { 
        names: { ko: "브라질", zh: "巴西", ja: "ブラジル", en: "Brazil" }, 
        flag: "🇧🇷", 
        gdpRank: 9,
    },
    { 
        names: { ko: "대한민국", zh: "韩国", ja: "韓国", en: "South Korea" }, 
        flag: "🇰🇷", 
        gdpRank: 10,
    },
    { 
        names: { ko: "러시아", zh: "俄罗斯", ja: "ロシア", en: "Russia" }, 
        flag: "🇷🇺", 
        gdpRank: 11,
    },
    { 
        names: { ko: "캐나다", zh: "加拿大", ja: "カナダ", en: "Canada" }, 
        flag: "🇨🇦", 
        gdpRank: 12,
    },
    { 
        names: { ko: "호주", zh: "澳大利亚", ja: "オーストラリア", en: "Australia" }, 
        flag: "🇦🇺", 
        gdpRank: 13,
    },
    { 
        names: { ko: "스페인", zh: "西班牙", ja: "スペイン", en: "Spain" }, 
        flag: "🇪🇸", 
        gdpRank: 14,
    },
    { 
        names: { ko: "멕시코", zh: "墨西哥", ja: "メキシコ", en: "Mexico" }, 
        flag: "🇲🇽", 
        gdpRank: 15,
    },
    { 
        names: { ko: "인도네시아", zh: "印度尼西亚", ja: "インドネシア", en: "Indonesia" }, 
        flag: "🇮🇩", 
        gdpRank: 16,
    },
    { 
        names: { ko: "네덜란드", zh: "荷兰", ja: "オランダ", en: "Netherlands" }, 
        flag: "🇳🇱", 
        gdpRank: 17,
    },
    { 
        names: { ko: "사우디아라비아", zh: "沙特阿拉伯", ja: "サウジアラビア", en: "Saudi Arabia" }, 
        flag: "🇸🇦", 
        gdpRank: 18,
    },
    { 
        names: { ko: "터키", zh: "土耳其", ja: "トルコ", en: "Turkey" }, 
        flag: "🇹🇷", 
        gdpRank: 19,
    },
    { 
        names: { ko: "스위스", zh: "瑞士", ja: "スイス", en: "Switzerland" }, 
        flag: "🇨🇭", 
        gdpRank: 20,
    },
    { 
        names: { ko: "폴란드", zh: "波兰", ja: "ポーランド", en: "Poland" }, 
        flag: "🇵🇱", 
        gdpRank: 21,
    },
    { 
        names: { ko: "아르헨티나", zh: "阿根廷", ja: "アルゼンチン", en: "Argentina" }, 
        flag: "🇦🇷", 
        gdpRank: 22,
    },
    { 
        names: { ko: "이란", zh: "伊朗", ja: "イラン", en: "Iran" }, 
        flag: "🇮🇷", 
        gdpRank: 23,
    },
    { 
        names: { ko: "스웨덴", zh: "瑞典", ja: "スウェーデン", en: "Sweden" }, 
        flag: "🇸🇪", 
        gdpRank: 24,
    },
    { 
        names: { ko: "벨기에", zh: "比利时", ja: "ベルギー", en: "Belgium" }, 
        flag: "🇧🇪", 
        gdpRank: 25,
    },
    { 
        names: { ko: "태국", zh: "泰国", ja: "タイ", en: "Thailand" }, 
        flag: "🇹🇭", 
        gdpRank: 26,
    },
    { 
        names: { ko: "나이지리아", zh: "尼日利亚", ja: "ナイジェリア", en: "Nigeria" }, 
        flag: "🇳🇬", 
        gdpRank: 27,
    },
    { 
        names: { ko: "오스트리아", zh: "奥地利", ja: "オーストリア", en: "Austria" }, 
        flag: "🇦🇹", 
        gdpRank: 28,
    },
    { 
        names: { ko: "이스라엘", zh: "以色列", ja: "イスラエル", en: "Israel" }, 
        flag: "🇮🇱", 
        gdpRank: 29,
    },
    { 
        names: { ko: "노르웨이", zh: "挪威", ja: "ノルウェー", en: "Norway" }, 
        flag: "🇳🇴", 
        gdpRank: 30,
    },
    { 
        names: { ko: "아랍에미리트", zh: "阿联酋", ja: "アラブ首長国連邦", en: "United Arab Emirates" }, 
        flag: "🇦🇪", 
        gdpRank: 31,
    },
    { 
        names: { ko: "필리핀", zh: "菲律宾", ja: "フィリピン", en: "Philippines" }, 
        flag: "🇵🇭", 
        gdpRank: 32,
    },
    { 
        names: { ko: "이집트", zh: "埃及", ja: "エジプト", en: "Egypt" }, 
        flag: "🇪🇬", 
        gdpRank: 33,
    },
    { 
        names: { ko: "베트남", zh: "越南", ja: "ベトナム", en: "Vietnam" }, 
        flag: "🇻🇳", 
        gdpRank: 34,
    },
    { 
        names: { ko: "남아프리카공화국", zh: "南非", ja: "南アフリカ", en: "South Africa" }, 
        flag: "🇿🇦", 
        gdpRank: 35,
    },
    { 
        names: { ko: "방글라데시", zh: "孟加拉国", ja: "バングラデシュ", en: "Bangladesh" }, 
        flag: "🇧🇩", 
        gdpRank: 36,
    },
    { 
        names: { ko: "말레이시아", zh: "马来西亚", ja: "マレーシア", en: "Malaysia" }, 
        flag: "🇲🇾", 
        gdpRank: 37,
    },
    { 
        names: { ko: "싱가포르", zh: "新加坡", ja: "シンガポール", en: "Singapore" }, 
        flag: "🇸🇬", 
        gdpRank: 38,
    },
    { 
        names: { ko: "칠레", zh: "智利", ja: "チリ", en: "Chile" }, 
        flag: "🇨🇱", 
        gdpRank: 39,
    },
    { 
        names: { ko: "핀란드", zh: "芬兰", ja: "フィンランド", en: "Finland" }, 
        flag: "🇫🇮", 
        gdpRank: 40,
    },
    { 
        names: { ko: "루마니아", zh: "罗马尼亚", ja: "ルーマニア", en: "Romania" }, 
        flag: "🇷🇴", 
        gdpRank: 41,
    },
    { 
        names: { ko: "체코", zh: "捷克", ja: "チェコ", en: "Czech Republic" }, 
        flag: "🇨🇿", 
        gdpRank: 42,
    },
    { 
        names: { ko: "뉴질랜드", zh: "新西兰", ja: "ニュージーランド", en: "New Zealand" }, 
        flag: "🇳🇿", 
        gdpRank: 43,
    },
    { 
        names: { ko: "포르투갈", zh: "葡萄牙", ja: "ポルトガル", en: "Portugal" }, 
        flag: "🇵🇹", 
        gdpRank: 44,
    },
    { 
        names: { ko: "페루", zh: "秘鲁", ja: "ペルー", en: "Peru" }, 
        flag: "🇵🇪", 
        gdpRank: 45,
    },
    { 
        names: { ko: "그리스", zh: "希腊", ja: "ギリシャ", en: "Greece" }, 
        flag: "🇬🇷", 
        gdpRank: 46,
    },
    { 
        names: { ko: "아일랜드", zh: "爱尔兰", ja: "アイルランド", en: "Ireland" }, 
        flag: "🇮🇪", 
        gdpRank: 47,
    },
    { 
        names: { ko: "카자흐스탄", zh: "哈萨克斯坦", ja: "カザフスタン", en: "Kazakhstan" }, 
        flag: "🇰🇿", 
        gdpRank: 48,
    },
    { 
        names: { ko: "헝가리", zh: "匈牙리", ja: "ハンガリー", en: "Hungary" }, 
        flag: "🇭🇺", 
        gdpRank: 49,
    },
    { 
        names: { ko: "쿠웨이트", zh: "科威特", ja: "クウェート", en: "Kuwait" }, 
        flag: "🇰🇼", 
        gdpRank: 50,
    },

    // Remaining countries with English names and basic info
    { names: { ko: "에콰도르", en: "Ecuador" }, flag: "🇪🇨", gdpRank: 51 },
    { names: { ko: "슬로바키아", en: "Slovakia" }, flag: "🇸🇰", gdpRank: 52 },
    { names: { ko: "도미니카공화국", en: "Dominican Republic" }, flag: "🇩🇴", gdpRank: 53 },
    { names: { ko: "과테말라", en: "Guatemala" }, flag: "🇬🇹", gdpRank: 54 },
    { names: { ko: "모로코", en: "Morocco" }, flag: "🇲🇦", gdpRank: 55 },
    { names: { ko: "우루과이", en: "Uruguay" }, flag: "🇺🇾", gdpRank: 56 },
    { names: { ko: "케냐", en: "Kenya" }, flag: "🇰🇪", gdpRank: 57 },
    { names: { ko: "앙골라", en: "Angola" }, flag: "🇦🇴", gdpRank: 58 },
    { names: { ko: "에티오피아", en: "Ethiopia" }, flag: "🇪🇹", gdpRank: 59 },
    { names: { ko: "가나", en: "Ghana" }, flag: "🇬🇭", gdpRank: 60 },
    { names: { en: "Tanzania" }, flag: "🇹🇿", gdpRank: 61 },
    { names: { en: "Democratic Republic of Congo" }, flag: "🇨🇩", gdpRank: 62 },
    { names: { en: "Panama" }, flag: "🇵🇦", gdpRank: 63 },
    { names: { en: "Croatia" }, flag: "🇭🇷", gdpRank: 64 },
    { names: { en: "Belarus" }, flag: "🇧🇾", gdpRank: 65 },
    { names: { en: "Serbia" }, flag: "🇷🇸", gdpRank: 66 },
    { names: { en: "Lithuania" }, flag: "🇱🇹", gdpRank: 67 },
    { names: { en: "Uzbekistan" }, flag: "🇺🇿", gdpRank: 68 },
    { names: { en: "Bulgaria" }, flag: "🇧🇬", gdpRank: 69 },
    { names: { en: "Slovenia" }, flag: "🇸🇮", gdpRank: 70 },
    { names: { en: "Tunisia" }, flag: "🇹🇳", gdpRank: 71 },
    { names: { en: "Costa Rica" }, flag: "🇨🇷", gdpRank: 72 },
    { names: { en: "Jordan" }, flag: "🇯🇴", gdpRank: 73 },
    { names: { en: "Latvia" }, flag: "🇱🇻", gdpRank: 74 },
    { names: { en: "Lebanon" }, flag: "🇱🇧", gdpRank: 75 },
    { names: { en: "Bolivia" }, flag: "🇧🇴", gdpRank: 76 },
    { names: { en: "Paraguay" }, flag: "🇵🇾", gdpRank: 77 },
    { names: { en: "Uganda" }, flag: "🇺🇬", gdpRank: 78 },
    { names: { en: "Nepal" }, flag: "🇳🇵", gdpRank: 79 },
    { names: { en: "Honduras" }, flag: "🇭🇳", gdpRank: 80 },
    { names: { en: "Estonia" }, flag: "🇪🇪", gdpRank: 81 },
    { names: { en: "Cyprus" }, flag: "🇨🇾", gdpRank: 82 },
    { names: { en: "Senegal" }, flag: "🇸🇳", gdpRank: 83 },
    { names: { en: "Zimbabwe" }, flag: "🇿🇼", gdpRank: 84 },
    { names: { en: "Cambodia" }, flag: "🇰🇭", gdpRank: 85 },
    { names: { en: "El Salvador" }, flag: "🇸🇻", gdpRank: 86 },
    { names: { en: "Bosnia and Herzegovina" }, flag: "🇧🇦", gdpRank: 87 },
    { names: { en: "Afghanistan" }, flag: "🇦🇫", gdpRank: 88 },
    { names: { en: "Myanmar" }, flag: "🇲🇲", gdpRank: 89 },
    { names: { en: "Papua New Guinea" }, flag: "🇵🇬", gdpRank: 90 },
    { names: { en: "Laos" }, flag: "🇱🇦", gdpRank: 91 },
    { names: { en: "Georgia" }, flag: "🇬🇪", gdpRank: 92 },
    { names: { en: "Nicaragua" }, flag: "🇳🇮", gdpRank: 93 },
    { names: { en: "Moldova" }, flag: "🇲🇩", gdpRank: 94 },
    { names: { en: "Brunei" }, flag: "🇧🇳", gdpRank: 95 },
    { names: { en: "Madagascar" }, flag: "🇲🇬", gdpRank: 96 },
    { names: { en: "Senegal" }, flag: "🇸🇳", gdpRank: 97 },
    { names: { en: "North Macedonia" }, flag: "🇲🇰", gdpRank: 98 },
    { names: { en: "Bahrain" }, flag: "🇧🇭", gdpRank: 99 },
    { names: { en: "Mongolia" }, flag: "🇲🇳", gdpRank: 100 },
    { names: { en: "Jamaica" }, flag: "🇯🇲", gdpRank: 101 },
    { names: { en: "Albania" }, flag: "🇦🇱", gdpRank: 102 },
    { names: { en: "Armenia" }, flag: "🇦🇲", gdpRank: 103 },
    { names: { en: "Botswana" }, flag: "🇧🇼", gdpRank: 104 },
    { names: { en: "Gabon" }, flag: "🇬🇦", gdpRank: 105 },
    { names: { en: "Namibia" }, flag: "🇳🇦", gdpRank: 106 },
    { names: { en: "Mauritius" }, flag: "🇲🇺", gdpRank: 107 },
    { names: { en: "North Korea" }, flag: "🇰🇵", gdpRank: 108 },
    { names: { en: "Mozambique" }, flag: "🇲🇿", gdpRank: 109 },
    { names: { en: "Mali" }, flag: "🇲🇱", gdpRank: 110 },
    { names: { en: "Burkina Faso" }, flag: "🇧🇫", gdpRank: 111 },
    { names: { en: "Benin" }, flag: "🇧🇯", gdpRank: 112 },
    { names: { en: "Haiti" }, flag: "🇭🇹", gdpRank: 113 },
    { names: { en: "Rwanda" }, flag: "🇷🇼", gdpRank: 114 },
    { names: { en: "Congo" }, flag: "🇨🇬", gdpRank: 115 },
    { names: { en: "Guinea" }, flag: "🇬🇳", gdpRank: 116 },
    { names: { en: "Chad" }, flag: "🇹🇩", gdpRank: 117 },
    { names: { en: "Niger" }, flag: "🇳🇪", gdpRank: 118 },
    { names: { en: "Kyrgyzstan" }, flag: "🇰🇬", gdpRank: 119 },
    { names: { en: "Iceland" }, flag: "🇮🇸", gdpRank: 120 },
    { names: { en: "Malawi" }, flag: "🇲🇼", gdpRank: 121 },
    { names: { en: "Tajikistan" }, flag: "🇹🇯", gdpRank: 122 },
    { names: { en: "Maldives" }, flag: "🇲🇻", gdpRank: 123 },
    { names: { en: "Barbados" }, flag: "🇧🇧", gdpRank: 124 },
    { names: { en: "Malta" }, flag: "🇲🇹", gdpRank: 125 },
    { names: { en: "Fiji" }, flag: "🇫🇯", gdpRank: 126 },
    { names: { en: "Mauritania" }, flag: "🇲🇷", gdpRank: 127 },
    { names: { en: "Eswatini" }, flag: "🇸🇿", gdpRank: 128 },
    { names: { en: "Djibouti" }, flag: "🇩🇯", gdpRank: 129 },
    { names: { en: "Suriname" }, flag: "🇸🇷", gdpRank: 130 },
    { names: { en: "Guyana" }, flag: "🇬🇾", gdpRank: 131 },
    { names: { en: "Timor-Leste" }, flag: "🇹🇱", gdpRank: 132 },
    { names: { en: "Bhutan" }, flag: "🇧🇹", gdpRank: 133 },
    { names: { en: "Solomon Islands" }, flag: "🇸🇧", gdpRank: 134 },
    { names: { en: "Montenegro" }, flag: "🇲🇪", gdpRank: 135 },
    { names: { en: "Luxembourg" }, flag: "🇱🇺", gdpRank: 136 },
    { names: { en: "Liberia" }, flag: "🇱🇷", gdpRank: 137 },
    { names: { en: "Gambia" }, flag: "🇬🇲", gdpRank: 138 },
    { names: { en: "Lesotho" }, flag: "🇱🇸", gdpRank: 139 },
    { names: { en: "Sierra Leone" }, flag: "🇸🇱", gdpRank: 140 },
    { names: { en: "Somalia" }, flag: "🇸🇴", gdpRank: 141 },
    { names: { en: "Burkina Faso" }, flag: "🇧🇫", gdpRank: 142 },
    { names: { en: "Central African Republic" }, flag: "🇨🇫", gdpRank: 143 },
    { names: { en: "Equatorial Guinea" }, flag: "🇬🇶", gdpRank: 144 },
    { names: { en: "Cabo Verde" }, flag: "🇨🇻", gdpRank: 145 },
    { names: { en: "Belize" }, flag: "🇧🇿", gdpRank: 146 },
    { names: { en: "Saint Lucia" }, flag: "🇱🇨", gdpRank: 147 },
    { names: { en: "Seychelles" }, flag: "🇸🇨", gdpRank: 148 },
    { names: { en: "Antigua and Barbuda" }, flag: "🇦🇬", gdpRank: 149 },
    { names: { en: "San Marino" }, flag: "🇸🇲", gdpRank: 150 },
    { names: { en: "Andorra" }, flag: "🇦🇩", gdpRank: 151 },
    { names: { en: "Dominica" }, flag: "🇩🇲", gdpRank: 152 },
    { names: { en: "Grenada" }, flag: "🇬🇩", gdpRank: 153 },
    { names: { en: "Saint Kitts and Nevis" }, flag: "🇰🇳", gdpRank: 154 },
    { names: { en: "Saint Vincent and the Grenadines" }, flag: "🇻🇨", gdpRank: 155 },
    { names: { en: "Samoa" }, flag: "🇼🇸", gdpRank: 156 },
    { names: { en: "São Tomé and Príncipe" }, flag: "🇸🇹", gdpRank: 157 },
    { names: { en: "Comoros" }, flag: "🇰🇲", gdpRank: 158 },
    { names: { en: "Guinea-Bissau" }, flag: "🇬🇼", gdpRank: 159 },
    { names: { en: "Eritrea" }, flag: "🇪🇷", gdpRank: 160 },
    { names: { en: "Tonga" }, flag: "🇹🇴", gdpRank: 161 },
    { names: { en: "Micronesia" }, flag: "🇫🇲", gdpRank: 162 },
    { names: { en: "Palau" }, flag: "🇵🇼", gdpRank: 163 },
    { names: { en: "Marshall Islands" }, flag: "🇲🇭", gdpRank: 164 },
    { names: { en: "Kiribati" }, flag: "🇰🇮", gdpRank: 165 },
    { names: { en: "Vanuatu" }, flag: "🇻🇺", gdpRank: 166 },
    { names: { en: "Tuvalu" }, flag: "🇹🇻", gdpRank: 167 },
    { names: { en: "Nauru" }, flag: "🇳🇷", gdpRank: 168 },
    { names: { en: "Liechtenstein" }, flag: "🇱🇮", gdpRank: 169 },
    { names: { en: "Monaco" }, flag: "🇲🇨", gdpRank: 170 },
    { names: { en: "Vatican City" }, flag: "🇻🇦", gdpRank: 171 }
];

let isSpinning = false;

// 언어 감지 및 설정
function detectLanguage() {
    const userLang = navigator.language || navigator.userLanguage;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (userLang.startsWith('ko') || timezone.includes('Seoul')) {
        return 'ko';
    } else if (userLang.startsWith('zh') || timezone.includes('Shanghai') || timezone.includes('Beijing')) {
        return 'zh';
    } else if (userLang.startsWith('ja') || timezone.includes('Tokyo')) {
        return 'ja';
    } else {
        return 'en';
    }
}

// 국가 이름 가져오기
function getCountryName(country) {
    if (country.names) {
        return country.names[currentLanguage] || country.names.en || 'Unknown';
    }
    return country.name || 'Unknown';
}


function getRandomCountry() {
    const randomIndex = Math.floor(Math.random() * countries.length);
    return countries[randomIndex];
}

function startRoulette() {
    console.log('startRoulette called, isSpinning:', isSpinning);
    if (isSpinning) return;
    
    isSpinning = true;
    const btn = document.getElementById('generateBtn');
    const rouletteContainer = document.getElementById('rouletteContent');
    const result = document.getElementById('result');
    
    btn.disabled = true;
    btn.textContent = getButtonText('spinning');
    
    result.classList.add('hidden');
    
    // 슬롯머신 스타일로 국가 이름들이 세로로 빠르게 변경
    let currentIndex = 0;
    let speed = 50;
    const maxSpeed = 20;
    const minSpeed = 200;
    let acceleration = 0;
    
    const spinInterval = setInterval(() => {
        const country = countries[currentIndex % countries.length];
        rouletteContainer.innerHTML = `
            <div class="slot-item">${country.flag}</div>
            <div class="slot-name">${getCountryName(country)}</div>
        `;
        currentIndex++;
        
        // 점진적으로 속도 조절
        acceleration++;
        if (acceleration < 40) {
            speed = Math.max(maxSpeed, speed - 2);
        } else if (acceleration > 80) {
            speed = Math.min(minSpeed, speed + 5);
        }
    }, speed);
    
    setTimeout(() => {
        clearInterval(spinInterval);
        
        const finalCountry = getRandomCountry();
        rouletteContainer.innerHTML = `
            <div class="slot-item final">${finalCountry.flag}</div>
            <div class="slot-name final">${getCountryName(finalCountry)}</div>
        `;
        
        setTimeout(() => {
            showResult(finalCountry);
            btn.disabled = false;
            btn.textContent = getButtonText('ready');
            isSpinning = false;
        }, 500);
    }, 3000);
}

function getButtonText(state) {
    const texts = {
        ready: { ko: '룰렛 돌리기! 🎲', zh: '转动轮盘！🎲', ja: 'ルーレットを回す！🎲', en: 'Spin the Wheel! 🎲' },
        spinning: { ko: '룰렛 돌리는 중... ⏳', zh: '转动中... ⏳', ja: '回転中... ⏳', en: 'Spinning... ⏳' }
    };
    return texts[state][currentLanguage] || texts[state].en;
}

function showResult(country) {
    document.getElementById('flag').textContent = country.flag;
    document.getElementById('country').textContent = getCountryName(country);
    
    let gdpText = '';
    const gdpLabels = {
        ko: '📊 세계 GDP 순위: {}위',
        zh: '📊 世界GDP排名：第{}位',
        ja: '📊 世界GDP順位：{}位',
        en: '📊 World GDP Rank: #{}'
    };
    
    if (country.gdpRank) {
        gdpText = (gdpLabels[currentLanguage] || gdpLabels.en).replace('{}', country.gdpRank);
    } else {
        const noDataTexts = {
            ko: '📊 GDP 정보: 데이터 없음',
            zh: '📊 GDP信息：无数据',
            ja: '📊 GDP情報：データなし',
            en: '📊 GDP Info: No data'
        };
        gdpText = noDataTexts[currentLanguage] || noDataTexts.en;
    }
    
    document.getElementById('gdpInfo').textContent = gdpText;
    
    const congratsTexts = {
        ko: `축하합니다! 당신은 ${getCountryName(country)}에 태어났습니다! 🎉`,
        zh: `恭喜！您出生在${getCountryName(country)}！🎉`,
        ja: `おめでとうございます！あなたは${getCountryName(country)}で生まれました！🎉`,
        en: `Congratulations! You were born in ${getCountryName(country)}! 🎉`
    };
    
    document.getElementById('message').innerHTML = `
        <strong>${congratsTexts[currentLanguage] || congratsTexts.en}</strong>
    `;
    
    
    setTimeout(() => {
        document.getElementById('result').classList.remove('hidden');
    }, 300);
}

// 페이지 로드시 언어 설정
window.addEventListener('load', () => {
    currentLanguage = detectLanguage();
    document.getElementById('generateBtn').textContent = getButtonText('ready');
    
    // 제목도 언어에 맞게 변경
    const titles = {
        ko: '🌍 세계 어디에 태어날까? 🌍',
        zh: '🌍 你会在世界哪里出生？🌍',
        ja: '🌍 世界のどこで生まれる？🌍',
        en: '🌍 Where in the World Will You Be Born? 🌍'
    };
    document.querySelector('h1').textContent = titles[currentLanguage] || titles.en;
    
    const messages = {
        ko: '버튼을 눌러서 룰렛을 돌려보세요!',
        zh: '点击按钮转动轮盘！',
        ja: 'ボタンを押してルーレットを回してみてください！',
        en: 'Click the button to spin the roulette!'
    };
    document.querySelector('.message').textContent = messages[currentLanguage] || messages.en;
    
    // 이벤트 리스너 설정
    const btn = document.getElementById('generateBtn');
    console.log('Button found:', btn);
    
    btn.addEventListener('click', function() {
        console.log('Button clicked!');
        startRoulette();
    });
});

// 콘솔에 언어 감지 결과 출력 (디버깅용)
console.log('Detected language:', detectLanguage());
console.log('User language:', navigator.language);
console.log('Timezone:', Intl.DateTimeFormat().resolvedOptions().timeZone);