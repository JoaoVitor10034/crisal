const C = DATA.company, $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;" }[c]));
const ico = n => `<svg aria-hidden="true"><use href="#${n}"/></svg>`;
const utm = [...new URLSearchParams(location.search)].filter(([k]) => k.startsWith("utm_")).map(([k, v]) => k + "=" + v).join("&");
const track = (event, p) => { try { (window.dataLayer = window.dataLayer || []).push({ event, utm, ...p }); } catch (_) {} };
const waUrl = t => "https://wa.me/" + C.wa + "?text=" + encodeURIComponent(t || C.msg);

/* Renderização a partir dos dados */
$("pre").textContent = C.msg;
$("navlist").innerHTML = DATA.nav.map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("") + `<li><a class="btn wa" data-wa="header" href="#">Falar no WhatsApp</a></li>`;
$("flinks").innerHTML = DATA.nav.map(n => `<li><a href="${n[1]}">${n[0]}</a></li>`).join("");
$("trust").innerHTML = DATA.trust.map(t => `<div><i class="dot"></i>${esc(t)}</div>`).join("");
$("services").innerHTML = DATA.services.map(s => `<article class="card rv"><div class="ico">${ico(s.icon)}</div>${s.placeholder ? '<span class="tag">Placeholder: substituir</span>' : ""}<h3>${esc(s.title)}</h3><p>${esc(s.desc)}</p><a class="cl" href="#" data-wa="services" data-t="${esc(s.title)}">Consultar pelo WhatsApp</a></article>`).join("");
$("benefits").innerHTML = DATA.benefits.map(b => `<article class="card rv"><div class="ico">${ico(b.icon)}</div><h3>${esc(b.title)}</h3><p>${esc(b.text)}</p></article>`).join("");
$("tests").innerHTML = DATA.testimonials.length
  ? DATA.testimonials.map(t => `<figure class="card rv" style="margin:0"><blockquote style="margin:0 0 12px">${esc(t.text)}</blockquote><figcaption>${esc(t.name)}${t.source ? " - " + esc(t.source) : ""}</figcaption></figure>`).join("")
  : `<div class="empty rv">As avaliações reais e autorizadas dos clientes serão exibidas aqui.</div>`;
$("faqlist").innerHTML = DATA.faq.map((f, i) => `<div class="it"><h3><button type="button" id="fq${i}" aria-expanded="false" aria-controls="fp${i}">${esc(f.q)}</button></h3><div class="pn" id="fp${i}" role="region" aria-labelledby="fq${i}"><div><p>${f.placeholder ? "[Placeholder] " + esc(f.a) + ": resposta a ser confirmada pela Crisal." : esc(f.a)}</p></div></div></div>`).join("");
$("addr").textContent = C.address; $("faddr").textContent = C.address;
$("tel").textContent = C.phone; $("tel").href = $("call").href = $("call2").href = "tel:+" + C.wa;
const mapQ = encodeURIComponent("Crisal, " + C.address);
$("route").href = "https://www.google.com/maps/search/?api=1&query=" + mapQ;
$("yr").textContent = new Date().getFullYear();

/* Cliques (WhatsApp, telefone, mapa) */
document.addEventListener("click", e => {
  const a = e.target.closest("[data-wa]");
  if (a) {
    e.preventDefault();
    const t = a.dataset.t;
    track(t ? "service_card_click" : "whatsapp_click_" + a.dataset.wa, t ? { service: t } : {});
    window.open(waUrl(t ? `Olá! Vim pelo site da Crisal e quero saber mais sobre ${t}.` : null), "_blank", "noopener");
  }
  if (e.target.closest("#call,#call2")) track("phone_click");
  if (e.target.closest("#route")) track("map_click");
});

/* Header ao rolar */
const hd = document.querySelector("header.top");
const onScroll = () => hd.classList.toggle("scrolled", scrollY > 10);
addEventListener("scroll", onScroll, { passive: true }); onScroll();

/* Menu mobile */
const burger = document.querySelector(".burger"), menu = $("menu");
const setMenu = o => { burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Fechar menu" : "Abrir menu"); menu.classList.toggle("open", o); };
burger.addEventListener("click", () => setMenu(burger.getAttribute("aria-expanded") !== "true"));
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });

/* FAQ */
$("faqlist").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  const open = b.getAttribute("aria-expanded") === "true";
  b.setAttribute("aria-expanded", !open);
  $(b.getAttribute("aria-controls")).classList.toggle("open", !open);
});

/* Mapa sob demanda */
$("loadmap").addEventListener("click", () => { $("map").innerHTML = `<iframe title="Mapa da Crisal" loading="lazy" src="https://www.google.com/maps?q=${mapQ}&output=embed"></iframe>`; });

/* Link ativo no menu */
const links = [...document.querySelectorAll("#navlist a:not(.btn)")];
if ("IntersectionObserver" in window) {
  const so = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) links.forEach(l => l.classList.toggle("on", l.getAttribute("href") === "#" + x.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  DATA.nav.forEach(n => { const s = document.querySelector(n[1]); if (s) so.observe(s); });
}

/* Entrada suave */
const rv = document.querySelectorAll(".rv");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); } }), { threshold: .12 });
  rv.forEach(el => io.observe(el));
} else rv.forEach(el => el.classList.add("in"));

/* Scroll 50% / 90% */
const sc = { 50: 0, 90: 0 };
addEventListener("scroll", () => { const p = (scrollY + innerHeight) / document.documentElement.scrollHeight * 100; [50, 90].forEach(n => { if (!sc[n] && p >= n) { sc[n] = 1; track("scroll_" + n); } }); }, { passive: true });
