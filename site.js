/* Shared header, footer and calendar data for every page of the MOA prototype.
   One menu, one set of hours, one events list: change it here and every page agrees. */

const LIVE = "https://moaonline.org";

/* ---------- The calendar: the single source for dates ---------- */
const EVENTS = [
  {start:"2026-10-02", end:"2026-10-02", title:"Laughs on the Lawn: Brandt Tobler", kind:"Comedy night · Marjorie Park", park:true, img:"2026/09/1-1-600x400.png", url:LIVE+"/lol/"},
  {start:"2026-10-03", end:"2026-10-03", title:"Laughs on the Lawn: Dr. Kevin Fitzgerald", kind:"Comedy night · Marjorie Park", park:true, img:"2026/09/1-1-600x400.png", url:LIVE+"/lol/"},
  {start:"2026-10-10", end:"2026-10-10", title:"80's Costume Party with 6 Million Dollar Band", kind:"Marjorie Park LIVE! · Doors 6pm, music 7 to 9pm", park:true, blurb:"Colorado's premier 80s dance band. Leg warmers strongly encouraged.", img:"2026/09/image-600x400.jpeg", url:LIVE+"/6mdb/", cta:"Get tickets"},
  {start:"2026-10-23", end:"2026-10-23", title:"Immersive Movie Night: Alice in Wonderland", kind:"Family friendly · Marjorie Park", park:true, blurb:"Croquet, curiosities, the Mad Hatter and Tim Burton's Alice under the stars. Costumes encouraged.", img:"2026/09/Immersive-Movie-Night-600x400.png", url:"event-wonderland.html", cta:"Get tickets"},
  {start:"2026-08-14", end:"2026-10-23", title:"VIEWFINDERS: A Colorado Photography Exhibition", kind:"Exhibition · Madden Gallery · Free", blurb:"More than 100 works by historic and contemporary Colorado photographers.", img:"2026/07/Viewfinders-Postcard-1-600x400.jpg", url:LIVE+"/viewfinders/", cta:"Register free"},
  {start:null, end:null, title:"Cabinet of Curiosities and Impossibilities", kind:"Ongoing · By guided tour", blurb:"Lonnie Hanzon's permanent installation at Marjorie Park.", img:"2020/09/CabPressPics-04.26.24-137-600x400.jpg", url:"visit.html#tours", cta:"Book a tour"}
];
/* Marjorie Park opens 10am to 4pm to everyone on these SCFD Free Days */
const FREE_DAYS = ["2026-05-20","2026-06-03","2026-06-10","2026-07-15","2026-07-29","2026-08-05","2026-08-19","2026-08-26","2026-09-09","2026-09-30","2026-10-07","2026-10-28","2026-11-18"];

const IMG = p => p.startsWith("http") ? p : LIVE+"/wp-content/uploads/"+p;
const TODAY = (()=>{const t=new Date(); t.setHours(0,0,0,0); return t})();
const toDate = s => { const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d); };
const fmt = (x,o) => x.toLocaleDateString("en-US",o);
const short = x => fmt(x,{weekday:"short",month:"short",day:"numeric"});

function dateLabel(e){
  if(!e.start) return "Ongoing";
  const s=toDate(e.start), en=toDate(e.end);
  if(+s===+en) return short(s);
  if(s<=TODAY) return "Now through "+fmt(en,{month:"short",day:"numeric"});
  return fmt(s,{month:"short",day:"numeric"})+" to "+fmt(en,{month:"short",day:"numeric"});
}
/* Upcoming dated events first, then running shows, then ongoing. Past events never appear. */
function liveEvents(){
  return EVENTS.filter(e=>!e.end || toDate(e.end)>=TODAY)
    .map(e=>({...e, rank: !e.start ? 2 : toDate(e.start)<=TODAY ? 1 : 0}))
    .sort((a,b)=>a.rank-b.rank || (a.start&&b.start ? toDate(a.start)-toDate(b.start) : 0));
}

/* ---------- Live status for each place ---------- */
function maddenStatus(){
  const now=new Date(), day=now.getDay(), h=now.getHours()+now.getMinutes()/60;
  const openDay=day>=2&&day<=5;
  if(openDay&&h>=10&&h<16) return {cls:"s-open", text:"Open now until 4pm"};
  const n=new Date(now); do{n.setDate(n.getDate()+1)}while(!(n.getDay()>=2&&n.getDay()<=5));
  return {cls:"s-closed", text:"Closed · opens "+((openDay&&h<10)?"today":fmt(n,{weekday:"long"}))+" at 10am"};
}
function parkNext(){
  const now=new Date(), h=now.getHours()+now.getMinutes()/60;
  const opts=[];
  FREE_DAYS.map(toDate).filter(d=>d>=TODAY).forEach(d=>opts.push({date:d, what:"SCFD Free Day, 10am to 4pm, free", url:"visit.html#free-days", free:true}));
  EVENTS.filter(e=>e.park&&e.start&&toDate(e.start)>=TODAY).forEach(e=>opts.push({date:toDate(e.start), what:e.title, url:e.url}));
  opts.sort((a,b)=>a.date-b.date);
  const next=opts[0];
  if(!next) return {cls:"s-event", text:"Open for tours and events", next:null};
  if(+next.date===+TODAY && next.free && h>=10 && h<16) return {cls:"s-open", text:"Open now · Free Day until 4pm", next};
  return {cls:"s-event", text:(+next.date===+TODAY?"Open tonight":"Next open "+short(next.date)), next};
}

