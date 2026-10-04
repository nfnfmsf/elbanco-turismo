const T={es:{home:'Inicio',cr:'Créditos',h:'Rutas, sabores y tambores a orillas del Magdalena',p:'Una guía hecha en El Banco para quien quiera conocerlo de verdad: dónde comer, qué escuchar y por dónde caminar.',sec:'Secciones',exp:'Experiencias',map:'Mapa de rutas',all:'Todas las rutas',view:'Entrar',sub:'Subsecciones',foot:'El Banco, Magdalena · Proyecto UNAD 213026',l:'English',
crt:'Créditos y referencias',cri:'Imágenes: fotografías propias del autor, salvo que se indique otra fuente aquí abajo.',crc:'Mapa y librerías',cra:'Uso de IA',crai:'Parte del código y de los textos de este sitio fue elaborado con apoyo de IA y luego revisado, ajustado y verificado por el autor.',crp:'Fotografías (formato de ejemplo)'},
en:{home:'Home',cr:'Credits',h:'Routes, flavors and drums on the banks of the Magdalena',p:'A guide made in El Banco for anyone who wants to really know it: where to eat, what to listen to and where to walk.',sec:'Sections',exp:'Experiences',map:'Route map',all:'All routes',view:'Enter',sub:'Subsections',foot:'El Banco, Magdalena · UNAD project 213026',l:'Español',
crt:'Credits and references',cri:'Images: the author\'s own photographs unless another source is listed below.',crc:'Map and libraries',cra:'AI use',crai:'Part of the code and text on this site was drafted with AI support, then reviewed, adjusted and verified by the author.',crp:'Photographs (sample format)'}};
// [es, en, desc es, desc en, lat, lng, imagen]  -> coordenadas aproximadas: ajustar con Google Maps
const S=[
{id:'cultura',t:['Cultura','Culture'],subs:[
{t:['Cumbia y música','Cumbia & music'],x:[
['Festival Nacional de la Cumbia','National Cumbia Festival','Cada agosto El Banco se llena de tambores, gaitas y polleras. Es la fiesta grande del pueblo, con desfiles, concursos y orquestas.','Every August El Banco fills with drums, gaitas and swirling skirts. It is the town\'s big party, with parades, contests and live bands.',8.9985,-73.9745,'IMG_FESTIVAL_CUMBIA'],
['El legado de José Barros','The legacy of José Barros','El compositor de "La piragua" nació en El Banco. Su música sigue sonando en cada esquina y le da nombre al festival.','The composer of "La piragua" was born in El Banco. His music still plays on every corner and gives the festival its name.',9.0010,-73.9730,'IMG_JOSE_BARROS'],
['Noches de tambor y gaita','Drum and gaita nights','Fuera del festival, los grupos locales ensayan y tocan en patios y plazas. Acércate: seguro te sacan a bailar.','Outside the festival, local groups rehearse and play in courtyards and squares. Come closer: they will pull you into the dance.',8.9960,-73.9720,'IMG_NOCHE_TAMBOR']]},
{t:['Patrimonio y barrio','Heritage & neighborhood'],x:[
['Plaza y centro histórico','Main square and old town','El corazón del pueblo: andenes con sombra, tiendas de toda la vida y la charla de la tarde.','The heart of town: shaded sidewalks, long-standing shops and the evening chat.',9.0000,-73.9740,'IMG_PLAZA'],
['Malecón del río','Riverfront promenade','Un paseo junto al Magdalena donde la gente se sienta a ver pasar las lanchas y bajar el sol.','A walk beside the Magdalena where people sit to watch the boats go by and the sun go down.',9.0020,-73.9780,'IMG_MALECON'],
['Casa de la Cultura','Cultural center','Punto de encuentro de músicos, bailarines y artistas del municipio. Pregunta por la agenda del mes.','Meeting point for the town\'s musicians, dancers and artists. Ask about the month\'s schedule.',8.9990,-73.9760,'IMG_CASA_CULTURA']]}]},
{id:'naturaleza',t:['Naturaleza','Nature'],subs:[
{t:['El río Magdalena','The Magdalena River'],x:[
['Atardecer sobre el río','Sunset over the river','Cuando el sol cae, el Magdalena se vuelve cobre. Es la mejor hora para fotos y para quedarse callado un rato.','At dusk the Magdalena turns copper. It is the best time for photos and for a quiet moment.',9.0030,-73.9800,'IMG_ATARDECER'],
['Paseo en lancha','Boat ride','Un recorrido corto por el río con lancheros del pueblo que conocen cada vuelta y cada historia.','A short trip down the river with local boatmen who know every bend and every story.',9.0015,-73.9815,'IMG_LANCHA'],
['Pesca artesanal','Traditional fishing','Los pescadores salen de madrugada con atarraya y canoa. Verlos trabajar es entender de dónde viene el almuerzo.','Fishermen head out at dawn with cast nets and canoes. Watching them work shows you where lunch comes from.',9.0040,-73.9790,'IMG_PESCA']]},
{t:['Ciénagas y aves','Wetlands & birds'],x:[
['Ciénaga de Zapatosa','Zapatosa Wetland','Uno de los complejos de humedales más grandes del país, a corta distancia del pueblo. Agua, pájaros y calma.','One of the country\'s largest wetland systems, a short trip from town. Water, birds and calm.',9.0500,-73.9300,'IMG_ZAPATOSA'],
['Avistamiento de aves','Birdwatching','Garzas, cormoranes y martín pescadores se dejan ver temprano. Lleva binoculares y mucha paciencia.','Herons, cormorants and kingfishers show up early. Bring binoculars and plenty of patience.',9.0300,-73.9500,'IMG_AVES'],
['Humedales en tiempo de aguas','Wetlands in the rainy season','Con las lluvias el paisaje cambia por completo: playones inundados y caminos que se vuelven agua.','With the rains the landscape changes completely: flooded flats and paths that turn to water.',9.0200,-73.9600,'IMG_HUMEDALES']]}]},
{id:'gastronomia',t:['Gastronomía','Food'],subs:[
{t:['Platos del río','River dishes'],x:[
['Pescado frito con patacón','Fried fish with patacón','Pescado del Magdalena frito entero, con patacón, arroz de coco y suero. Se come con las manos.','Magdalena fish fried whole, with patacón, coconut rice and suero. Best eaten with your hands.',9.0005,-73.9755,'IMG_PESCADO_FRITO'],
['Sancocho de pescado','Fish sancocho','Caldo espeso con yuca, plátano y ñame. El plato de los domingos en muchas casas banqueñas.','A thick broth with yuca, plantain and yam. A Sunday staple in many local homes.',8.9995,-73.9735,'IMG_SANCOCHO'],
['Bocachico','Bocachico','El pez más típico del río, preparado asado, frito o en viudo. Pregunta cuál sacaron hoy.','The river\'s signature fish, grilled, fried or cooked "viudo" style. Ask which one came in today.',8.9975,-73.9750,'IMG_BOCACHICO']]},
{t:['Mesa costeña','Coastal table'],x:[
['Bollo y queso costeño','Bollo and coastal cheese','Bollo limpio caliente con queso costeño: el desayuno sencillo que nunca falla.','Hot bollo limpio with coastal cheese: the simple breakfast that never fails.',8.9980,-73.9770,'IMG_BOLLO'],
['Jugo de corozo','Corozo juice','Rojo oscuro, dulce y ácido a la vez. Se toma bien frío para espantar el calor.','Deep red, sweet and tart at once. Drink it ice cold to beat the heat.',9.0008,-73.9765,'IMG_COROZO'],
['Desayuno costeño','Coastal breakfast','Arepa de huevo, café y suero en la esquina. Se desayuna despacio y con conversación.','Egg arepa, coffee and suero on the corner. Breakfast here is slow and comes with conversation.',8.9970,-73.9738,'IMG_DESAYUNO']]}]},
{id:'eventos',t:['Eventos','Events'],subs:[
{t:['Festivales','Festivals'],x:[
['Gran desfile del festival','Grand festival parade','Comparsas, trajes de colores y bandas recorren las calles durante horas. Busca un andén con sombra.','Troupes, colorful costumes and bands fill the streets for hours. Find a shaded sidewalk.',9.0002,-73.9742,'IMG_DESFILE'],
['Concursos de música y baile','Music and dance contests','Parejas de baile y agrupaciones de todo el país compiten sobre la tarima principal.','Dance couples and groups from all over the country compete on the main stage.',8.9992,-73.9728,'IMG_CONCURSO'],
['Famtrip del festival','Festival famtrip','Durante el festival llegan operadores y periodistas a conocer el destino. Es buen momento para visitar.','During the festival, tour operators and journalists come to discover the destination. A good time to visit.',9.0012,-73.9752,'IMG_FAMTRIP']]},
{t:['Vida comunitaria','Community life'],x:[
['Fiestas patronales','Patron saint festivities','Misas, procesiones y verbena popular. El barrio entero sale a la calle.','Masses, processions and street parties. The whole neighborhood comes out.',8.9988,-73.9758,'IMG_PATRONALES'],
['Mercado y ferias locales','Local market and fairs','Frutas, pescado y artesanías directo de quien las produce. Llega temprano.','Fruit, fish and crafts straight from the people who make them. Arrive early.',8.9978,-73.9748,'IMG_MERCADO'],
['Navidad con música','Christmas with music','Las novenas se llenan de música, y "Navidad negra" de José Barros suena en todo el pueblo.','Novenas fill with music, and José Barros\'s "Navidad negra" plays all over town.',9.0006,-73.9738,'IMG_NAVIDAD']]}]}];
const $=s=>document.querySelector(s),B=document.body.dataset;
let lang=localStorage.getItem('lang')||'es',map;
const i=()=>lang==='es'?0:1,t=k=>T[lang][k];
const sec=S.find(s=>s.id===B.page),sub=sec&&B.sub?sec.subs[B.sub-1]:null;
const url=(s,n)=>n?`${s.id}-${n}.html`:`${s.id}.html`;
const img=k=>`<img src="img/${k}.jpg" alt="${k}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'ph',textContent:'[${k}]'}))">`;
function drawMap(items){if(map)map.remove();map=L.map('map').setView([9.0,-73.975],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);
map.mk=items.map(e=>L.marker([e[4],e[5]]).addTo(map).bindPopup('<b>'+e[i()]+'</b>'));
map.fitBounds(items.map(e=>[e[4],e[5]]),{padding:[40,40],maxZoom:15});}
const mapBox=h=>`<h2>${h}</h2><div id="map" role="region" aria-label="${h}"></div>`;
const card=e=>`<article class="card exp" tabindex="0" data-k="${e[6]}">${img(e[6])}<div class="t"><h3>${e[i()]}</h3><p>${e[i()+2]}</p></div></article>`;
function render(){document.documentElement.lang=lang;
const here=B.page;
$('#nav').innerHTML=`<b>El Banco</b><a href="index.html" class="${here==='home'?'on':''}">${t('home')}</a>`+S.map(s=>`<a href="${url(s)}" class="${here===s.id?'on':''}">${s.t[i()]}</a>`).join('')+`<a href="creditos.html" class="${here==='cr'?'on':''}">${t('cr')}</a><button id="lang" aria-label="Language">${t('l')}</button>`;
$('#lang').onclick=()=>{lang=lang==='es'?'en':'es';localStorage.setItem('lang',lang);render()};
let h='',items=S.flatMap(s=>s.subs.flatMap(u=>u.x));
if(here==='home'){h=`<header class="hero"><h1>${t('h')}</h1><p>${t('p')}</p></header><main><h2>${t('sec')}</h2><div class="grid">${S.map(s=>`<a class="card link" href="${url(s)}"><div class="t"><h3>${s.t[i()]}</h3><p>${s.subs.map(u=>u.t[i()]).join(' · ')}</p></div></a>`).join('')}</div>${mapBox(t('map'))}</main>`}
else if(here==='cr'){h=`<main class="cr"><h1>${t('crt')}</h1><p>${t('cri')}</p><h2>${t('crc')}</h2><ul>
<li>Agafonkin, V. (2023). <i>Leaflet</i> (Version 1.9.4) [Software]. https://leafletjs.com</li>
<li>OpenStreetMap contributors. (n.d.). <i>OpenStreetMap</i>. https://www.openstreetmap.org/copyright</li>
<li>Google. (n.d.). <i>Google Fonts: Archivo, Source Serif 4</i>. https://fonts.google.com</li></ul>
<h2>${t('cra')}</h2><p>${t('crai')}</p><ul><li>Anthropic. (2026). <i>Claude</i> [Large language model]. https://claude.ai</li></ul>
<h2>${t('crp')}</h2><ul><li>Aguilar Castaño, N. A. (2026). <i>Atardecer sobre el río Magdalena</i> [Fotografía]. Archivo personal.</li><li>Apellido, N. (Año). <i>Título de la imagen</i> [Fotografía]. Sitio. URL</li></ul></main>`}
else if(sub){h=`<main><h1>${sec.t[i()]} · ${sub.t[i()]}</h1><h2>${t('exp')}</h2><div class="grid">${sub.x.map(card).join('')}</div>${mapBox(t('map'))}</main>`}
else{h=`<header class="hero"><h1>${sec.t[i()]}</h1></header><main><h2>${t('sub')}</h2><div class="grid">${sec.subs.map((u,n)=>`<a class="card link" href="${url(sec,n+1)}"><div class="t"><h3>${u.t[i()]}</h3><p>${u.x.map(e=>e[i()]).join(' · ')}</p><p><b>${t('view')}</b></p></div></a>`).join('')}</div>${mapBox(t('all')+' · '+sec.t[i()])}</main>`;items=sec.subs.flatMap(u=>u.x)}
$('#app').innerHTML=h+`<footer>${t('foot')}</footer>`;
if($('#map')){drawMap(sub?sub.x:items);
document.querySelectorAll('.exp').forEach((c,n)=>{const go=()=>{map.flyTo([sub.x[n][4],sub.x[n][5]],16);map.mk[n].openPopup()};c.onclick=go;c.onkeydown=e=>e.key==='Enter'&&go()})}}
render();
