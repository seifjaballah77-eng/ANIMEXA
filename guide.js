(()=>{'use strict';
const $=id=>document.getElementById(id);
const overlay=$('guideOverlay');if(!overlay)return;
const steps=[
{title:'ابدأ بمشروع جديد',icon:'＋',target:'newBtn',desc:'اضغط «جديد» لفتح لوحة عمل فارغة. اكتب اسم مشروعك إذا ظهر حقل الاسم، ثم ابدأ بناء المشهد.',tip:'يمكنك الرجوع إلى الدليل في أي وقت من زر «دليل الاستخدام».',action:()=>{}},
{title:'اختر رسوماتك',icon:'▦',target:'libraryPane',desc:'من مكتبة العناصر ابحث عن شخصية أو جسم أو شكل. اضغط على العنصر لإضافته إلى اللوحة، أو اسحبه إذا كان السحب متاحاً.',tip:'اكتب كلمة مثل: شمس، ماء، مغناطيس، شجرة أو سيارة في خانة البحث.',action:()=>document.querySelector('[data-tab="library"]')?.click()},
{title:'رتّب المشهد',icon:'✥',target:'board',desc:'اسحب العنصر داخل اللوحة لتغيير مكانه. حدده لتظهر خصائصه، ثم غيّر اللون والحجم والدوران والنص من لوحة الخصائص.',tip:'ابدأ بثلاثة عناصر فقط: خلفية، شخصية، وشيء تشرح به الدرس.',action:()=>{}},
{title:'عدّل الخصائص والطبقات',icon:'⚙',target:'propertiesPane',desc:'عند تحديد عنصر ستظهر خصائصه. يمكنك نسخ العنصر أو تغيير لونه وشفافيته ومقاسه. استخدم الطبقات لترتيب العناصر عند الحاجة.',tip:'في الواجهة المبسطة نخفي الخيارات المتقدمة حتى تركز على أساسيات التصميم.',action:()=>{}},
{title:'حوّل المشهد إلى حركة',icon:'▶',target:'mode-switch',desc:'انتقل إلى «Animations · التحريك» لإضافة إطارات مفتاحية وتشغيل الحركة. حرّك مؤشر الزمن وحدد العنصر ثم أضف إطاراً مفتاحياً في الموضع الذي تريده.',tip:'جرّب حركة بسيطة أولاً: ضع العنصر في البداية، ثم غيّر مكانه عند ثانية لاحقة وأضف إطاراً مفتاحياً.',action:()=>document.querySelector('[data-mode="animations"]')?.click()},
{title:'احفظ وصدّر عملك',icon:'⇩',target:'saveBtn',desc:'اضغط «حفظ المشروع» للاحتفاظ بعملك على هذا الجهاز. وبعد الانتهاء صدّر الرسوم المتحركة أو احفظ فيديو إذا كان متاحاً في متصفحك.',tip:'احفظ باستمرار. ولإنشاء درس كامل، كرر بناء المشاهد ثم اجمعها في مشروعك التعليمي.',action:()=>{}}
];
let index=0,lastFocus=null;
function clearFocus(){document.querySelectorAll('.guide-focus').forEach(e=>e.classList.remove('guide-focus'))}
function render(){const s=steps[index];$('guideTitle').textContent='لنصنع أول مشهد معاً';$('guideCount').textContent='الخطوة '+(index+1)+' من '+steps.length;$('guideStepTitle').textContent=s.title;$('guideDescription').textContent=s.desc;$('guideTip').textContent=s.tip;$('guideIcon').textContent=s.icon;$('guideProgress').style.width=((index+1)/steps.length*100)+'%';$('guidePrevBtn').disabled=index===0;$('guideNextBtn').textContent=index===steps.length-1?'إنهاء الدليل':'التالي';clearFocus();s.action();const el=$(s.target)||document.querySelector('.'+s.target);if(el){el.classList.add('guide-focus');if(index!==0)el.scrollIntoView({block:'nearest',behavior:'smooth'})}}
function open(){index=0;overlay.classList.add('open');document.body.classList.add('guide-open');render()}
function close(){overlay.classList.remove('open');document.body.classList.remove('guide-open');clearFocus()}
$('openGuideBtn')?.addEventListener('click',open);$('closeGuideBtn')?.addEventListener('click',close);$('guidePrevBtn')?.addEventListener('click',()=>{if(index>0){index--;render()}});$('guideNextBtn')?.addEventListener('click',()=>{if(index<steps.length-1){index++;render()}else close()});overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&overlay.classList.contains('open'))close()});
const easy=$('easyModeBtn');function setEasy(v){document.body.classList.toggle('easy-mode',v);easy?.classList.toggle('active',v);if(easy)easy.textContent=v?'الواجهة الكاملة':'واجهة مبسطة';try{localStorage.setItem('animexa-easy-mode',v?'1':'0')}catch{}}
let saved=false;try{saved=localStorage.getItem('animexa-easy-mode')==='1'}catch{}setEasy(saved);easy?.addEventListener('click',()=>setEasy(!document.body.classList.contains('easy-mode')));
if(!sessionStorage.getItem('animexa-guide-seen')){sessionStorage.setItem('animexa-guide-seen','1');setTimeout(open,700)}
})();