/* ---------- Header and footer ---------- */
const NAV = [
  ["visit","Visit",[
    ["visit.html","Plan your visit","Hours, directions, what's open today"],
    ["visit.html#marjorie-park","Marjorie Park","Sculpture garden, open for events, tours and Free Days"],
    ["visit.html#madden-gallery","Madden Gallery","Free, Tuesday to Friday, 10 to 4"],
    ["visit.html#tours","Book a tour","Guided and self-guided"],
    [LIVE+"/venue-rentals/","Rent a venue","Marjorie Park, Madden Gallery, the Cabinet"],
    ["visit.html#faq","FAQs",""]]],
  ["on","What's On",[
    ["index.html#whats-on","Events and tickets","Concerts, comedy, movie nights"],
    [LIVE+"/viewfinders/","Exhibitions now","Indoor and outdoor shows on view"],
    [LIVE+"/category/past-exhibitions/","Past exhibitions",""]]],
  ["art","The Art",[
    ["collection.html","Explore the collection","Search by place, filter to open 24/7"],
    ["collection.html?place=englewood","Englewood","Free, open 24/7"],
    ["collection.html?place=marjorie","Marjorie Park","Including the Alice in Wonderland bronzes"],
    [LIVE+"/cabinet-of-curiosities-and-impossibilities/","Cabinet of Curiosities","By guided tour"],
    [LIVE+"/virtual/","Virtual art experiences",""]]],
  ["programs","Programs",[
    [LIVE+"/design-and-build/","Design and Build","National student competition and summer internship"],
    [LIVE+"/artists-in-residence/","Artists in Residence",""],
    [LIVE+"/film/","Film",""],
    [LIVE+"/pop-up-art/","Pop-up Art",""]]],
  ["join","Join and Give",[
    [LIVE+"/membership/","Become a member","Free tours, member events"],
    [LIVE+"/donate/","Donate",""],
    [LIVE+"/volunteer-employment/","Volunteer and jobs",""],
    [LIVE+"/sponsorship/","Sponsor",""],
    [LIVE+"/vendor-opportunities/","Vendors",""]]]
];
const LOGO = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><symbol id="logo" viewBox="0 0 133 41"><g fill="none" fill-rule="evenodd"><path d="M119.784 32.97h-17.55l-.099-.167 8.75-16.765h.266l8.74 16.749-.107.183zM111.336.119h-.626L89.834 40.114l.233.399h41.872l.256-.436L111.335.119z" fill="#A75B2D"/><path d="M66.975 32.807c-7.07 0-12.806-5.604-12.806-12.515 0-6.913 5.736-12.519 12.806-12.519 7.072 0 12.807 5.606 12.807 12.518 0 6.912-5.735 12.516-12.807 12.516M66.977 0c-11.465 0-20.76 9.084-20.76 20.289 0 11.208 9.295 20.294 20.76 20.294 11.466 0 20.76-9.088 20.76-20.294 0-11.205-9.294-20.29-20.76-20.289" fill="#435E62"/><path fill="#B29A36" d="M14.607 38.996h9.689V1.004h-9.689zM38.497 1.005h-9.243v37.992h9.117l.496-.481V1.366zM9.656 1.005H.33L0 1.33v37.223l.453.444h9.203z"/></g></symbol></svg>';

