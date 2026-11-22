(()=>{
'use strict';
const $=id=>document.getElementById(id),overlay=$('academyOverlay'),main=$('academyContent');
if(!overlay||!main)return;
const lessons=[
{id:'matter',title:'المادّة في المحيط: الجسم والمادّة والحالات',area:'المادة',color:'#ffad55',story:'رحلة سامي لاكتشاف ما تصنع منه الأشياء',scenes:[
['الأشياء حولنا','يرى سامي كأساً وملعقة ومكعباً، ويسأل: هل الجسم هو نفسه المادة؟'],
['الجسم والمادة','نكتشف أن الكأس جسم مصنوع من الزجاج، والملعقة جسم من معدن، والمكعب من الخشب.'],
['المادة غير المرئية','ينتفخ البالون بالهواء؛ فالهواء يشغل حيزاً وله كتلة رغم أننا لا نراه.'],
['ثلاث حالات','نقارن جسماً صلباً وماءً سائلاً وهواءً غازياً.']
]},
{id:'water_sources',title:'مصادر الماء وأهميته في الحياة',area:'الماء',color:'#48c8ed',story:'رحلة قطرة من السحاب إلى النهر والبيت',scenes:[
['من أين تأتي القطرة؟','تسخّن الشمس الماء فيتبخر، ثم يتكاثف بخار الماء في السحب.'],
['رحلة المطر','تسقط الأمطار فوق الجبال والأودية، وتتجمع المياه في الأنهار والبحيرات.'],
['الماء تحت الأرض','يتسرب جزء من المطر إلى التربة ويغذي المياه الجوفية.'],
['ماء الحياة','تحتاج النباتات والحيوانات والناس إلى الماء، والماء العذب مورد يجب حمايته.']
]},
{id:'water_clean',title:'معالجة الماء: التصفية والتقطير والماء الشروب',area:'الماء',color:'#48c8ed',story:'مغامرة قطرة تبحث عن طريقها لتصبح آمنة',scenes:[
['الماء العكر','تدخل القطرة وعاءً فيه رمل وعوالق؛ صفاء الماء لا يعني أنه آمن للشرب.'],
['الترشيح','يمر الماء عبر الحصى والرمل وورق الترشيح، فتحجز الطبقات كثيراً من العوالق.'],
['التقطير','نسخّن الماء ليتبخر، ثم نبرّد البخار ليتكاثف في وعاء آخر؛ تبقى معظم الأملاح في الوعاء الأول.'],
['السلامة الصحية','تحتاج مياه الشرب إلى معالجة وتعقيم ومراقبة مناسبة؛ المرشح المنزلي وحده لا يضمن السلامة.']
]},
{id:'water_protect',title:'المحافظة على الماء من التلوث',area:'الماء',color:'#48c8ed',story:'سامي ينقذ النهر ويعيد إليه الحياة',scenes:[
['النهر يتأذى','تصل النفايات والزيوت ومياه الصرف غير المعالجة إلى مجرى الماء.'],
['من أين يأتي التلوث؟','قد تصل الأسمدة والمبيدات والمواد الكيميائية إلى الأودية والمياه الجوفية.'],
['محطة المعالجة','تمر المياه المستعملة بمراحل معالجة قبل إعادتها إلى البيئة وفق المعايير.'],
['حارس الماء','نغلق الصنبور، ونصلح التسرب، ولا نرمي الزيوت أو النفايات في الأحواض.']
]},
{id:'air_pressure',title:'الضغط الجوّي: إثبات وجوده وقياسه',area:'الهواء',color:'#83c9e9',story:'مهمة الروبوت لقياس قوة الهواء',scenes:[
['الهواء يضغط','ينتفخ البالون لأن الهواء داخله يؤثر في جدرانه ويدفعها إلى الخارج.'],
['تجربة الكأس','يمكن للضغط الجوي أن يساعد على إبقاء بطاقة مناسبة عند فوهة كأس مقلوب فوق الماء؛ تجربة بإشراف المعلم.'],
['جهاز القياس','يقيس البارومتر الضغط الجوي، وتعرض قراءته بوحدات مثل الهكتوباسكال.'],
['نرتفع إلى الجبل','ينخفض الضغط الجوي عادة كلما ارتفعنا عن سطح البحر.']
]},
{id:'air_mix',title:'الهواء ومكوّناته',area:'الهواء',color:'#83c9e9',story:'محقّق صغير يكشف ممّ يتكوّن الهواء',scenes:[
['خليط غير مرئي','نرى أثر الهواء في حركة أوراق الشجر، لكنه خليط من عدة غازات.'],
['النسب التقريبية','يتكون الهواء الجاف تقريباً من 78% ثنائي الأزوت و21% ثنائي الأكسجين ونحو 1% غازات أخرى.'],
['الأكسجين في حياتنا','يحتاج معظم الكائنات إلى الأكسجين في التنفس، كما يدعم حدوث الاحتراق.'],
['الأرقام تحكي','نقارن بصرياً نسبة الأزوت الكبيرة بنسبة الأكسجين والغازات الأخرى الصغيرة.']
]},
{id:'air_ozone',title:'تلوث الهواء وطبقة الأوزون',area:'الهواء',color:'#83c9e9',story:'حماة السماء يواجهون التلوث ويحافظون على طبقة الأوزون',scenes:[
['هواء ملوّث','تطلق وسائل النقل والمصانع والحرق ملوثات تؤثر في صحة الإنسان والبيئة.'],
['درع الأوزون','توجد طبقة غنية بالأوزون في الستراتوسفير وتمتص جزءاً كبيراً من الأشعة فوق البنفسجية.'],
['حماية الأرض','تصد طبقة الأوزون جزءاً من الأشعة فوق البنفسجية الضارة عن الكائنات الحية.'],
['حلول يومية','نقلل الانبعاثات ونرشد الطاقة ونختار النقل الجماعي ونمنع الحرق العشوائي.']
]},
{id:'volume',title:'قياس الحجم',area:'الحجم',color:'#bd9af2',story:'لغز الصندوق والحجر والمخبار المدرّج',scenes:[
['حجم السائل','نقرأ تدريج المخبار عند مستوى العين وننتبه إلى أسفل سطح السائل المنحني.'],
['حجم جسم غير منتظم','نقيس الماء قبل وضع الحجر وبعده؛ فرق القراءتين يساوي حجم الجزء المغمور.'],
['حجم متوازي المستطيلات','نقيس الطول والعرض والارتفاع ثم نحسب الحجم: الطول × العرض × الارتفاع.'],
['وحدات الحجم','نستعمل اللتر والمليلتر والسنتيمتر المكعب، ونعرف أن 1 mL يساوي 1 cm³.']
]},
{id:'mass',title:'قياس الكتلة',area:'الكتلة',color:'#bd9af2',story:'سامي والميزان: أي جسم كتلته أكبر؟',scenes:[
['نقارن جسمين','يميل الميزان نحو الجسم ذي الكتلة الأكبر عندما يكون الميزان مضبوطاً.'],
['الميزان ذو الكفتين','نوازن الجسم بكتل معيارية معروفة لمعرفة كتلته.'],
['الميزان الإلكتروني','نضع الجسم في وسط الميزان ونقرأ القيمة مع اختيار الوحدة الصحيحة.'],
['الغرام والكيلوغرام','نستخدم الغرام للأشياء الصغيرة والكيلوغرام للكتل الأكبر؛ 1 kg يساوي 1000 g.']
]},
{id:'states',title:'الحالات الفيزيائية للمادّة والتحوّلات',area:'الحالات',color:'#70d5c3',story:'مغامرة مكعب الثلج في عالم الحرارة والبرودة',scenes:[
['ثلاث حالات','جزيئات الصلب متقاربة ومنتظمة، والسائل متقاربة وتتحرك، والغاز متباعدة.'],
['الانصهار والتجمّد','يمتص الثلج الحرارة فينصهر إلى ماء، ويفقد الماء الحرارة فيتجمد.'],
['التبخر والتكاثف','يتحول الماء السائل إلى بخار، ثم يعود البخار سائلاً عندما يبرد.'],
['رحلة الماء المستمرة','تتكرر التحولات في الطبيعة ضمن دورة الماء بين السطح والجو والسحب.']
]},
{id:'magnet',title:'المغانط: الجذب والتنافر والأقطاب',area:'المغناطيس',color:'#ef8b9c',story:'المغناطيس يكتشف أصدقاءه وأقطابه',scenes:[
['ما الذي ينجذب؟','يجذب المغناطيس بعض المواد مثل الحديد، ولا يجذب الخشب أو البلاستيك بالطريقة نفسها.'],
['قطبان مختلفان','يتجاذب القطبان المختلفان، بينما يتنافر القطبان المتشابهان.'],
['مجال مغناطيسي','ترسم برادة الحديد أشكالاً تقريبية لخطوط المجال حول المغناطيس.'],
['البوصلة','تتجه إبرة البوصلة مع المجال المغناطيسي وتساعدنا على تحديد الاتجاهات.']
]},
{id:'circuit',title:'الدارة الكهربائية',area:'الكهرباء',color:'#ffd166',story:'فريق الأصدقاء يشغّل المصباح بدارة صحيحة',scenes:[
['مكوّنات الدارة','نحتاج إلى مصدر كهربائي وأسلاك ومصباح لتكوين دارة بسيطة.'],
['مفتاح مفتوح','عندما تكون الدارة مقطوعة لا يمر التيار ولا يضيء المصباح.'],
['مفتاح مغلق','عندما تكتمل الدارة المغلقة يمر التيار فيضيء المصباح.'],
['سلامة أولاً','نستعمل بطاريات تعليمية صغيرة بإشراف المعلم، ولا نجرّب الكهرباء المنزلية أو نلمس الأسلاك المكشوفة.']
]},
{id:'current_effects',title:'تأثيرات التيار الكهربائي',area:'الكهرباء',color:'#ffd166',story:'التيار يقوم بأكثر من مهمة: يضيء ويسخّن ويحرّك',scenes:[
['التأثير الضوئي','يحوّل المصباح الطاقة الكهربائية إلى ضوء وحرارة.'],
['التأثير الحراري','يسخن عنصر التسخين عند مرور التيار في بعض الأجهزة المصممة لذلك.'],
['التأثير الحركي','يحوّل المحرك الكهربائي الطاقة الكهربائية إلى حركة تدير المروحة.'],
['التأثير المغناطيسي','ينشأ مجال مغناطيسي حول موصل يمر فيه تيار، ويستعمل في المغناطيس الكهربائي.']
]},
{id:'intensity',title:'شدة التيار الكهربائي وقياسها',area:'الكهرباء',color:'#ffd166',story:'المحقّق الكهربائي يتتبّع التيار ويقرأ الأمبيرمتر',scenes:[
['التيار في الدارة','يمثل التيار حركة الشحنات في دارة مغلقة، ونقيس شدته بالأمبير.'],
['مكان الأمبيرمتر','يوصل الأمبيرمتر على التوالي في الدارة لقياس شدة التيار.'],
['قراءة القياس','نختار مجال القياس المناسب ونقرأ المؤشر أو الشاشة بوحدة A.'],
['مقارنة الشدة','نقارن قراءتين في دارتين تعليميتين ونلاحظ اختلاف شدة التيار، دون لمس كهرباء المنزل.']
]}
];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let timer=null,elapsed=0,started=0;
const scenes=p=>p.scenes;
function face(x,y,color){return '<g class="guide"><circle cx="'+x+'" cy="'+y+'" r="38" fill="#ffd0a2" stroke="#fff0d9" stroke-width="5"/><path d="M'+(x-34)+' '+(y-7)+'q3-42 39-34 26 4 31 31-22-12-42-8-13 2-28 11" fill="#49342c"/><circle cx="'+(x-12)+'" cy="'+(y+1)+'" r="4.5" fill="#382b25"/><circle cx="'+(x+13)+'" cy="'+(y+1)+'" r="4.5" fill="#382b25"/><path d="M'+(x-10)+' '+(y+17)+'q10 9 21 0" fill="none" stroke="#a44b43" stroke-width="4" stroke-linecap="round"/><path d="M'+(x-48)+' '+(y+44)+'q48-24 96 0l12 118h-120Z" fill="'+color+'"/><path d="M'+(x-39)+' '+(y+75)+'l-49 40m124-40 49 40" stroke="#ffd0a2" stroke-width="14" stroke-linecap="round"/></g>'}
function robot(x,y,color){return '<g class="float"><rect x="'+(x-43)+'" y="'+(y-44)+'" width="86" height="82" rx="20" fill="'+color+'" stroke="#eaf6ff" stroke-width="5"/><path d="M'+x+' '+(y-44)+'v-23m-11 0h22" stroke="#eaf6ff" stroke-width="6" stroke-linecap="round"/><circle cx="'+(x-17)+'" cy="'+(y-9)+'" r="7" fill="#102333"/><circle cx="'+(x+17)+'" cy="'+(y-9)+'" r="7" fill="#102333"/><path d="M'+(x-18)+' '+(y+15)+'h36" stroke="#102333" stroke-width="6" stroke-linecap="round"/><path d="M'+(x-30)+' '+(y+41)+'v25m60-25v25" stroke="#eaf6ff" stroke-width="9" stroke-linecap="round"/></g>'}
function tag(x,y,t,c='#fff',size=25){return '<text x="'+x+'" y="'+y+'" fill="'+c+'" text-anchor="middle" font-family="Tahoma,Arial,sans-serif" font-size="'+size+'" font-weight="700">'+esc(t)+'</text>'}
function glass(x,y,w,h,level='#44c9ed',fillLevel=0.5){let top=y+h*(1-fillLevel);return '<g><path d="M'+x+' '+y+'h'+w+'l-8 '+h+'q-'+(w/2-8)+' 18 -'+(w-16)+' 0Z" fill="#dff8ff18" stroke="#d9f4ff" stroke-width="8"/><path d="M'+(x+8)+' '+top+'h'+(w-16)+'l-5 '+(h*fillLevel-8)+'q-'+(w/2-7)+' 14 -'+(w-14)+' 0Z" fill="'+level+'" opacity=".78"/><path d="M'+(x+12)+' '+(y+12)+'v'+(h-35)+'" stroke="#fff" stroke-opacity=".45" stroke-width="5"/></g>'}
function drop(x,y,r=18,c='#55d9f5'){return '<path class="drop" d="M'+x+' '+(y-r*1.9)+'Q'+(x-r*1.4)+' '+(y+r*.2)+' '+x+' '+(y+r)+'Q'+(x+r*1.4)+' '+(y+r*.2)+' '+x+' '+(y-r*1.9)+'Z" fill="'+c+'"/>'}
function ground(){return '<path d="M0 545Q280 505 560 545T1200 540V675H0Z" fill="#203c43"/>'}
function base(p,body){return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675" width="1200" height="675"><defs><linearGradient id="sky" x2="0" y2="1"><stop stop-color="#111d2b"/><stop offset="1" stop-color="#263e4b"/></linearGradient><linearGradient id="water" x2="0" y2="1"><stop stop-color="#9be7fa"/><stop offset="1" stop-color="#1688b4"/></linearGradient><linearGradient id="gold" x2="0" y2="1"><stop stop-color="#ffe7a3"/><stop offset="1" stop-color="#f59e0b"/></linearGradient></defs><style>.guide{animation:bob 2.8s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.float{animation:float 2s ease-in-out infinite}.drop{animation:drop 2.7s ease-in infinite}.pulse{animation:pulse 1.8s ease-in-out infinite}.spin{animation:spin 5s linear infinite;transform-box:fill-box;transform-origin:center}.dash{stroke-dasharray:13 12;animation:dash 2s linear infinite}@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-18px)}}@keyframes drop{0%{transform:translateY(-18px);opacity:.25}70%{transform:translateY(95px);opacity:1}100%{transform:translateY(120px);opacity:0}}@keyframes pulse{0%,100%{opacity:.55;transform:scale(.95)}50%{opacity:1;transform:scale(1.06)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes dash{to{stroke-dashoffset:-50}}</style><rect width="1200" height="675" fill="url(#sky)"/><circle cx="1050" cy="95" r="58" fill="#ffd166" opacity=".15"/>'+ground()+face(165,390,p.color)+body+'</svg>'}
function sceneArt(p,i){
const id=p.id;
if(id==='matter'){
const a=[
'<g transform="translate(440 225)"><rect x="0" y="30" width="130" height="130" rx="12" fill="#b97b46" stroke="#f6c58e" stroke-width="8"/><path d="M25 55l80 80M105 55 25 135" stroke="#75452c" stroke-width="5"/><path d="M200 150l45-115 45 115Z" fill="#c7d0d5" stroke="#f4f7fa" stroke-width="8"/>'+glass(390,20,95,165,'#55d9f5',.45)+'</g>'+tag(700,500,'جسمان مختلفان ومواد مختلفة','#fff',27),
'<g transform="translate(410 200)"><rect x="15" y="45" width="180" height="135" rx="12" fill="#b97b46" stroke="#ffdbad" stroke-width="7"/>'+Array.from({length:20},(_,n)=>'<circle cx="'+(35+n%5*34)+'" cy="'+(65+Math.floor(n/5)*29)+'" r="5" fill="#ffe4b5"/>').join('')+'<path d="M250 115q-48-78 0-115 48 37 0 115Z" fill="#4cc9e8" stroke="#d8f8ff" stroke-width="7"/><path d="M250 10v100" stroke="#fff" stroke-width="5" opacity=".6"/></g>'+tag(785,500,'المادة لها كتلة وتشغل حيزاً','#fff',27),
'<g transform="translate(470 180)"><ellipse cx="115" cy="180" rx="95" ry="20" fill="#ffffff18"/><path d="M115 30q-76 15-72 90 5 70 72 85 67-15 72-85-4-75-72-90Z" fill="#a8ecff22" stroke="#b9e9f5" stroke-width="7"/><path d="M115 28v-22" stroke="#b9e9f5" stroke-width="7"/><g fill="#9fe9ff"><circle cx="85" cy="85" r="7"/><circle cx="135" cy="115" r="7"/><circle cx="100" cy="155" r="7"/></g><path d="M185 90q75-50 110 10" fill="none" stroke="#9fe9ff" stroke-width="5" class="dash"/></g>'+tag(820,500,'حتى الهواء مادة غير مرئية','#fff',27),
'<g transform="translate(390 235)"><rect x="0" y="30" width="115" height="115" rx="9" fill="#ffb45b"/><g fill="#5dc9ed"><circle cx="220" cy="60" r="11"/><circle cx="255" cy="82" r="11"/><circle cx="220" cy="110" r="11"/><circle cx="188" cy="83" r="11"/></g><g fill="#c49af5"><circle cx="385" cy="25" r="7"/><circle cx="425" cy="65" r="7"/><circle cx="365" cy="90" r="7"/><circle cx="430" cy="145" r="7"/><circle cx="395" cy="185" r="7"/></g></g>'+tag(455,485,'صلبة', '#ffd08a',24)+tag(680,485,'سائلة','#83e5ff',24)+tag(895,485,'غازية','#d2b6ff',24)
];return a[i]
}
if(id==='water_sources'){
const a=[
'<g><path d="M330 390l100-190 110 150 80-110 130 160" fill="#526a7a" stroke="#a6bac7" stroke-width="8"/><path d="M505 290q30-55 60 0t60 0" stroke="#d6f6ff" stroke-width="7" fill="none" class="dash"/><path d="M280 410q250-45 500 0v100H280Z" fill="#208ab4"/><path d="M380 130q45-50 85 0 45-40 80 5" stroke="#bfeeff" stroke-width="28" fill="none" stroke-linecap="round"/>'+drop(570,210,19)+'</g>'+tag(760,505,'تتبخر المياه ثم يتكاثف البخار','#fff',25),
'<g><path d="M340 330l100-165 90 125 85-95 150 190" fill="#586c7b" stroke="#c3d5dc" stroke-width="7"/><path d="M300 440q100-40 200 0t200 0 200 0v90H300Z" fill="#1688b4"/>'+Array.from({length:8},(_,n)=>'<path d="M'+(450+n*35)+' 245l-12 45" stroke="#7bdcff" stroke-width="6" class="dash"/>').join('')+'<path d="M295 530q90-35 180 0t180 0" fill="none" stroke="#75d5f4" stroke-width="8"/></g>'+tag(790,490,'مطر · نهر · بحيرة','#fff',27),
'<g><path d="M320 400H850V540H320Z" fill="#795d48"/><path d="M320 400H850V438H320Z" fill="#4fb8d2"/><path d="M320 438H850V540H320Z" fill="#9b7959"/><path d="M430 435q120 20 230 0v75q-105 30-230 0Z" fill="#2a9fc0" opacity=".75"/><path d="M435 395v-95m20 100v-95m300 95v-95" stroke="#91d9ec" stroke-width="5" stroke-dasharray="10 9"/></g>'+tag(700,250,'مياه جوفية','#dff8ff',28)+tag(700,585,'تخزنها طبقات التربة والصخور','#fff',24),
'<g><circle cx="720" cy="210" r="50" fill="#ffd166"/><path d="M320 465q140-55 280 0t280 0v80H320Z" fill="#1889b5"/><path d="M370 455q25-55 50 0m95 0q25-55 50 0" fill="none" stroke="#9ceaff" stroke-width="9"/><path d="M680 270q-45-65-90 0" fill="none" stroke="#a8eaff" stroke-width="8" class="dash"/>'+drop(620,365,18)+'</g>'+tag(780,585,'نحافظ على الماء العذب','#fff',27)
];return a[i]
}
if(id==='water_clean'){
const a=[
'<g transform="translate(480 205)">'+glass(40,15,160,250,'#9b7449',.58)+'<g fill="#5b4636"><circle cx="95" cy="280" r="8"/><circle cx="145" cy="260" r="7"/><circle cx="75" cy="235" r="5"/><circle cx="165" cy="210" r="8"/><circle cx="110" cy="185" r="6"/></g></g>'+tag(800,500,'عوالق ورمال في الماء','#fff',27),
'<g transform="translate(500 155)"><path d="M55 0h260L250 195H120Z" fill="#dff7ff22" stroke="#dff7ff" stroke-width="9"/><path d="M82 55h205l-15 43H97Z" fill="#b99a67"/><path d="M98 105h175l-15 43H112Z" fill="#ddc69a"/><path d="M115 155h140l-10 35H125Z" fill="#85939b"/><path d="M160 195v95h60v-95" stroke="#dff7ff" stroke-width="8" fill="#4dc8eb44"/><path d="M190 205v45" stroke="#68dcf7" stroke-width="8" class="dash"/></g>'+tag(800,500,'الحصى والرمل والمرشح تحجز العوالق','#fff',24),
'<g transform="translate(400 170)"><path d="M30 85h190l-20 110H50Z" fill="#8b6748" stroke="#f4d7b1" stroke-width="7"/><path d="M70 80v-52m0 0h115v52" stroke="#e8f7ff" stroke-width="8" fill="none"/><path d="M95 30q45-60 90 0" stroke="#e8f7ff" stroke-width="6" fill="none"/><path d="M160 85v-50" stroke="#ffd166" stroke-width="7"/><path d="M220 135q35-10 35 35" stroke="#a5eaff" stroke-width="8" fill="none"/><path d="M255 170q55-70 100-10" stroke="#a5eaff" stroke-width="8" fill="none" class="dash"/>'+glass(365,20,105,210,'#62d2f2',.6)+'</g>'+tag(800,500,'تبخير ثم تكثيف لفصل معظم الأملاح','#fff',24),
'<g transform="translate(475 190)">'+glass(40,35,150,220,'#51c7e8',.65)+'<path d="M270 45L330 0l60 45v85q-10 75-60 95-50-20-60-95Z" fill="#158d68" stroke="#c6ffe9" stroke-width="8"/><path d="M300 118l22 25 44-54" stroke="#fff" stroke-width="13" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="90" cy="15" r="8" fill="#ffd166"/><circle cx="125" cy="5" r="7" fill="#ffd166"/></g>'+tag(800,500,'تعقيم ومراقبة قبل الشرب','#fff',26)
];return a[i]
}
if(id==='water_protect'){
const a=[
'<g><path d="M330 425q180-50 340 0t300 0v100H330Z" fill="#1685a8"/><path d="M470 340l45 20-20 30-42-16Z" fill="#a8754b"/><path d="M610 365l40-35 30 22-40 36Z" fill="#c5c7c4"/><path d="M760 340q50-25 80 0l-20 28h-55Z" fill="#25282b"/><path d="M760 370q55-20 110 5" stroke="#343434" stroke-width="13" fill="none"/></g>'+tag(790,500,'النفايات والزيوت تلوث الماء','#fff',25),
'<g><path d="M360 450q180-35 330 0t280 0v100H360Z" fill="#226e7b"/><path d="M500 355q80-55 160 0" stroke="#9c7047" stroke-width="20" fill="none"/><path d="M570 360q25 20 0 40t0 40m85-80q25 20 0 40t0 40" stroke="#d7a45c" stroke-width="5" fill="none"/><g fill="#9bd66f"><circle cx="795" cy="350" r="10"/><circle cx="830" cy="370" r="8"/><circle cx="865" cy="345" r="12"/></g></g>'+tag(800,510,'ملوثات تصل من الأرض إلى الأودية','#fff',24),
'<g transform="translate(410 230)"><rect x="0" y="60" width="430" height="190" rx="20" fill="#d9f6ff18" stroke="#b5e6f4" stroke-width="7"/><rect x="25" y="95" width="85" height="115" rx="12" fill="#9a7b56"/><rect x="135" y="95" width="85" height="115" rx="12" fill="#58a8a9"/><rect x="245" y="95" width="85" height="115" rx="12" fill="#4a91b4"/><path d="M110 150h25m85 0h25m85 0h25" stroke="#fff" stroke-width="9" class="dash"/><path d="M375 75v-60m-15 15 15-15 15 15" stroke="#7ce1fa" stroke-width="8" fill="none"/></g>'+tag(800,520,'محطة تعالج المياه قبل تصريفها','#fff',25),
'<g><path d="M530 180v120h100v-85h70" fill="none" stroke="#a8dce9" stroke-width="15" stroke-linecap="round"/><path d="M700 215h95q35 0 35 35v12" fill="none" stroke="#a8dce9" stroke-width="15"/><path d="M828 270q-25 35 0 55 25-20 0-55" fill="#4dd1f4"/><path d="M855 335l35 10" stroke="#ffad55" stroke-width="9"/><path d="M780 440q45-35 90 0" stroke="#82d79e" stroke-width="8" fill="none"/></g>'+tag(790,520,'نقتصد ونصلح التسربات','#fff',27)
];return a[i]
}
if(id==='air_pressure'){
const a=[
'<g transform="translate(520 170)"><path d="M150 40q-120-35-110 100 10 120 110 115 100-5 105-125Q260 45 150 40Z" fill="#ef8d9b" stroke="#ffd3d8" stroke-width="8"/><path d="M150 45v-35" stroke="#f4c9a7" stroke-width="10"/><path d="M150 125l-45-20m45 20 45-20m-45 20v-55m0 55v65" stroke="#fff" stroke-width="7" class="dash"/></g>'+tag(800,500,'الهواء يضغط في جميع الاتجاهات','#fff',26),
'<g transform="translate(510 170)"><path d="M80 0h190l-10 215q-3 20-85 20t-85-20Z" fill="#dff7ff1a" stroke="#dff7ff" stroke-width="9"/><path d="M90 125h170l-10 75q-72 32-150 0Z" fill="#50c7ed"/><path d="M70 0h210" stroke="#e8f7ff" stroke-width="12"/><path d="M60 235q-10 55 40 55h115q40 0 35-55" fill="none" stroke="#f4d6a5" stroke-width="8"/><path d="M165 245v-75" stroke="#ffbb58" stroke-width="7" class="dash"/></g>'+tag(800,500,'تجربة بإشراف المعلم وفوق حوض','#fff',23),
'<g transform="translate(600 335)"><circle cx="0" cy="0" r="132" fill="#1d2f3a" stroke="#d9edf7" stroke-width="12"/><circle cx="0" cy="0" r="96" fill="#eff7fa"/><path d="M0-78v16m0 108v16m-78-62h16m108 0h16" stroke="#64748b" stroke-width="7"/><path d="M0 0l54-52" stroke="#ed8b41" stroke-width="9" stroke-linecap="round"/><circle cx="0" cy="0" r="12" fill="#334155"/></g>'+tag(800,535,'البارومتر يقيس الضغط الجوي','#fff',26),
'<g><path d="M380 475l150-180 95 100 110-160 160 240" fill="#556778" stroke="#a6bac7" stroke-width="8"/><circle cx="450" cy="180" r="27" fill="#ffd166"/><path d="M380 120v120m-22-22 22 22 22-22" stroke="#b9e7f7" stroke-width="7" fill="none"/><path d="M720 250v95m-22-22 22 22 22-22" stroke="#b9e7f7" stroke-width="7" fill="none"/></g>'+tag(800,550,'الضغط أقل عند الارتفاعات العالية','#fff',25)
];return a[i]
}
if(id==='air_mix'){
const a=[
'<g><path d="M450 330q65-90 130 0t130 0" fill="none" stroke="#90d9f0" stroke-width="10" class="dash"/><g fill="#a8e7ff"><circle cx="500" cy="225" r="9"/><circle cx="600" cy="180" r="7"/><circle cx="730" cy="245" r="10"/><circle cx="820" cy="180" r="7"/><circle cx="900" cy="280" r="8"/></g></g>'+tag(780,500,'الهواء يحيط بنا رغم أننا لا نراه','#fff',26),
'<g transform="translate(680 330)"><circle cx="0" cy="0" r="145" fill="#293f51" stroke="#dff6ff" stroke-width="7"/><path d="M0 0V-145A145 145 0 0 1 0 145Z" fill="#4db8de"/><path d="M0 0V145A145 145 0 0 1-31-142Z" fill="#f3a34a"/><path d="M0 0L-31-142A145 145 0 0 1 0-145Z" fill="#9e8bd2"/></g>'+tag(850,530,'78% أزوت · 21% أكسجين · 1% أخرى','#fff',22)+tag(670,165,'تقريباً في الهواء الجاف','#dff6ff',22),
'<g transform="translate(570 230)"><path d="M100 20q-100-40-110 70 10 110 110 95 100 15 110-95Q200-20 100 20Z" fill="#d888a0" stroke="#ffd7e0" stroke-width="7"/><path d="M100 35v140M35 75q65 40 130 0" stroke="#fff" stroke-width="6" fill="none"/><path d="M55 45q-50-45-55 15m155-15q50-45 55 15" stroke="#8de3f3" stroke-width="8" fill="none" class="dash"/></g>'+tag(820,500,'الأكسجين مهم للتنفس','#fff',27),
'<g transform="translate(700 330)"><rect x="-185" y="-52" width="370" height="104" rx="16" fill="#243b4b" stroke="#d5e7f2" stroke-width="7"/><rect x="-180" y="-45" width="280" height="90" rx="9" fill="#4db8de"/><rect x="100" y="-45" width="76" height="90" fill="#f3a34a"/><rect x="176" y="-45" width="4" height="90" fill="#b89ae8"/><text x="-40" y="10" text-anchor="middle" fill="#102b3a" font-size="38" font-weight="900">78%</text><text x="137" y="9" text-anchor="middle" fill="#4b2b10" font-size="23" font-weight="900">21</text><path d="M-180 75h280m0 0h76m-76 0 0 16m76-16 0 16" stroke="#dcecf3" stroke-width="3"/></g>'+tag(800,525,'النسب تقريبية وتتغير مع الرطوبة','#fff',23)
];return a[i]
}
if(id==='air_ozone'){
const a=[
'<g><rect x="370" y="390" width="520" height="110" fill="#53616a"/><rect x="450" y="300" width="90" height="90" fill="#72828a"/><rect x="580" y="250" width="110" height="140" fill="#66757d"/><path d="M470 300v-60h50v60m110-50v-80h35v80" fill="#64727c"/><g fill="#64727c" opacity=".8"><circle cx="500" cy="200" r="32"/><circle cx="550" cy="175" r="42"/><circle cx="600" cy="195" r="30"/></g><path d="M520 200q60-80 120 0" fill="none" stroke="#a6a6a6" stroke-width="10" class="dash"/></g>'+tag(800,535,'العوادم والحرق يلوثان الهواء','#fff',25),
'<g><path d="M300 190Q600 120 900 190" stroke="#69d3aa" stroke-width="35" fill="none"/><path d="M300 220Q600 150 900 220" stroke="#9bf0ce" stroke-width="12" fill="none" stroke-dasharray="14 12"/><circle cx="800" cy="100" r="40" fill="#ffd166"/><path d="M800 160v70" stroke="#ffdc89" stroke-width="8" class="dash"/></g>'+tag(760,500,'طبقة الأوزون في الستراتوسفير','#fff',26),
'<g><circle cx="810" cy="145" r="48" fill="#ffd166"/><path d="M780 205l-170 150m200-135-120 150m150-125-85 150" stroke="#ffcf68" stroke-width="12"/><path d="M350 360Q620 245 900 360" stroke="#6dd5b0" stroke-width="34" fill="none"/><path d="M350 390Q620 275 900 390" stroke="#b8ffe3" stroke-width="8" fill="none"/></g>'+tag(770,530,'الأوزون يمتص جزءاً كبيراً من UV','#fff',25),
'<g><path d="M390 420h400" stroke="#90d9f0" stroke-width="14"/><rect x="440" y="335" width="95" height="80" rx="15" fill="#3d8e9e"/><circle cx="485" cy="430" r="24" fill="#263b45"/><circle cx="510" cy="430" r="24" fill="#263b45"/><path d="M670 325v90m-25-65h50" stroke="#82d79e" stroke-width="10"/><path d="M700 300q-35-30-70 0" fill="none" stroke="#82d79e" stroke-width="8"/></g>'+tag(790,530,'نقل أنظف وطاقة أقل تلوثاً','#fff',25)
];return a[i]
}
if(id==='volume'){
const a=[
'<g transform="translate(620 190)"><path d="M0 0h170v300H0Z" fill="#e6faff12" stroke="#d9f3fa" stroke-width="9"/><path d="M10 170h150v120H10Z" fill="#50c8ec" opacity=".8"/>'+Array.from({length:5},(_,n)=>'<path d="M10 '+(60+n*48)+'h'+(n%2?22:42)+'" stroke="#fff" stroke-width="5"/>').join('')+'<path d="M5 165q80 20 160 0" stroke="#c9f8ff" stroke-width="5" fill="none"/></g>'+tag(800,540,'نقرأ التدريج عند مستوى العين','#fff',24),
'<g transform="translate(530 190)"><path d="M0 0h165v300H0Z" fill="#dff8ff12" stroke="#e5faff" stroke-width="8"/><path d="M10 160h145v130H10Z" fill="#50c8ec"/><path d="M235 180l60-40 45 55-60 45Z" fill="#af8a61" stroke="#f3d1a7" stroke-width="7"/><path d="M285 240v-60" stroke="#ffbc66" stroke-width="7" class="dash"/></g>'+tag(800,540,'فرق المنسوب يساوي حجم الجسم المغمور','#fff',22),
'<g transform="translate(540 250)"><path d="M0 45h310v210H0Z" fill="#d39b5d" stroke="#ffe1bc" stroke-width="8"/><path d="M0 45 55 0h310l-55 45Z" fill="#f0bd7c" stroke="#ffe1bc" stroke-width="8"/><path d="M310 45l55-45v210l-55 45Z" fill="#a96d3d" stroke="#f0bd7c" stroke-width="8"/><path d="M10 270h290" stroke="#fff" stroke-width="6" stroke-dasharray="10 10"/></g>'+tag(780,555,'الحجم = الطول × العرض × الارتفاع','#fff',26),
'<g transform="translate(570 230)"><circle cx="0" cy="0" r="105" fill="#48bfdf" opacity=".2"/><text x="0" y="15" text-anchor="middle" fill="#fff" font-size="48" font-weight="900">1 mL</text><path d="M-80 100h160" stroke="#9beaff" stroke-width="8"/><text x="0" y="175" text-anchor="middle" fill="#dff8ff" font-size="31">= 1 cm³</text><path d="M-155-105h310" stroke="#b5d2df" stroke-width="6" stroke-dasharray="12 8"/></g>'+tag(800,535,'اللتر والمليلتر والسنتيمتر المكعب','#fff',25)
];return a[i]
}
if(id==='mass'){
const a=[
'<g transform="translate(690 340)"><path d="M0-130v240m-130-195h260M0-85l-105 105m105-105L105 20" stroke="#e4d5c2" stroke-width="12"/><path d="M-160 20h110l-15 95h-80Z" fill="#e8b66d" stroke="#fff0d8" stroke-width="7"/><path d="M50 20h110l-15 95H65Z" fill="#a6d7ec" stroke="#e7f8ff" stroke-width="7"/><path d="M-40 110h80" stroke="#e4d5c2" stroke-width="12"/></g>'+tag(800,520,'نقارن كتلتين بالميزان','#fff',26),
'<g transform="translate(650 330)"><path d="M0-140v260m-125-220h250M0-100l-90 100m90-100 90 100" stroke="#e8d9c5" stroke-width="10"/><path d="M-140 0h100l-10 70h-80Z" fill="#bd8a52"/><path d="M40 0h100l-10 70H50Z" fill="#bd8a52"/><g fill="#ffd166"><rect x="55" y="-24" width="40" height="24" rx="4"/><rect x="75" y="-52" width="40" height="28" rx="4"/></g></g>'+tag(800,530,'نستعمل كتلًا معيارية معروفة','#fff',26),
'<g transform="translate(560 300)"><rect x="0" y="0" width="260" height="170" rx="24" fill="#263d4a" stroke="#d7eff9" stroke-width="8"/><rect x="45" y="30" width="170" height="62" rx="9" fill="#9bf4d0"/><text x="130" y="76" text-anchor="middle" fill="#173b35" font-size="41" font-weight="900">250 g</text><path d="M80 115h100" stroke="#d7eff9" stroke-width="8" stroke-linecap="round"/></g>'+tag(800,540,'نقرأ شاشة الميزان الإلكتروني','#fff',26),
'<g transform="translate(690 330)"><circle cx="-65" cy="0" r="88" fill="#68c7e6" opacity=".25"/><circle cx="105" cy="0" r="88" fill="#f3b45e" opacity=".3"/><text x="-65" y="18" text-anchor="middle" fill="#fff" font-size="43" font-weight="900">g</text><text x="105" y="18" text-anchor="middle" fill="#fff" font-size="43" font-weight="900">kg</text><path d="M-10 0h50m-18-18 18 18-18 18" stroke="#fff" stroke-width="8" fill="none"/></g>'+tag(800,520,'1 كيلوغرام = 1000 غرام','#fff',27)
];return a[i]
}
if(id==='states'){
const a=[
'<g transform="translate(430 230)"><rect x="0" y="40" width="100" height="100" rx="12" fill="#b8e8fa" stroke="#effbff" stroke-width="7"/>'+glass(170,0,115,200,'#3fbee9',.55)+'<g fill="#b6d9f2"><circle cx="390" cy="50" r="9"/><circle cx="430" cy="90" r="8"/><circle cx="475" cy="35" r="9"/><circle cx="450" cy="145" r="7"/><circle cx="390" cy="160" r="8"/></g></g>'+tag(480,490,'صلبة','#d2efff',25)+tag(700,490,'سائلة','#7ee5ff',25)+tag(900,490,'غازية','#d4c4ff',25),
'<g transform="translate(570 250)"><rect x="0" y="50" width="150" height="120" rx="15" fill="#8edcf9" stroke="#dff7ff" stroke-width="7"/><path d="M0 190q75 25 150 0" stroke="#e3f7ff" stroke-width="7"/><path d="M75 30v-80m-20 20 20-20 20 20" stroke="#ffb45b" stroke-width="10" fill="none" class="dash"/><g class="float"><path d="M240 175q-35-55 0-95 35 40 0 95Z" fill="#b5eaff"/></g></g>'+tag(800,500,'اكتساب الحرارة يسبب الانصهار','#fff',25),
'<g transform="translate(620 300)"><path d="M-100 75h200" stroke="#8bcded" stroke-width="18" stroke-linecap="round"/><path d="M-20 45q-30-45 0-75m40 75q-30-45 0-75" stroke="#e0f8ff" stroke-width="8" fill="none" class="float"/><path d="M150-100q-40 45 0 90" stroke="#72d8f7" stroke-width="8" fill="none" class="dash"/><path d="M110-35l40 25 20-40" stroke="#72d8f7" stroke-width="8" fill="none"/></g>'+tag(800,500,'تبخر ثم تكاثف عند التبريد','#fff',26),
'<g><circle cx="760" cy="150" r="45" fill="#ffd166"/><path d="M360 410q110-130 220 0t220 0" fill="none" stroke="#58c8e9" stroke-width="28"/><path d="M430 250q55-55 110 0 60-50 120 0" stroke="#ecf7ff" stroke-width="22" fill="none" stroke-linecap="round"/><path d="M630 285v70m-15-17 15 17 15-17" stroke="#a4e8fa" stroke-width="8" fill="none" class="dash"/>'+drop(500,340,16)+'</g>'+tag(800,545,'تحولات مستمرة في دورة الماء','#fff',26)
];return a[i]
}
if(id==='magnet'){
const a=[
'<g transform="translate(650 330)"><path d="M-120-100v140a120 120 0 0 0 240 0v-140" fill="none" stroke="#e35a5a" stroke-width="38" stroke-linecap="round"/><path d="M-120-100v45m240-45v45" stroke="#fff" stroke-width="42" stroke-linecap="butt"/><g fill="#d5dbe0"><path d="M-210-40l30-20 26 18-18 27Z"/><path d="M160 70l30-20 26 18-18 27Z"/><path d="M-35 150l30-20 26 18-18 27Z"/></g></g>'+tag(800,535,'يجذب الحديد وبعض المعادن','#fff',26),
'<g transform="translate(650 320)"><rect x="-180" y="-65" width="125" height="130" rx="12" fill="#db5555"/><rect x="55" y="-65" width="125" height="130" rx="12" fill="#4f8de3"/><text x="-118" y="17" text-anchor="middle" fill="#fff" font-size="40" font-weight="900">N</text><text x="118" y="17" text-anchor="middle" fill="#fff" font-size="40" font-weight="900">S</text><path d="M-55 0h110m-30-25 30 25-30 25" stroke="#ffd166" stroke-width="9" fill="none"/></g>'+tag(800,500,'الأقطاب المختلفة تتجاذب','#fff',26),
'<g transform="translate(650 320)"><rect x="-180" y="-65" width="125" height="130" rx="12" fill="#db5555"/><rect x="55" y="-65" width="125" height="130" rx="12" fill="#db5555"/><text x="-118" y="17" text-anchor="middle" fill="#fff" font-size="40" font-weight="900">N</text><text x="118" y="17" text-anchor="middle" fill="#fff" font-size="40" font-weight="900">N</text><path d="M-40-30 0-60 40-30M-40 30 0 60 40 30" stroke="#ffcc78" stroke-width="8" fill="none"/></g>'+tag(800,500,'الأقطاب المتشابهة تتنافر','#fff',26),
'<g transform="translate(660 325)"><rect x="-115" y="-55" width="230" height="110" rx="16" fill="#db5858" stroke="#ffd0d0" stroke-width="7"/><path d="M-100-20q-180-170-280 0m380 0q180-170 280 0M-100 20q-180 170-280 0m380 0q180 170 280 0" fill="none" stroke="#ffca81" stroke-width="6" class="dash"/><circle cx="-115" cy="0" r="8" fill="#fff"/><circle cx="115" cy="0" r="8" fill="#fff"/></g>'+tag(800,535,'خطوط المجال تمثل شكل المجال','#fff',26)
];return a[i]
}
if(id==='circuit'){
const a=[
'<g transform="translate(630 310)"><rect x="-245" y="-65" width="110" height="160" rx="16" fill="#d95d5d" stroke="#ffd2d2" stroke-width="7"/><rect x="-215" y="-90" width="50" height="25" fill="#e5e7eb"/><path d="M-135 15h95m80 0h95v120h-270v-40" fill="none" stroke="#f0c878" stroke-width="10"/><circle cx="0" cy="15" r="44" fill="#e9e2a9" stroke="#fff8d5" stroke-width="8"/><path d="M-15 40v30h30V40" fill="#a2a6a8" stroke="#fff" stroke-width="5"/></g>'+tag(800,520,'بطارية وأسلاك ومصباح','#fff',26),
'<g transform="translate(640 320)"><path d="M-200 0h115m90 0h195v140h-400V0" fill="none" stroke="#f0c878" stroke-width="10"/><circle cx="0" cy="0" r="43" fill="#7b858e" stroke="#dce7eb" stroke-width="8"/><path d="M-80 0l30-34" stroke="#ffd166" stroke-width="12" stroke-linecap="round"/><path d="M-65-50l45 45" stroke="#ff9a62" stroke-width="8" stroke-dasharray="8 10"/></g>'+tag(800,520,'المفتاح مفتوح: الدارة مقطوعة','#fff',25),
'<g transform="translate(640 320)"><path d="M-200 0h400v140h-400V0" fill="none" stroke="#f0c878" stroke-width="10" class="dash"/><circle cx="0" cy="0" r="48" fill="#ffe58b" stroke="#fff3c0" stroke-width="8" class="pulse"/><path d="M-15 35v35h30V35" fill="#a2a6a8" stroke="#fff" stroke-width="5"/><path d="M-200 0h-35v140h35" stroke="#f0c878" stroke-width="10"/></g>'+tag(800,520,'الدارة المغلقة تسمح بمرور التيار','#fff',25),
'<g transform="translate(650 320)"><rect x="-180" y="-55" width="120" height="105" rx="14" fill="#d95d5d"/><path d="M-60 0h120m0 0h120v130h-360V50h120" stroke="#f0c878" stroke-width="10" fill="none"/><path d="M0-55v-70m-25 35h50" stroke="#a9e6f5" stroke-width="9"/></g>'+tag(800,525,'بطاريات تعليمية فقط؛ لا تلمس كهرباء المنزل','#fff',23)
];return a[i]
}
if(id==='current_effects'){
const a=[
'<g transform="translate(680 325)"><path d="M0-100v55m-40 80v55h80V35" stroke="#b8c7ce" stroke-width="12" fill="none"/><path d="M-80-45h160l-35 88H-45Z" fill="#ffd166" stroke="#fff0bd" stroke-width="8"/><path d="M0-125v-45m-50 30-25-35m125 35 25-35" stroke="#ffd166" stroke-width="9"/></g>'+tag(800,520,'تأثير ضوئي: المصباح يضيء','#fff',27),
'<g transform="translate(680 330)"><rect x="-100" y="-80" width="200" height="160" rx="28" fill="#4c3d36" stroke="#e6c7a9" stroke-width="8"/><path d="M-50-10q50-90 100 0m-100 0q50 90 100 0" stroke="#ffb35f" stroke-width="13" fill="none"/><path d="M-145 0h45m200 0h45" stroke="#ffd166" stroke-width="8" class="pulse"/></g>'+tag(800,520,'تأثير حراري: تتحول الطاقة إلى حرارة','#fff',25),
'<g transform="translate(680 325)"><circle cx="0" cy="0" r="45" fill="#d8e8ef" stroke="#fff" stroke-width="8"/><path d="M0-45v-75m45 120h80m-125 0h-80" stroke="#e1edf2" stroke-width="8"/><g class="spin"><path d="M0-120q85-15 70 35-15 35-70 5m0 160q-85 15-70-35 15-35 70-5m120-40q15 85-35 70-35-15-5-70" fill="#75c8e8" stroke="#e7faff" stroke-width="6"/></g></g>'+tag(800,520,'تأثير حركي: المحرك يدير المروحة','#fff',26),
'<g transform="translate(680 325)"><path d="M-155-70q0-60 65-60t65 60v150h-130Z" fill="none" stroke="#d7e6ec" stroke-width="13"/><path d="M-165 75q-15 65 35 65h90q50 0 35-65" stroke="#d7e6ec" stroke-width="13" fill="none"/><path d="M-90-120q90-70 180 0v160q-90 70-180 0Z" fill="none" stroke="#ff9b68" stroke-width="14" class="dash"/><path d="M-15-40h120" stroke="#ffca75" stroke-width="9" class="pulse"/></g>'+tag(800,535,'تأثير مغناطيسي: مجال حول التيار','#fff',25)
];return a[i]
}
if(id==='intensity'){
const a=[
'<g transform="translate(680 325)"><path d="M-220-70h440v180h-440Z" fill="none" stroke="#f0c878" stroke-width="10"/><rect x="-210" y="-58" width="70" height="145" rx="10" fill="#d95d5d"/><path d="M-140 0h320" stroke="#a4e9ff" stroke-width="8" stroke-dasharray="12 14"/><g fill="#b8ecff"><circle cx="-80" cy="0" r="10"/><circle cx="0" cy="0" r="10"/><circle cx="80" cy="0" r="10"/></g></g>'+tag(800,520,'التيار في دارة مغلقة','#fff',27),
'<g transform="translate(675 320)"><rect x="-205" y="-75" width="75" height="150" rx="12" fill="#d95d5d"/><path d="M-130 0h85" stroke="#f0c878" stroke-width="10"/><circle cx="0" cy="0" r="65" fill="#e7f4f8" stroke="#d3e7ef" stroke-width="8"/><path d="M-42 25a50 50 0 0 1 84 0" fill="none" stroke="#526a79" stroke-width="7"/><path d="M0 0l34-32" stroke="#e77f4c" stroke-width="8"/><path d="M65 0h165v-110" fill="none" stroke="#f0c878" stroke-width="10"/></g>'+tag(810,520,'الأمبيرمتر يوصل على التوالي','#fff',25),
'<g transform="translate(680 325)"><circle cx="0" cy="0" r="116" fill="#edf6fa" stroke="#d5e8ef" stroke-width="9"/><path d="M-80 55a98 98 0 0 1 160 0" fill="none" stroke="#506b7a" stroke-width="8"/>'+Array.from({length:6},(_,n)=>'<path d="M'+(-70+n*28)+' '+(40-Math.abs(2.5-n)*12)+'l-6-17" stroke="#506b7a" stroke-width="5"/>').join('')+'<path d="M0 0l56-55" stroke="#e67843" stroke-width="9" stroke-linecap="round"/><circle r="13" fill="#334e60"/><text x="0" y="95" text-anchor="middle" fill="#355166" font-size="28" font-weight="900">A</text></g>'+tag(800,535,'نقرأ شدة التيار بوحدة الأمبير A','#fff',25),
'<g transform="translate(680 325)"><rect x="-230" y="-85" width="170" height="170" rx="18" fill="#fff" opacity=".1" stroke="#dceefa" stroke-width="6"/><rect x="60" y="-85" width="170" height="170" rx="18" fill="#fff" opacity=".1" stroke="#dceefa" stroke-width="6"/><circle cx="-145" cy="-5" r="37" fill="#ffe38d" class="pulse"/><circle cx="145" cy="-5" r="53" fill="#ffe38d" class="pulse"/><text x="-145" y="65" text-anchor="middle" fill="#fff" font-size="25">0.2 A</text><text x="145" y="65" text-anchor="middle" fill="#fff" font-size="25">0.5 A</text></g>'+tag(800,535,'نقارن القياسات في دارات تعليمية','#fff',25)
];return a[i]
}
return ''
}
function frame(p,i){return base(p,sceneArt(p,i))}
function stop(){if(timer){clearInterval(timer);timer=null}}
function resetLibrary(){stop();const cards=lessons.map((p,i)=>'<article class="academy-project-card"><div class="project-preview"><div class="film-thumb" style="background:linear-gradient(135deg,#182432,#2d3e49)"><div class="film-mini">'+frame(p,0)+'</div><span>▶</span><small>'+p.area+'</small></div><span>#'+(i+1)+'</span></div><div class="project-card-body"><small>'+p.area+' · الدرس '+(i+1)+'</small><h3>'+esc(p.title)+'</h3><p>'+esc(p.story)+' · 4 مشاهد متحركة</p><button data-film="'+p.id+'">ابدأ القصة ▶</button></div></article>').join('');
main.innerHTML='<div class="academy-intro projects-intro"><div><span class="academy-kicker">استوديو القصص العلمية المتحركة</span><h2>نتعلّم بالمشاهدة والحكاية</h2><p>كل درس له شخصياته وأدواته ومشاهده المصممة لفكرته، من البداية إلى الخلاصة.</p></div><div class="academy-project-total"><b>14</b><small>قصة دراسية</small></div></div><div class="academy-project-filters"><input id="filmSearch" type="search" placeholder="ابحث باسم الدرس أو الموضوع..."><select id="filmTopic"><option value="all">كل المحاور</option>'+[...new Set(lessons.map(p=>p.area))].map(t=>'<option value="'+esc(t)+'">'+esc(t)+'</option>').join('')+'</select><span id="filmCount">14 قصة</span></div><div class="academy-project-grid" id="filmGrid">'+cards+'</div>';
function bind(){main.querySelectorAll('[data-film]').forEach(b=>b.onclick=()=>watch(lessons.find(p=>p.id===b.dataset.film)))}
function filter(){const q=$('filmSearch').value.toLocaleLowerCase().trim(),area=$('filmTopic').value,items=lessons.filter(p=>(area==='all'||p.area===area)&&(p.title+' '+p.story+' '+p.area).toLocaleLowerCase().includes(q));$('filmCount').textContent=items.length+' قصة';$('filmGrid').innerHTML=items.length?items.map((p)=>'<article class="academy-project-card"><div class="project-preview"><div class="film-thumb" style="background:linear-gradient(135deg,#182432,#2d3e49)"><div class="film-mini">'+frame(p,0)+'</div><span>▶</span><small>'+p.area+'</small></div><span>#'+(lessons.indexOf(p)+1)+'</span></div><div class="project-card-body"><small>'+p.area+' · الدرس '+(lessons.indexOf(p)+1)+'</small><h3>'+esc(p.title)+'</h3><p>'+esc(p.story)+' · 4 مشاهد متحركة</p><button data-film="'+p.id+'">ابدأ القصة ▶</button></div></article>').join(''):'<div class="academy-empty">لا توجد قصة بهذا الاسم.</div>';bind()}
bind();$('filmSearch').oninput=filter;$('filmTopic').onchange=filter;
}
function watch(p){stop();elapsed=0;const caps=scenes(p);main.innerHTML='<div class="animexa-player-head"><button class="academy-back" id="filmsBack">← كل القصص</button><div><b>'+esc(p.title)+'</b><small>'+esc(p.area)+' · '+esc(p.story)+'</small></div><button class="academy-project-link" id="filmToEditor">افتح المشهد في المحرر</button></div><div class="animexa-stage-wrap"><div class="animexa-stage" id="filmStage">'+frame(p,0)+'</div></div><div class="animexa-scene-info"><b id="filmTitle">'+caps[0][0]+'</b><p id="filmCaption">'+caps[0][1]+'</p></div><div class="animexa-controls"><button id="filmPlay" class="is-primary">▶ تشغيل القصة</button><button id="filmRestart">↺ من البداية</button><div class="animexa-time"><span id="filmTime">00:00</span><input id="filmSeek" type="range" min="0" max="40" step=".1" value="0"><span>00:40</span></div></div><div class="animexa-scene-dots">'+caps.map((s,i)=>'<button data-scene="'+i+'">'+(i+1)+' · '+s[0]+'</button>').join('')+'</div><p class="animexa-note">'+(p.id==='water_clean'?'تنبيه علمي: الترشيح يحجز العوالق، لكنه لا يزيل بالضرورة الأملاح الذائبة أو الجراثيم. لا تشرب ماء التجارب.':p.id==='circuit'||p.id==='intensity'?'تنبيه سلامة: الرسوم للتعلم فقط. لا تجرّب كهرباء المنزل أو الأسلاك المكشوفة؛ استخدم بطاريات تعليمية منخفضة الجهد بإشراف المعلم.':'رسوم متحركة تعليمية مبسطة؛ تُجرى التجارب العملية بإشراف المعلم وبأدوات آمنة.')+'</p>';
const play=$('filmPlay'),seek=$('filmSeek'),stage=$('filmStage');
function motionState(run,reset){if(reset)stage.innerHTML=frame(p,0);stage.classList.toggle('is-playing',run);const root=stage.querySelector('svg');if(root&&typeof root.pauseAnimations==='function'){if(run&&typeof root.unpauseAnimations==='function')root.unpauseAnimations();else if(!run)root.pauseAnimations()}}
motionState(false);
function draw(v){const i=Math.min(3,Math.floor(v/10));$('filmStage').innerHTML=frame(p,i);$('filmTitle').textContent=caps[i][0];$('filmCaption').textContent=caps[i][1];$('filmTime').textContent='00:'+String(Math.floor(v)).padStart(2,'0');seek.value=v;main.querySelectorAll('[data-scene]').forEach((b,j)=>b.classList.toggle('active',j===i))}
function pause(){if(timer){clearInterval(timer);timer=null}if(started)elapsed=Math.min(40,(Date.now()-started)/1000);started=0;play.textContent='▶ متابعة'}
function tick(){const v=(Date.now()-started)/1000;if(v>=40){draw(40);elapsed=40;stop();started=0;play.textContent='↺ إعادة التشغيل'}else{elapsed=v;draw(v)}}
function start(){if(elapsed>=40){elapsed=0;draw(0)}started=Date.now()-elapsed*1000;timer=setInterval(tick,100);play.textContent='Ⅱ إيقاف'}
play.onclick=()=>timer?pause():(elapsed>=40?(elapsed=0,draw(0),start()):start());
$('filmRestart').onclick=()=>{pause();elapsed=0;draw(0);play.textContent='▶ تشغيل القصة'};
seek.oninput=()=>{pause();elapsed=+seek.value;draw(elapsed)};
main.querySelectorAll('[data-scene]').forEach(b=>b.onclick=()=>{pause();elapsed=+b.dataset.scene*10;draw(elapsed)});
$('filmsBack').onclick=resetLibrary;
$('filmToEditor').onclick=()=>{pause();overlay.classList.remove('open');document.body.classList.remove('academy-open');window.dispatchEvent(new CustomEvent('animexa:load-template',{detail:{name:p.title+' · '+caps[Math.min(3,Math.floor(elapsed/10))][0],objects:[{id:'story-'+p.id,type:'svg',name:caps[Math.min(3,Math.floor(elapsed/10))][0],x:0,y:0,w:100,h:100,svgMarkup:frame(p,Math.min(3,Math.floor(elapsed/10))),rot:0,opacity:100}]}}))};
}

const filmScripts={
matter:'أشياء على الطاولة|الكأس جسم والزجاج مادته|نقارن الكتلة بالميزان|ينتفخ البالون بالهواء|الهواء يشغل حيزاً وله كتلة|جسيمات الصلب متقاربة|جسيمات السائل تتحرك وتنزلق|جسيمات الغاز تنتشر|أجسام من مواد مختلفة|المادة لها كتلة وحجم'.split('|'),
water_sources:'تسخّن الشمس ماء البحر|يتبخر الماء ويرتفع|يتكاثف البخار في السحب|تهطل قطرات المطر|تتجمع المياه في الأنهار|يتسرب الماء إلى باطن الأرض|تغذي المياه الجوفية الآبار|تمتص الجذور الماء|تصل المياه المعالجة إلى المنازل|نحافظ على الماء العذب'.split('|'),
water_clean:'نبدأ بماء عكر لا نعرف سلامته|نصب الماء في قمع الترشيح|يمر الماء عبر الحصى والرمل|تحتجز الطبقات العوالق|يتجمع ماء أوضح لكنه غير مضمون السلامة|نسخّن الماء ليتحول إلى بخار|يمر البخار في أنبوب بارد|يتكاثف في وعاء منفصل|تُعالج مياه الشرب وتُعقّم وتُراقب|نشرب من مصدر معتمد لا من ماء التجربة'.split('|'),
water_protect:'نهر نظيف في البداية|تصل النفايات والزيوت إلى الماء|ينتشر التلوث مع التيار|نوقف مصدر التلوث|تمر مياه الصرف بمحطة معالجة|تحجز المصافي الأجسام الكبيرة|تساعد مراحل الترسيب والمعالجة|تفحص جودة المياه قبل تصريفها|نغلق الصنبور ونصلح التسرب|الحماية تبدأ بمنع التلوث'.split('|'),
air_pressure:'الهواء داخل البالون يدفع جدرانه|الضغط يؤثر في جميع الاتجاهات|نملأ كأساً ونغطيه ببطاقة|نقلبه بحذر فوق حوض|الضغط الخارجي يساعد على إبقاء البطاقة|نقيس الضغط بالبارومتر|ينخفض الضغط عادة مع الارتفاع|تختلف القراءات مع الطقس|تستعمل المحطات البارومتر|الهواء يؤثر بضغط قابل للقياس'.split('|'),
air_mix:'الهواء خليط غير مرئي|نقسم مكونات الهواء الجاف|ثنائي الأزوت نحو 78 بالمئة|الأكسجين نحو 21 بالمئة|الغازات الأخرى قرابة 1 بالمئة|يدخل الأكسجين مع الشهيق|نخرج هواء الزفير|تستعمل النباتات ثاني أكسيد الكربون|جزيئات الغازات تتحرك باستمرار|هذه نسب تقريبية للهواء الجاف'.split('|'),
air_ozone:'تطلق المدينة ملوثات إلى الجو|تنتشر بعض الملوثات مع الهواء|تصل الأشعة فوق البنفسجية من الشمس|يوجد معظم الأوزون في الستراتوسفير|يمتص الأوزون جزءاً كبيراً من الأشعة|طبقة الأوزون ليست قبة صلبة|الحماية مهمة للكائنات الحية|نقل أنظف يقلل بعض الانبعاثات|نحد من المواد المستنزفة للأوزون|نحمي الهواء وطبقة الأوزون'.split('|'),
volume:'نجهز مخباراً مدرجاً|نسكب الماء وننتظر استقراره|نقرأ أسفل التقعر عند مستوى العين|نسجل الحجم الأول|نغمر حجراً غير منتظم|يرتفع الماء بسبب الإزاحة|فرق القراءتين حجم الحجر|نقيس أبعاد جسم منتظم|نحسب الطول ضرب العرض ضرب الارتفاع|المليلتر يساوي سنتيمتراً مكعباً'.split('|'),
mass:'نضع جسمين على كفتي الميزان|الكفة الأثقل تنخفض|نتأكد من تصفير الميزان|نضع الجسم المجهول|نضيف كتلًا معيارية|تتوازن الكفتان|نستعمل الميزان الإلكتروني|نقرأ القيمة والوحدة|الكيلوغرام ألف غرام|الكتلة تقاس بالميزان'.split('|'),
states:'نلاحظ مكعب الثلج|نضيف الحرارة تدريجياً|ينصهر الثلج ويتحول إلى ماء|الجزيئات السائلة تنزلق|تغادر بعض الجزيئات سطح الماء|ينتشر بخار الماء|يتكاثف البخار على سطح بارد|يفقد الماء الحرارة فيتجمد|تتكرر التحولات في الطبيعة|لكل تحول اتجاه حراري'.split('|'),
magnet:'نقرب المغناطيس من مسامير حديدية|تتحرك المسامير وتنجذب|نقرب قطبين مختلفين|يتحرك المغناطيس ويلتصق|نقلب المغناطيس نصف دورة|تتقابل أقطاب متشابهة فتتنافر|برادة الحديد تكشف شكل المجال|تنحرف إبرة البوصلة|للمغناطيس استعمالات متعددة|المختلفان يتجاذبان والمتشابهان يتنافران'.split('|'),
circuit:'نجهز بطارية وأسلاكاً ومصباحاً|المفتاح مفتوح والمسار مقطوع|نغلق المفتاح|تكتمل الدارة ويمر التيار|يضيء المصباح|نفتح الدارة فينطفئ|نعيد غلق المفتاح|ندير محركاً صغيراً|نتتبع المسار الكهربائي|نستخدم بطاريات تعليمية آمنة'.split('|'),
current_effects:'نغلق دارة تعليمية|يضيء المصباح|يسخن عنصر مصمم للتسخين|نلاحظ تغير الحرارة|يدور المحرك الكهربائي|تتحرك شفرات المروحة|يمر التيار في ملف|ينشأ مجال مغناطيسي|يجذب المغناطيس الكهربائي مشبكاً|للتيار تأثيرات مختلفة'.split('|'),
intensity:'نكوّن دارة بسيطة|نحتاج إلى قياس الشدة|نجهز الأمبيرمتر|نوصله على التوالي|نختار مجال القياس|يمر التيار وتظهر القراءة|نغيّر الحمل|نقارن القراءات|نقرأ القيمة بوحدة الأمبير|لا نوصل الجهاز مباشرة بالبطارية'.split('|')
};
const chapterLength=10,totalLength=100;
function glassArt(x,y,w,h,level,color){
const wy=y+h*(1-level);
return '<g><path d="M'+x+' '+y+'h'+w+'l-9 '+h+'q-'+(w/2-8)+' 16 -'+(w-18)+' 0Z" fill="#e6faff16" stroke="#e8f8ff" stroke-width="7"/><path d="M'+(x+8)+' '+wy+'h'+(w-16)+'l-7 '+(y+h-wy-7)+'q-'+(w/2-8)+' 14 -'+(w-16)+' 0Z" class="liquidFill" fill="'+color+'" opacity=".8"/><path d="M'+(x+15)+' '+(y+12)+'v'+(h-35)+'" stroke="#fff" stroke-width="4" opacity=".4"/></g>';
}
function barMagnet(reverse){
return '<g><rect x="0" y="0" width="190" height="76" rx="8" fill="'+(reverse?'#277ac6':'#d84b50')+'" stroke="#ffe3e3" stroke-width="4"/><rect x="95" y="0" width="95" height="76" rx="7" fill="'+(reverse?'#d84b50':'#277ac6')+'"/><text x="47" y="49" text-anchor="middle" fill="#fff" font-size="38" font-weight="900">'+(reverse?'S':'N')+'</text><text x="142" y="49" text-anchor="middle" fill="#fff" font-size="38" font-weight="900">'+(reverse?'N':'S')+'</text></g>';
}
function experimentBody(p){
const kf='<style>.labFlow{stroke-dasharray:12 10;animation:flow 1s linear infinite}.labFloat{animation:float 2.8s ease-in-out infinite alternate}.labGlow{animation:glow 1s ease-in-out infinite alternate}.magB{animation:magcycle 12s ease-in-out infinite;transform-box:fill-box;transform-origin:center}.nails{animation:nailMove 3s ease-in-out infinite alternate}.sipCup{animation:sip 3s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}.beam{animation:beam 3s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:center}.spinFan{animation:spin 1.2s linear infinite;transform-box:fill-box;transform-origin:center}.particles{animation:particleMove 4s ease-in-out infinite alternate}.switchBlade{animation:switcho 10s ease-in-out infinite;transform-box:fill-box;transform-origin:left center}@keyframes flow{to{stroke-dashoffset:-44}}@keyframes float{to{transform:translateY(-24px)}}@keyframes glow{to{filter:drop-shadow(0 0 22px #ffe36a);opacity:1}}@keyframes magcycle{0%,8%{transform:translateX(0) rotate(0)}28%,37%{transform:translateX(-60px) rotate(0)}49%,57%{transform:translateX(-60px) rotate(180deg)}78%,88%{transform:translateX(145px) rotate(180deg)}100%{transform:translateX(0) rotate(0)}}@keyframes nailMove{to{transform:translate(-70px,-12px)}}@keyframes sip{to{transform:translate(-172px,-16px) rotate(-8deg)}}@keyframes beam{to{transform:rotate(10deg)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes particleMove{to{transform:translate(20px,-12px)}}@keyframes switcho{0%,32%{transform:rotate(-28deg)}45%,76%{transform:rotate(0)}100%{transform:rotate(-28deg)}}@keyframes bulbCycle{0%,40%,84%,100%{opacity:.04}48%,75%{opacity:.95}}@keyframes currentCycle{0%,38%,85%,100%{opacity:0}46%,76%{opacity:1}}@keyframes pourJug{from{transform:rotate(0)}to{transform:rotate(32deg)}}@keyframes liquidLevel{0%,25%{transform:scaleY(.28)}80%,100%{transform:scaleY(1)}}.pourJug{animation:pourJug 2.6s ease-in-out infinite alternate;transform-box:fill-box;transform-origin:80% 85%}.lampHalo{animation:bulbCycle 10s ease-in-out infinite}.currentFlow{animation:currentCycle 10s ease-in-out infinite,flow 1s linear infinite}.liquidFill{transform-box:fill-box;transform-origin:center bottom;animation:liquidLevel 4s ease-in-out infinite alternate}</style>';
let s='';
switch(p.id){
case 'magnet':
s='<g transform="translate(360 300)">'+barMagnet(false)+'</g><g transform="translate(610 300)"><g class="magB">'+barMagnet(false)+'</g></g><g class="nails">'+Array.from({length:6},(_,i)=>'<g transform="translate('+(900+i*13)+' '+(260+i%3*34)+') rotate(-18)"><rect width="42" height="7" rx="3" fill="#cbd5e1" stroke="#fff" stroke-width="2"/></g>').join('')+'</g><rect x="860" y="440" width="125" height="42" rx="7" fill="#a9794e" stroke="#e6c69f" stroke-width="5"/>'+tag(755,535,'تنجذب المسامير الحديدية، ولا ينجذب الخشب والبلاستيك مثلها','#fff',23)+'<g fill="none" stroke="#f4d28b" stroke-width="4"><path d="M420 250q-90-115 40-150 130 35 40 150"/><path d="M420 420q-90 115 40 150 130-35 40-150"/></g>';
break;
case 'water_clean':
s='<g transform="translate(380 245)"><g class="pourJug"><path d="M0 25h150v175H0Z" fill="#9c744c" stroke="#e7f8ff" stroke-width="7"/><path d="M20 45h110v130H20Z" fill="#9f744c"/><g fill="#4b3a2a"><circle cx="42" cy="68" r="7"/><circle cx="81" cy="92" r="8"/><circle cx="55" cy="132" r="6"/><circle cx="105" cy="151" r="7"/></g><path d="M150 40h60v28h-60" fill="#9c744c" stroke="#e7f8ff" stroke-width="5"/></g></g><path d="M560 385q40 25 72 0l-10 90h-55Z" fill="#dff8ff1c" stroke="#e7f8ff" stroke-width="7"/><path d="M570 405h50" stroke="#b89a6a" stroke-width="14"/><path d="M560 382C610 365 615 337 655 330" fill="none" stroke="#4bc9e9" stroke-width="9" class="labFlow"/><path d="M580 455h30" stroke="#c9b184" stroke-width="14"/><path d="M590 475v70" stroke="#54c8e8" stroke-width="8" fill="none" class="labFlow"/><g transform="translate(655 175)"><path d="M0 0h210l-55 160H55Z" fill="#dff8ff10" stroke="#e8f8ff" stroke-width="8"/><path d="M20 45h170l-12 34H32Z" fill="#a6a18c"/><path d="M34 85h142l-15 33H49Z" fill="#c4a87b"/><path d="M50 125h110l-8 30H58Z" fill="#89979b"/></g>'+glassArt(875,410,100,135,.5,'#48c8e8')+'<path d="M910 350q-25 30 0 52" fill="none" stroke="#dff8ff" stroke-width="8" class="labFlow"/><g transform="translate(600 185)"><path d="M0 100h105v155H0Z" fill="#95714d" stroke="#efdbbb" stroke-width="6"/><path d="M12 130h80v100H12Z" fill="#38bfe5"/><path d="M28 125q-22-48 0-80m35 80q-22-48 0-80" fill="none" stroke="#e2f7ff" stroke-width="6" class="labFloat"/><path d="M105 150h145q50 0 50 55t-50 55h-40" fill="none" stroke="#cbeef8" stroke-width="15"/><path d="M118 150h130q33 0 33 55t-33 55" fill="none" stroke="#63cce9" stroke-width="6" class="labFlow"/></g><g class="sipCup">'+glassArt(350,380,75,125,.65,'#42c8e9')+'</g>'+tag(800,590,'الترشيح ثم التقطير ثم المعالجة والتعقيم','#fff',23);
break;
case 'circuit':
s='<g transform="translate(670 315)"><rect x="-240" y="-50" width="80" height="110" rx="10" fill="#d84e53" stroke="#ffe0e0" stroke-width="6"/><path d="M-215-50v-24h30v24" fill="#e2e8ed"/><path d="M-160 0h110m80 0h180v145h-400V60" fill="none" stroke="#f0c875" stroke-width="10"/><path d="M-50 0 0-42" stroke="#f0c875" stroke-width="10" class="switchBlade"/><circle cx="0" cy="0" r="48" fill="#68757c" stroke="#eaf4f7" stroke-width="7"/><circle cx="0" cy="0" r="34" fill="#ffe58b" opacity=".0" class="lampHalo"/><path d="M-15 36v36h30V36" stroke="#dbe8ec" stroke-width="7" fill="none"/><g fill="#b9edff" class="currentFlow">'+Array.from({length:9},(_,i)=>'<circle cx="'+(-180+i*42)+'" cy="0" r="6"><animate attributeName="cy" values="0;145;0" dur="3s" repeatCount="indefinite"/></circle>').join('')+'</g><path d="M-160 0h340v145h-340" fill="none" stroke="#4fc9ed" stroke-width="4" stroke-dasharray="10 12" class="currentFlow"/></g>'+tag(800,535,'المصباح يضيء عند اكتمال الدارة فقط','#fff',25);
break;
case 'volume':
s='<g transform="translate(510 180)"><path d="M0 0h150v330H0Z" fill="#dff8ff12" stroke="#e8f8ff" stroke-width="8"/><path d="M12 210h126v110H12Z" fill="#45c9e9" opacity=".82"><animate attributeName="d" values="M12 210h126v110H12Z;M12 155h126v165H12Z;M12 210h126v110H12Z" dur="4s" repeatCount="indefinite"/></path><path d="M12 210q63 12 126 0" fill="none" stroke="#d7f8ff" stroke-width="5"><animate attributeName="d" values="M12 210q63 12 126 0;M12 155q63 12 126 0;M12 210q63 12 126 0" dur="4s" repeatCount="indefinite"/></path>'+Array.from({length:8},(_,i)=>'<path d="M0 '+(40+i*36)+'h'+(i%2?24:44)+'" stroke="#f5fbfd" stroke-width="4"/>').join('')+'<g transform="translate(210 15)"><path d="M0 0l85 28 0 85-65 0Z" fill="#a78259" stroke="#efd5b0" stroke-width="7"><animateTransform attributeName="transform" type="translate" values="0 -80;0 55;0 55" dur="3.5s" fill="freeze" repeatCount="indefinite"/></path></g><path d="M20 210h110" stroke="#fff" stroke-width="3" stroke-dasharray="8 7"/></g><g class="labFloat">'+tag(800,540,'الحجر يغمر الماء فيرتفع مستواه بمقدار حجمه','#fff',24)+'</g><path d="M750 240v250m-12-12 12 12 12-12" stroke="#ffcb75" stroke-width="7" fill="none"/>';
break;
case 'mass':
s='<g transform="translate(670 295)"><path class="beam" d="M-190 0H190" stroke="#e2edf2" stroke-width="13"/><path d="M0 0v155" stroke="#e2edf2" stroke-width="15"/><path d="M-175 0v95m350-95v95" stroke="#e2edf2" stroke-width="7"/><path d="M-245 95h140l-15 70h-110Zm350 0h140l-15 70H120Z" fill="#a9d3e5" stroke="#eef9fc" stroke-width="6"/><g class="labFloat"><rect x="-220" y="42" width="80" height="50" rx="6" fill="#b27b49"/></g><rect x="140" y="42" width="50" height="50" rx="5" fill="#e7b96c"/><rect x="150" y="15" width="30" height="27" rx="4" fill="#e7b96c"/></g>'+tag(800,535,'تنخفض كفة الجسم الأكبر كتلة ثم تتوازن بالكتل المعيارية','#fff',23);
break;
case 'states':
s='<g transform="translate(570 245)"><path d="M0 0 100-55 200 0v130L100 185 0 130Z" fill="#b8eafa" stroke="#effcff" stroke-width="7"/><path d="M0 0 100 55 200 0M100 55v130" fill="none" stroke="#effcff" stroke-width="5"/><path d="M30-70q-30-45 0-80m45 80q-30-45 0-80" stroke="#ffd17a" stroke-width="8" fill="none" class="labFloat"/><g fill="#9be7fa" class="particles">'+Array.from({length:15},(_,i)=>'<circle cx="'+(300+(i%5)*34)+'" cy="'+(25+Math.floor(i/5)*38)+'" r="7"><animate attributeName="cy" values="20;'+(i%2?150:-50)+';20" dur="'+(2.3+i%3)+'s" repeatCount="indefinite"/></circle>').join('')+'</g><path d="M300 175q-25-30 0-55 25 25 0 55" fill="#45c5e6" class="labFloat"/><path d="M365 -25q-28 35 0 65 28-30 0-65Z" fill="#d9f5ff"/></g>'+tag(800,530,'انصهار ثم تبخر ثم تكاثف وتجمد','#fff',25);
break;
case 'air_pressure':
s='<g transform="translate(650 280)"><path d="M0-135q-105-5-105 110t105 135q105-20 105-135T0-135Z" fill="#e98ca2" stroke="#ffdae3" stroke-width="8"/><path d="M0 108v64" stroke="#f3c8a9" stroke-width="8"/>'+Array.from({length:7},(_,i)=>'<path d="M'+(-155+i*48)+' -65v65m-12-15 12 15 12-15" stroke="#a8e6f9" stroke-width="6" fill="none" class="labFlow"/>').join('')+'</g><g transform="translate(890 280)"><path d="M-80-90h160l-10 165q-5 20-70 20t-70-20Z" fill="#dff8ff1c" stroke="#e5f8ff" stroke-width="7"/><path d="M-72-20h144v85q-70 20-144 0Z" fill="#4cc8e9"/><path d="M-90-95h180" stroke="#e7d2ad" stroke-width="12"/><path d="M-120 75v45m-12-13 12 13 12-13M120 75v45m-12-13 12 13 12-13" stroke="#a9e8f8" stroke-width="7" fill="none"/></g>'+tag(800,525,'البالون يتمدد والضغط يؤثر في الأجسام من حولنا','#fff',24);
break;
case 'air_mix':
s='<g transform="translate(700 300)"><rect x="-220" y="-60" width="440" height="120" rx="18" fill="#263e4e" stroke="#e3f5fb" stroke-width="7"/><rect x="-212" y="-52" width="344" height="104" rx="12" fill="#43b7db"/><rect x="132" y="-52" width="92" height="104" fill="#f6a54b"/><rect x="224" y="-52" width="4" height="104" fill="#b69ade"/><text x="-40" y="16" text-anchor="middle" fill="#12354a" font-size="44" font-weight="900">78%</text><text x="178" y="14" text-anchor="middle" fill="#4c2b0a" font-size="24" font-weight="900">21%</text></g><g transform="translate(660 445)"><path d="M0-60v75m0-40q-90-55-105 35 5 70 105 42 100 28 105-42Q90-115 0-25Z" fill="#dc8fa5" stroke="#ffe0e8" stroke-width="6"/><path d="M-150 0h45m-15-15 15 15-15 15m210-15h45m-15-15 15 15-15 15" fill="none" stroke="#b9efff" stroke-width="7" class="labFlow"/></g>'+tag(800,570,'الهواء الجاف: 78% أزوت و21% أكسجين ونحو 1% أخرى','#fff',23);
break;
case 'water_sources':
s='<circle cx="900" cy="105" r="50" fill="#ffd166"/><path d="M360 420 480 200 610 370 730 220 900 420" fill="#657986" stroke="#d1e2e9" stroke-width="8"/><path d="M330 425q170-42 340 0t340 0v115H330Z" fill="#218db5"/><g fill="#e9f6fb"><ellipse cx="620" cy="145" rx="65" ry="27"/><ellipse cx="690" cy="133" rx="70" ry="34"/><ellipse cx="755" cy="150" rx="55" ry="27"/></g><path d="M620 190v85m-12-15 12 15 12-15M680 190v85m-12-15 12 15 12-15" fill="none" stroke="#7fdcf4" stroke-width="7" class="labFlow"/><path d="M465 425v95m-12-15 12 15 12-15M510 425v95m-12-15 12 15 12-15" stroke="#78d8f2" stroke-width="6" fill="none" class="labFlow"/>'+tag(800,575,'تبخر · تكاثف · هطول · جريان · تسرب','#fff',25);
break;
case 'water_protect':
s='<path d="M360 425q160-48 320 0t320 0v120H360Z" fill="#2185a4"/><g fill="#9aa6ae" class="labFloat"><path d="M490 285l50 10-10 38-50-10Z"/><path d="M630 340h42v35h-42Z"/><path d="M770 250h48v38h-48Z"/></g><g transform="translate(640 205)"><rect x="0" y="0" width="320" height="190" rx="16" fill="#dff8ff12" stroke="#dff7ff" stroke-width="7"/><rect x="20" y="30" width="60" height="135" fill="#92764f"/><rect x="95" y="30" width="60" height="135" fill="#6a9ba2"/><rect x="170" y="30" width="60" height="135" fill="#4b9db9"/><rect x="245" y="30" width="55" height="135" fill="#3999bb"/><path d="M-70 92H0m320 0h80" stroke="#6cd9f3" stroke-width="10" class="labFlow"/></g>'+tag(800,545,'منع التلوث ثم معالجة المياه المستعملة','#fff',24);
break;
case 'air_ozone':
s='<g><rect x="400" y="350" width="400" height="130" fill="#5b6874"/><rect x="460" y="265" width="90" height="85" fill="#798690"/><rect x="610" y="225" width="100" height="125" fill="#697781"/><g fill="#9ba5ad" opacity=".8"><circle cx="550" cy="170" r="35"/><circle cx="600" cy="135" r="42"/><circle cx="655" cy="165" r="34"/></g></g><circle cx="900" cy="105" r="42" fill="#ffd166"/><path d="M850 165l-35 110m75-110-20 110m55-110-5 110" stroke="#f7d27a" stroke-width="7" class="labFlow"/><path d="M340 300q270-80 540 0" stroke="#67cda7" stroke-width="32" fill="none"/><path d="M340 334q270-80 540 0" stroke="#c3f8df" stroke-width="6" fill="none" stroke-dasharray="12 11"/>'+tag(800,540,'طبقة الستراتوسفير تمتص جزءاً كبيراً من UV','#fff',24);
break;
case 'mass':
s='<g transform="translate(660 300)" class="beam"><path d="M-190 0H190" stroke="#e2edf2" stroke-width="13"/><path d="M0 0v145" stroke="#e2edf2" stroke-width="14"/><path d="M-175 0v92m350-92v92" stroke="#e2edf2" stroke-width="7"/><path d="M-245 92h140l-15 70h-110Zm350 92h140l-15-70H120Z" fill="#a9d3e5" stroke="#eff9fc" stroke-width="6"/><rect x="-215" y="38" width="80" height="54" rx="5" fill="#b47f4f"/><rect x="142" y="38" width="52" height="28" fill="#e7ba70"/><rect x="150" y="12" width="36" height="26" fill="#e7ba70"/></g>'+tag(800,530,'تميل الكفة نحو الكتلة الأكبر حتى تتوازن الأثقال','#fff',24);
break;
case 'current_effects':
s='<g transform="translate(580 300)"><path d="M0-110v55" stroke="#e7edf0" stroke-width="12"/><path d="M-80-55h160l-25 75H-55Z" fill="#ffe27d" class="labGlow"/><path d="M0 20v65" stroke="#e7edf0" stroke-width="11"/></g><g transform="translate(830 300)"><rect x="-90" y="-60" width="180" height="120" rx="20" fill="#735a46" stroke="#efdbbc" stroke-width="7"/><path d="M-60 0q60-90 120 0t-120 0" stroke="#ffb75e" stroke-width="14" fill="none" class="labGlow"/></g><g transform="translate(700 485)"><circle r="18" fill="#e7edf0"/><g class="spinFan"><path d="M0-18q70-90 60-15-12 35-60 33m18 0q90 70 15 60-35-12-33-60m0-18q-70-90-60-15 12 35 60 33" fill="#7dd3ee" stroke="#e4faff" stroke-width="5"/></g></g><g transform="translate(950 390)"><rect x="-8" y="-55" width="16" height="110" rx="5" fill="#a77950" stroke="#e9d1b3" stroke-width="4"/><path d="M-28-55q-20 10 0 20t0 20 0 20 0 20 0 20m56-100q20 10 0 20t0 20 0 20 0 20 0 20" fill="none" stroke="#de745b" stroke-width="6"/><g fill="#d6e4eb"><circle cx="-35" cy="-2" r="7"/><circle cx="35" cy="-2" r="7"/></g></g>'+tag(800,565,'ضوئي · حراري · حركي · مغناطيسي','#fff',24);
break;
case 'intensity':
s='<g transform="translate(660 310)"><rect x="-210" y="-50" width="65" height="100" rx="10" fill="#d75258" stroke="#ffdddd" stroke-width="6"/><path d="M-145 0h60m125 0h170v130h-380V50" stroke="#efc978" stroke-width="9" fill="none"/><circle r="62" fill="#edf7fa" stroke="#9ebac6" stroke-width="8"/><path d="M-45 28a52 52 0 0 1 90 0" fill="none" stroke="#506979" stroke-width="6"/><path d="M0 0 39-35" stroke="#ed8352" stroke-width="8" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" values="0;10;0" dur="3s" repeatCount="indefinite"/></path><circle r="9" fill="#334d5b"/><text x="0" y="49" text-anchor="middle" fill="#334d5b" font-size="22" font-weight="900">A</text><g fill="#b7ecff">'+Array.from({length:5},(_,i)=>'<circle cx="'+(90+i*34)+'" cy="0" r="6"><animate attributeName="cy" values="0;12;0" dur="1.5s" repeatCount="indefinite"/></circle>').join('')+'</g></g>'+tag(810,535,'الأمبيرمتر على التوالي يقيس شدة التيار','#fff',25);
break;
default:
s='<g transform="translate(700 300)"><circle r="100" fill="'+p.color+'" opacity=".22"/><path d="M-130 0h260" stroke="'+p.color+'" stroke-width="12" class="labFlow"/>'+Array.from({length:12},(_,i)=>'<circle cx="'+(-80+i*14)+'" cy="'+(i%2?-38:38)+'" r="7" fill="'+p.color+'" class="labFloat"/>').join('')+'</g>';
}
return kf+s;
}
function frame(p,i){return base(p,experimentBody(p))}
function resetLibrary(){
stop();
const cards=lessons.map((p,i)=>'<article class="academy-project-card"><div class="project-preview"><div class="film-thumb" style="background:linear-gradient(135deg,#182432,#2d3e49)"><div class="film-mini">'+frame(p,0)+'</div><span>▶</span><small>'+p.area+'</small></div><span>#'+(i+1)+'</span></div><div class="project-card-body"><small>'+p.area+' · القصة '+(i+1)+'</small><h3>'+esc(p.title)+'</h3><p>'+esc(p.story)+' · فيلم متحرك كامل</p><button data-film="'+p.id+'">شاهد الفيلم ▶</button></div></article>').join('');
main.innerHTML='<div class="academy-intro projects-intro"><div><span class="academy-kicker">مختبر التجارب المتحركة</span><h2>شاهد التجربة وهي تحدث</h2><p>أفلام متتابعة بحركات للأجسام ونتائج تتبع أسبابها خطوة بخطوة.</p></div><div class="academy-project-total"><b>14</b><small>فيلماً تعليمياً</small></div></div><div class="academy-project-filters"><input id="filmSearch" type="search" placeholder="ابحث باسم الدرس أو التجربة..."><select id="filmTopic"><option value="all">كل المحاور</option>'+[...new Set(lessons.map(p=>p.area))].map(t=>'<option value="'+esc(t)+'">'+esc(t)+'</option>').join('')+'</select><span id="filmCount">14 فيلماً</span></div><div class="academy-project-grid" id="filmGrid">'+cards+'</div>';
function bind(){main.querySelectorAll('[data-film]').forEach(b=>b.onclick=()=>watch(lessons.find(p=>p.id===b.dataset.film)))}
function filter(){const q=$('filmSearch').value.toLocaleLowerCase().trim(),area=$('filmTopic').value,items=lessons.filter(p=>(area==='all'||p.area===area)&&(p.title+' '+p.story+' '+p.area).toLocaleLowerCase().includes(q));$('filmCount').textContent=items.length+' فيلماً';$('filmGrid').innerHTML=items.length?items.map(p=>'<article class="academy-project-card"><div class="project-preview"><div class="film-thumb" style="background:linear-gradient(135deg,#182432,#2d3e49)"><div class="film-mini">'+frame(p,0)+'</div><span>▶</span><small>'+p.area+'</small></div><span>#'+(lessons.indexOf(p)+1)+'</span></div><div class="project-card-body"><small>'+p.area+'</small><h3>'+esc(p.title)+'</h3><p>'+esc(p.story)+' · 10 فصول متحركة</p><button data-film="'+p.id+'">شاهد الفيلم ▶</button></div></article>').join(''):'<div class="academy-empty">لا توجد تجربة بهذا الاسم.</div>';bind()}
bind();$('filmSearch').oninput=filter;$('filmTopic').onchange=filter;
}
function watch(p){
stop();elapsed=0;let localStarted=0,current=-1;const caps=filmScripts[p.id]||filmScripts.matter;
main.innerHTML='<div class="animexa-player-head"><button class="academy-back" id="filmsBack">← كل الأفلام</button><div><b>'+esc(p.title)+'</b><small>'+esc(p.area)+' · فيلم متحرك 01:40</small></div><button class="academy-project-link" id="filmToEditor">افتح المشهد في المحرر</button></div><div class="animexa-stage-wrap"><div class="animexa-stage" id="filmStage">'+frame(p,0)+'</div></div><div class="animexa-scene-info"><b id="filmTitle">الفصل 1 · '+esc(caps[0])+'</b><p id="filmCaption">'+esc(p.story)+'</p></div><div class="animexa-controls"><button id="filmPlay" class="is-primary">▶ تشغيل الفيلم</button><button id="filmRestart">↺ إعادة</button><div class="animexa-time"><span id="filmTime">00:00</span><input id="filmSeek" type="range" min="0" max="100" step=".1" value="0"><span>01:40</span></div></div><div class="animexa-scene-dots">'+caps.map((s,i)=>'<button data-scene="'+i+'">'+(i+1)+' · '+esc(s)+'</button>').join('')+'</div><p class="animexa-note">'+(p.id==='water_clean'?'تنبيه: الترشيح لا يضمن إزالة الأملاح أو الجراثيم. لا تشرب ماء التجارب؛ مشهد الشرب هو من مصدر ماء معتمد بعد المعالجة والتعقيم والمراقبة.':p.id==='magnet'?'قلب المغناطيس يغيّر القطب المواجه؛ المختلفان يتجاذبان والمتشابهان يتنافران.':p.id==='circuit'||p.id==='current_effects'||p.id==='intensity'?'سلامة كهربائية: استعمل بطاريات تعليمية منخفضة الجهد فقط. لا تستخدم كهرباء المنزل ولا توصل الأمبيرمتر مباشرة بين قطبي البطارية.':p.id==='air_pressure'?'نفّذ تجربة البطاقة والكأس فوق حوض وبإشراف المعلم؛ يتطلب نجاحها إحكام البطاقة وظروفاً مناسبة.':'محاكاة تعليمية متحركة؛ نفّذ التجارب الواقعية بأدوات آمنة وبإشراف المعلم.')+'</p>';
const play=$('filmPlay'),seek=$('filmSeek');
function draw(v){
const n=Math.min(9,Math.floor(v/chapterLength));
if(n!==current){current=n;$('filmTitle').textContent='الفصل '+(n+1)+' · '+caps[n];$('filmCaption').textContent=caps[n];main.querySelectorAll('[data-scene]').forEach((b,j)=>b.classList.toggle('active',j===n))}
const mm=Math.floor(v/60),ss=Math.floor(v%60);$('filmTime').textContent=String(mm).padStart(2,'0')+':'+String(ss).padStart(2,'0');seek.value=v;
}
function pause(){if(timer){clearInterval(timer);timer=null}if(localStarted){elapsed=Math.min(totalLength,(Date.now()-localStarted)/1000);localStarted=0}motionState(false);play.textContent='▶ متابعة'}
function tick(){const v=(Date.now()-localStarted)/1000;if(v>=totalLength){draw(totalLength);elapsed=totalLength;stop();localStarted=0;motionState(false);play.textContent='↺ إعادة من البداية'}else{elapsed=v;draw(v)}}
function start(){if(elapsed>=totalLength){elapsed=0;draw(0)}localStarted=Date.now()-elapsed*1000;motionState(true);timer=setInterval(tick,100);play.textContent='Ⅱ إيقاف'}
play.onclick=()=>timer?pause():(elapsed>=totalLength?(elapsed=0,draw(0),start()):start());
$('filmRestart').onclick=()=>{pause();elapsed=0;motionState(false,true);draw(0);play.textContent='▶ تشغيل الفيلم'};
seek.oninput=()=>{pause();elapsed=+seek.value;draw(elapsed)};
main.querySelectorAll('[data-scene]').forEach(b=>b.onclick=()=>{pause();elapsed=+b.dataset.scene*chapterLength;draw(elapsed)});
$('filmsBack').onclick=resetLibrary;
$('filmToEditor').onclick=()=>{pause();overlay.classList.remove('open');document.body.classList.remove('academy-open');window.dispatchEvent(new CustomEvent('animexa:load-template',{detail:{name:p.title+' · '+caps[Math.min(9,Math.floor(elapsed/chapterLength))],objects:[{id:'story-'+p.id,type:'svg',name:p.title,x:0,y:0,w:100,h:100,svgMarkup:frame(p,Math.min(9,Math.floor(elapsed/chapterLength))),rot:0,opacity:100}]}}))};
}

function open(){overlay.classList.add('open');document.body.classList.add('academy-open');resetLibrary()}
$('openAcademyBtn').addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();open()},true);
$('closeAcademyBtn').addEventListener('click',stop,true);
overlay.addEventListener('click',e=>{if(e.target===overlay)stop()},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')stop()},true);
const brand=overlay.querySelector('.academy-brand');if(brand){brand.querySelector('strong').textContent='ANIMEXA · القصص المتحركة';brand.querySelector('small').textContent='مختبر العلوم بالمشاهد';}
const stats=overlay.querySelector('.academy-head-stats');if(stats)stats.innerHTML='<b>14</b> قصة متخصصة';
const tabs=overlay.querySelector('.academy-tabs');if(tabs)tabs.style.display='none';
})();