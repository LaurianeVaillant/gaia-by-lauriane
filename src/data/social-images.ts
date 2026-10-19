import type {Lang,Page} from './site';

const images = {
  home: {fr:'home-fr-v1.jpg',en:'home-en-v1.jpg'},
  acupuncture: {fr:'acupuncture-fr-v1.jpg',en:'acupuncture-en-v1.jpg'},
  aculift: {fr:'aculift-v1.jpg',en:'aculift-v1.jpg'},
  pranic: {fr:'pranic-healing-v1.jpg',en:'pranic-healing-v1.jpg'},
  women: {fr:'womens-health-fr-v1.jpg',en:'womens-health-en-v1.jpg'},
  about: {fr:'about-fr-v1.jpg',en:'about-en-v1.jpg'},
  booking: {fr:'booking-fr-v1.jpg',en:'booking-en-v1.jpg'},
  links: {fr:'links-v1.jpg',en:'links-v1.jpg'},
} as const;

const alt = {
  home: {fr:'GAIA by Lauriane — Se reconnecter à ce qui a toujours été là.',en:'GAIA by Lauriane — Reconnect with what has always been there.'},
  acupuncture: {fr:'GAIA by Lauriane — Acupuncture traditionnelle.',en:'GAIA by Lauriane — Traditional Acupuncture.'},
  aculift: {fr:'GAIA by Lauriane — Aculift.',en:'GAIA by Lauriane — Aculift.'},
  pranic: {fr:'GAIA by Lauriane — Pranic Healing.',en:'GAIA by Lauriane — Pranic Healing.'},
  women: {fr:'GAIA by Lauriane — Santé féminine.',en:'GAIA by Lauriane — Women’s Health.'},
  about: {fr:'Lauriane — À propos — GAIA by Lauriane.',en:'Lauriane — About — GAIA by Lauriane.'},
  booking: {fr:'GAIA by Lauriane — Prendre rendez-vous.',en:'GAIA by Lauriane — Book an appointment.'},
  links: {fr:'GAIA by Lauriane — Reconnexion · Acupuncture · Énergie · Féminin.',en:'GAIA by Lauriane — Reconnexion · Acupuncture · Énergie · Féminin.'},
} as const;

export function socialImage(lang:Lang,page:Page,booking=false) {
  const key=booking?'booking':page;
  if (!(key in images)) throw new Error(`Missing social image for ${page}`);
  const kind=key as keyof typeof images;
  return {path:`/images/og/${images[kind][lang]}`,alt:alt[kind][lang]};
}