(function chrome(){
  const here=document.body.dataset.section||"";
  /* Two homepage options for MOA to compare: A = original, B = Met-style */
  const home=document.body.dataset.home||"";
  const tix=home==="b"?"index-met.html#on-view":"index.html#whats-on";
  const opt=(k,href,label)=>k===home?`<b style="background:#fff;color:#2E4245;padding:5px 12px;border-radius:999px">${label}</b>`:`<a href="${href}" style="color:#fff;padding:5px 12px;border-radius:999px;border:1px solid rgba(255,255,255,.5);text-decoration:none">${label}</a>`;
  const homeSwitch=home?`<div style="background:#A75B2D;color:#fff;font-size:14px;display:flex;justify-content:center;align-items:center;gap:10px;flex-wrap:wrap;padding:8px 16px">Two homepage options:${opt("a","index.html","A. Original")}${opt("b","index-met.html","B. Met-style")}</div>`:"";
  const menus=NAV.map(([key,label,links])=>`<div class="${key===here?"here":""}"><button aria-expanded="false">${label}</button><div class="drop">${
    links.map(([href,t,s])=>`<a href="${href}"><b>${t}</b>${s?`<small>${s}</small>`:""}</a>`).join("")}</div></div>`).join("");
  document.body.insertAdjacentHTML("afterbegin", LOGO+`<div style="background:#2E4245;color:#E4ECEC;font-size:13px;text-align:center;padding:6px 16px">Draft redesign for MOA review. This is not the live website.</div>${homeSwitch}<a class="skip" href="#content">Skip to content</a>
  <header class="site"><div class="wrap bar">
    <a class="brand" href="index.html" aria-label="Museum of Outdoor Arts, home"><svg viewBox="0 0 133 41"><use href="#logo"/></svg><span>Museum of<br>Outdoor Arts</span></a>
    <nav class="main" aria-label="Main">${menus}</nav>
    <a class="cta" href="${tix}">Get tickets</a>
    <button class="burger" aria-label="Open menu" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="#22292A" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
  </div><div class="drawer" id="drawer">${
    NAV.map(([k,label,links])=>`<details><summary>${label}</summary>${links.map(([h,t])=>`<a href="${h}">${t}</a>`).join("")}</details>`).join("")
  }<a class="cta" href="${tix}">Get tickets</a></div></header>`);

  document.body.insertAdjacentHTML("beforeend", `<footer><div class="wrap"><div class="fgrid">
    <div><svg viewBox="0 0 133 41" width="110" style="filter:brightness(1.6)"><use href="#logo"/></svg>
      <p style="margin:16px 0 4px">6363 S. Fiddler's Green Circle, Suite 110<br>Greenwood Village, CO 80111</p>
      <a href="tel:+13038060444" style="display:inline">303-806-0444</a> · <a href="mailto:info@moaonline.org" style="display:inline">info@moaonline.org</a>
      <form class="news" onsubmit="event.preventDefault();this.querySelector('button').textContent='Thank you';"><input type="email" placeholder="Your email for MOA news" aria-label="Email address"><button>Sign up</button></form></div>
    <div><h4>Visit</h4><a href="visit.html#marjorie-park">Marjorie Park</a><a href="visit.html#madden-gallery">Madden Gallery</a><a href="visit.html#tours">Tours</a><a href="${LIVE}/venue-rentals/">Venue rentals</a><a href="visit.html#faq">FAQs</a></div>
    <div><h4>The Art</h4><a href="collection.html?place=englewood">Englewood</a><a href="collection.html?place=greenwood">Greenwood Village</a><a href="collection.html">Full collection</a><a href="${LIVE}/category/past-exhibitions/">Past exhibitions</a></div>
    <div><h4>About</h4><a href="${LIVE}/mission-history/">Mission and history</a><a href="${LIVE}/staff-board/">Staff and board</a><a href="${LIVE}/element-house-2/">Element House</a><a href="${LIVE}/fiddlers-green/">Fiddler's Green Amphitheatre</a><a href="${LIVE}/press-and-media-kits/">Press</a></div>
    <div><h4>Connect</h4><a href="https://www.instagram.com/outdoorarts/">Instagram</a><a href="${LIVE}/contact/">Contact</a><a href="${LIVE}/volunteer-employment/">Jobs</a><a href="${LIVE}/vendor-opportunities/">Vendors</a></div>
  </div><div class="fine"><span>&copy; Museum of Outdoor Arts, founded 1981 by John W. Madden Jr., Marjorie P. Madden and Cynthia Madden Leitner. 5280 Top of the Town 2023, Best Place to See Art.</span>
  <span class="funders"><img src="${LIVE}/wp-content/uploads/2020/10/SCFD-logo.svg" alt="SCFD"><img src="${LIVE}/wp-content/uploads/2022/11/CCI4Web-2022-reverse-White-03.svg" alt="Colorado Creative Industries"></span></div></div></footer>`);

  document.querySelectorAll("nav.main>div").forEach(item=>{
    const b=item.querySelector("button");
    b.addEventListener("click",ev=>{ev.stopPropagation();const o=item.classList.contains("open");
      document.querySelectorAll("nav.main>div").forEach(x=>{x.classList.remove("open");x.querySelector("button").setAttribute("aria-expanded","false")});
      if(!o){item.classList.add("open");b.setAttribute("aria-expanded","true")}});
  });
  document.addEventListener("click",()=>document.querySelectorAll("nav.main>div").forEach(x=>x.classList.remove("open")));
  const drawer=document.getElementById("drawer"), burger=document.querySelector(".burger");
  burger.addEventListener("click",()=>{const o=drawer.classList.toggle("open");burger.setAttribute("aria-expanded",o)});
  drawer.addEventListener("click",e=>{if(e.target.tagName==="A")drawer.classList.remove("open")});
})();

/* Single-file version: each page runs inside one frame of MOA-Website-Draft.html.
   Links between pages ask the outer file to swap pages; outside links open a new tab. */
if(window.MOA_BUNDLE){
  document.addEventListener("click",e=>{
    const a=e.target.closest("a"); if(!a) return;
    const href=a.getAttribute("href")||"";
    if(/^[a-z-]+\.html/.test(href)){ e.preventDefault(); parent.postMessage({moaNav:href},"*"); }
    else if(/^https?:|^mailto:|^tel:/.test(href)){ a.target="_blank"; a.rel="noopener"; }
  },true);
  if(window.MOA_HASH) setTimeout(()=>{const t=document.querySelector(window.MOA_HASH); if(t) window.scrollTo({top:t.getBoundingClientRect().top+scrollY-90, behavior:"instant"});},80);
}
