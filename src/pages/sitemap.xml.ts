import {url,bookingUrl,translatedPages,site,type Lang} from '../data/site';
export function GET(){
 const pairs=[...translatedPages.map(page=>({fr:url('fr',page),en:url('en',page)})),{fr:bookingUrl('fr'),en:bookingUrl('en')}];
 const entries=pairs.flatMap(pair=>(['fr','en'] as Lang[]).map(lang=>`<url><loc>${site.origin}${pair[lang]}</loc>${(['fr','en'] as Lang[]).map(l=>`<xhtml:link rel="alternate" hreflang="${l}" href="${site.origin}${pair[l]}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="${site.origin}${pair.fr}"/></url>`));
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join('')}<url><loc>${site.origin}/links/</loc></url></urlset>`,{headers:{'Content-Type':'application/xml'}});
}
