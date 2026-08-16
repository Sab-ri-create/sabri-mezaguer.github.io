const brands=[
{name:'SIGNAL',year:'2026 · Present',image:'assets/images/brands/signal.jpg',project:'signal',kpis:['13.4K followers','Authentic community','Engaging content','Positive impact']},
{name:'BIONNEX',year:'2026 · Present',image:'assets/images/brands/bionnex.jpg',project:'bionnex',kpis:['60+ content managed','Coherent feed','Engaged community','Strong brand image']},
{name:'CLEAR MEN',year:'2026 · Present',image:'assets/images/brands/clear.jpg',project:'clear',kpis:['100K+ followers','#1 worldwide ranking','Millions of impressions']},
{name:"FESTIVAL DES SPORTS D'ALGER",year:'2026',image:'assets/images/brands/festival.jpg',project:'festival',kpis:['150 content posted in 3 days','High engagement']},
{name:'CHEEZY',year:'2025 · 3 months',image:'assets/images/brands/cheezy.jpg',project:'cheezy',kpis:['120+ content pieces','High community engagement','Strong brand loyalty']},
{name:'LG',year:'2025 · 3 months',image:'assets/images/brands/lg.jpg',project:'lg',kpis:['100+ content managed','High engagement','15+ UGC profiles managed']},
{name:'IFRI',year:'2024 · 3 months',image:'assets/images/brands/ifri.jpg',project:'ifri',kpis:['20+ influencers collaborated with','60+ content managed','Millions of views']},
{name:'FACTEUR X',year:'Present',image:'assets/images/brands/facteur-x.jpg',project:'facteur-x',kpis:['End-to-end management','Content & communication','Campaign execution']}];
const projects = [
    {
        name: "SIGNAL",
        logo: "assets/images/brands/logo-signal.png",
        year: "2026 · Present",
        kpis: [
            "13.4K Followers",
            "Authentic Community",
            "Engaging Content"
        ]
    },

    {
        name: "BIONNEX",
        logo: "assets/images/brands/logo-bionnex.png",
        year: "2026 · Present",
        kpis: [
            "60+ Content managed",
            "Coherent Feed",
            "Strong Brand image"
        ]
    },

    {
        name: "CLEAR MEN",
        logo: "assets/images/brands/logo-clear.png",
        year: "2026 · Present",
        kpis: [
            "100K+ Followers",
            "#1 Worldwide ranking",
            "Millions Impressions"
        ]
    },

    {
        name: "FESTIVAL DES SPORTS D'ALGER",
        logo: "assets/images/brands/logo-festival.png",
        year: "2026",
        kpis: [
            "150 Content pieces",
            "3 Days",
            "Event Activation"
        ]
    },

    {
        name: "CHEEZY",
        logo: "assets/images/brands/logo-cheezy.png",
        year: "2025 · 3 months",
        kpis: [
            "+120 Content pieces",
            "High Community engagement",
            "Strong Brand loyalty"
        ]
    },

    {
        name: "LG",
        logo: "assets/images/brands/logo-lg.png",
        year: "2025 · 3 months",
        kpis: [
            "100+ Content managed",
            "High Engagement",
            "15+ UGC profiles"
        ]
    },

    {
        name: "IFRI",
        logo: "assets/images/brands/logo-ifri.png",
        year: "2024 · 3 months",
        kpis: [
            "20+ Influencers",
            "60+ Content managed",
            "Millions of views"
        ]
    },

    {
        name: "FACTEUR X",
        logo: "assets/images/brands/logo-facteur-x.png",
        year: "Present",
        kpis: [
            "Brand Strategy",
            "Digital Communication",
            "Content Direction"
        ]
    }
];
const backstage=[['clear-01.jpg','CLEAR · Behind the scenes'],['bionnex-01.jpg','BIONNEX · Production'],['clear-02.jpg','CLEAR · Production'],['festival-01.jpg','FESTIVAL · Live'],['bionnex-02.jpg','BIONNEX · Behind the scenes'],['clear-03.jpg','CLEAR · Production'],['bionnex-03.jpg','BIONNEX · Production']];
const header=document.querySelector('.site-header'),menu=document.querySelector('.menu-toggle');menu.addEventListener('click',()=>{const open=header.classList.toggle('menu-open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('menu-open');menu.setAttribute('aria-expanded','false')}));
const track=document.querySelector('.brand-track'),prev=document.querySelector('.prev'),next=document.querySelector('.next'),progress=document.querySelector('.progress-bar');let index=0;
function visible(){return innerWidth<=650?1:innerWidth<=1000?2:3}
function renderBrands(){track.innerHTML=brands.map((b,i)=>`<article class="brand-card" data-project="${b.project}" tabindex="0" role="button"><img src="${b.image}" alt="${b.name}" onerror="this.style.display='none';this.parentElement.insertAdjacentHTML('afterbegin','<div class="brand-placeholder">${b.name}</div>')"><div class="brand-meta"><h3>${b.name}</h3><div class="brand-kpis">${b.kpis.map(k=>`<span>${k}</span>`).join('')}</div></div></article>`).join('')}
function update(){const cards=[...track.children],count=visible();if(!cards.length)return;const max=Math.max(0,brands.length-count);index=Math.max(0,Math.min(index,max));const gap=22,w=cards[0].getBoundingClientRect().width;track.style.transform=`translateX(-${index*(w+gap)}px)`;progress.style.width=`${Math.min(100,Math.max(20,((index+count)/brands.length)*100))}%`;prev.disabled=index===0;next.disabled=index===max}
prev.addEventListener('click',()=>{index--;update()});next.addEventListener('click',()=>{index++;update()});track.addEventListener('click',e=>{const c=e.target.closest('.brand-card');if(c)document.getElementById(c.dataset.project)?.scrollIntoView({behavior:'smooth'})});track.addEventListener('keydown',e=>{if(['Enter',' '].includes(e.key)){const c=e.target.closest('.brand-card');if(c){e.preventDefault();document.getElementById(c.dataset.project)?.scrollIntoView({behavior:'smooth'})}}});renderBrands();addEventListener('resize',update);addEventListener('load',update);
const list=document.getElementById('project-list');list.innerHTML=projects.map((p,i)=>`<article class="project" id="${p[0]}"><div class="project-number">${String(i+1).padStart(2,'0')}</div><div><div class="project-top"><h3 class="project-name">${p[1]}</h3><div class="project-date">${p[2]}</div></div><div class="project-image"><img src="assets/images/projects/${p[0]}.jpg" alt="${p[1]}" onerror="this.style.display='none';this.parentElement.classList.add('is-placeholder');this.parentElement.innerHTML+='<span>${p[1]}</span>'"></div><h4 class="project-title">${p[3]}</h4><p class="project-description">${p[4]}</p><div class="project-bottom">${[...p[5],...p[6]].map(x=>`<span>${x}</span>`).join('')}</div></div></article>`).join('');
const marquee=document.getElementById('marqueeTrack');marquee.innerHTML=[...backstage,...backstage].map(x=>`<figure class="backstage-item"><img src="assets/images/backstage/${x[0]}" alt="${x[1]}" onerror="this.style.display='none'"><figcaption class="backstage-label">${x[1]}</figcaption></figure>`).join('');
