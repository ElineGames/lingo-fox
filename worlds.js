// A WORLD = a theme with up to 5 levels. "src" = which [level, category] of data.js feed it.
// Words are split automatically into up to 5 levels. To enrich a world, add words to those categories in data.js
// or add another [level, category] pair to "src". "decor" = 2D SVG drawn around the levels (viewBox 340x510).
const col=(x,a,y0=165)=>a.map((e,i)=>`<text x="${x}" y="${y0+i*54}" font-size="30" text-anchor="middle">${e}</text>`).join('');
const WORLDS=[
{id:'supermarket',name:'Supermarket',icon:'🛒',sky:['#bfe3ff','#eaf6ff'],src:[['A1','Food'],['A2','Food']],
 decor:`<rect width="340" height="510" fill="#efe6d2"/><rect width="340" height="110" fill="#f8fafc"/><rect y="100" width="340" height="12" fill="#b91c1c"/><text x="170" y="62" font-size="30" font-weight="bold" text-anchor="middle" fill="#b91c1c">SUPERMARKET</text><rect x="6" y="130" width="52" height="340" rx="8" fill="#c98f5a"/><rect x="282" y="130" width="52" height="340" rx="8" fill="#c98f5a"/>`+col(32,['🍎','🥖','🥛','🧀','🍌','🥕'])+col(308,['🥩','🐟','🍅','🧃','🍞','🥔'])+`<text x="300" y="498" font-size="34">🛒</text><text x="20" y="498" font-size="34">🧺</text>`},
{id:'travel',name:'Travel',icon:'🚆',sky:['#ffd9a8','#fff1dc'],src:[['A1','Travel']],
 decor:`<text x="170" y="60" font-size="28" font-weight="bold" text-anchor="middle" fill="#7c2d12">STATION</text><text x="40" y="110" font-size="40">☁️</text><text x="270" y="150" font-size="40">☁️</text><rect y="420" width="340" height="90" fill="#9ca3af"/><rect y="450" width="340" height="8" fill="#6b7280"/><text x="20" y="400" font-size="40">🌳</text><text x="290" y="400" font-size="40">🌳</text><text x="150" y="500" font-size="40">🚆</text><text x="290" y="500" font-size="34">🧳</text>`}
];
