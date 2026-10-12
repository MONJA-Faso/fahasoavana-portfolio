import { useRef, useState, type FormEvent } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const sending = useRef(false);
  const [error, setError] = useState('');
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const configured = Boolean(service && template && publicKey);
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    if (!configured) return;
    const data = new FormData(form);
    const values = Object.fromEntries(['name', 'email', 'subject', 'message'].map(key => [key, String(data.get(key) ?? '').trim()]));
    if (Object.values(values).some(value => !value)) { setError('Merci de compléter tous les champs.'); setStatus('error'); return; }
    sending.current = true; setStatus('sending'); setError('');
    try { await emailjs.send(service, template, values, publicKey); form.reset(); setStatus('success'); }
    catch { setError('Le message n’a pas pu être envoyé. Réessaie ou contacte-moi directement par email.'); setStatus('error'); }
    finally { sending.current = false; }
  }
  return <section id="contact" className="section contact-section"><div className="container contact-grid"><div><div className="eyebrow">05 / CONTACT</div><h2>Un projet à partager ?<br /><span>Parlons-en.</span></h2><p>Un projet, une collaboration ou une opportunité : je serai heureux d’échanger avec vous.</p><a className="contact-email" href="mailto:fahasoavanamonja891@gmail.com">fahasoavanamonja891@gmail.com <ArrowUpRight size={20} /></a><div className="contact-details"><a href="tel:+261347099370">+261 34 70 993 70</a><span>Fianarantsoa, Madagascar</span><a href="https://wa.me/261347099370">Échanger sur WhatsApp <ArrowUpRight size={14} /></a></div></div>
    {configured ? <form onSubmit={handleSubmit} className="contact-form" aria-busy={status === 'sending'}><div className="form-pair"><div><label htmlFor="contact-name">Ton nom</label><input id="contact-name" name="name" autoComplete="name" required maxLength={120} placeholder="Nom complet" /></div><div><label htmlFor="contact-email">Ton email</label><input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} placeholder="toi@exemple.com" /></div></div><label htmlFor="contact-subject">Le sujet</label><input id="contact-subject" name="subject" required maxLength={200} placeholder="Ce que nous pourrions construire ensemble" /><label htmlFor="contact-message">Ton message</label><textarea id="contact-message" name="message" required rows={5} maxLength={5000} placeholder="Parle-moi de ton projet…" /><button className="button primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}<Send size={17} /></button><p role="status" aria-live="polite" className={status === 'error' ? 'form-status error' : 'form-status'}>{status === 'success' ? 'Merci ! Ton message a bien été envoyé.' : error}</p></form> : <div className="contact-invitation"><span className="eyebrow">LE DÉBUT D’UNE CONVERSATION</span><h3>Les belles réalisations commencent par un échange.</h3><p>Écris-moi directement pour discuter de tes idées et de ce que nous pouvons construire.</p><a href="mailto:fahasoavanamonja891@gmail.com" className="button primary">Écrire un email <ArrowUpRight size={18} /></a></div>}
  </div></section>;
}
