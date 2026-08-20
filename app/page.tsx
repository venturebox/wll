'use client'

import { useMemo, useState } from 'react'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, MoveRight, Plus, X } from 'lucide-react'

const projects = [
  { title: 'Mieszkanie 37', type: 'Drzwi loftowe', year: '2024', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Studio po godzinach', type: 'Ścianki szklane', year: '2024', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Dom, ale bardziej', type: 'Balustrady', year: '2023', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Praga w świetle', type: 'Drzwi loftowe', year: '2023', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85' },
]

const faqs = [
  ['Ile to kosztuje?', 'Zaczynamy od krótkiego briefu i zdjęć miejsca. Potem wysyłamy konkretną wycenę, bez wróżenia z fusów.'],
  ['Czy trzeba mieć gotowy projekt?', 'Nie. Możesz przyjść z moodboardem, screenem z Pinteresta albo tylko z myślą: chcę więcej światła. Resztę ogarniemy razem.'],
  ['Jak długo czekam?', 'Zwykle 4–6 tygodni od pomiaru do montażu. Jeśli masz deadline, powiedz nam od razu — lubimy wyzwania.'],
  ['Gdzie działacie?', 'Mińsk Mazowiecki, Warszawa i okolice, ale dobre pomysły dowozimy dalej. Napisz, gdzie jesteś.'],
]

function Kicker({ children }: { children: React.ReactNode }) {
  return <span className="kicker"><i />{children}</span>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('Wszystkie')
  const [faq, setFaq] = useState<number | null>(null)
  const [sent, setSent] = useState(false)
  const filters = ['Wszystkie', 'Drzwi loftowe', 'Ścianki szklane', 'Balustrady']
  const visible = useMemo(() => filter === 'Wszystkie' ? projects : projects.filter((p) => p.type === filter), [filter])
  const go = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  return <main className="site-shell">
    <nav className="nav-wrap" aria-label="Główna nawigacja">
      <a className="brand" href="#top" onClick={() => go('top')}><b>WeLoveLoft</b></a>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <button onClick={() => go('vibe')}>O co chodzi</button><button onClick={() => go('faq')}>FAQ</button>
      </div>
      <button className="nav-cta" onClick={() => go('kontakt')}>Pogadajmy <ArrowRight data-icon="inline-end" /></button>
      <button className="menu-toggle" aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </nav>

    <section className="hero" id="top">
      <div className="hero-copy"><Kicker>STAL + SZKŁO / MIŃSK MAZOWIECKI / WARSZAWA</Kicker><h1><span style={{ color: '#A2CB8B' }}>Pastelowa</span><br /><em style={{ color: '#181619' }}>stal</em></h1><p>Tworzymy drzwi, ścianki, które odmieniają przestrzeń. Zdejmujemy ze stali ciężar, zostawiamy charakter.</p><div className="hero-actions"><button className="button button-acid" onClick={() => go('kontakt')}>Mam pomysł <ArrowDownRight data-icon="inline-end" /></button></div><span className="hero-sticker">MADE IN PL<br /><strong>100%</strong></span></div>
      <div className="hero-visual"><img src="/hero.png" alt="Jasne wnętrze z czarnymi drzwiami loftowymi" /></div>
    </section>

    <section className="ticker" aria-label="Najważniejsze informacje"><div>STAL + SZKŁO</div><div>MIŃSK MAZOWIECKI</div><div>WARSZAWA</div><div>WELOVELOFT</div></section>

    <section className="section intro" id="vibe"><div className="intro-title"><Kicker>JAK DZIAŁAMY</Kicker><h2>Nie musisz<br /><span>wybierać</span><br />między <em>ładnie</em><br />a praktycznie.</h2></div><div className="intro-copy"><p className="big-copy">Stal jest mocna. Szkło wpuszcza światło. Razem robią wnętrze, w którym chce się być.</p><div className="facts"><div><strong>01</strong><span>Najpierw słuchamy,<br />potem mierzymy.</span></div><div><strong>02</strong><span>Rysujemy rzeczy,<br />które da się zrobić.</span></div><div><strong>03</strong><span>Montujemy i znikamy<br />bez bałaganu.</span></div></div><button className="text-link" onClick={() => go('kontakt')}>Dobra, opowiem Wam <MoveRight data-icon="inline-end" /></button></div></section>

    {/* ukryta sekcja marquee-photo */}
    {/* <section className="marquee-photo"><div className="marquee-card"><span>YOUR SPACE</span><strong>MORE<br />LIGHT</strong><small>— by Linea</small></div><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88" alt="Nowoczesne wnętrze z przeszkloną ścianką" /></section> */}

    {/* ukryta sekcja RECENTLY DONE */}
    {/* <section className="section portfolio" id="realizacje"><div className="section-head"><div><Kicker>RECENTLY DONE</Kicker><h2>Rzeczy,<br /><em>które zrobiliśmy.</em></h2></div><p>Scrollujesz, zapisujesz, pokazujesz ekipie. A potem robimy coś tylko Twojego.</p></div><div className="filter-row" role="tablist">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div><div className="portfolio-grid">{visible.map((p, i) => <article className="project-card" key={p.title}><div className="project-image"><img src={p.image} alt={p.title} /><span>{String(i + 1).padStart(2, '0')}</span></div><div className="project-info"><div><h3>{p.title}</h3><p>{p.type} / {p.year}</p></div><ArrowRight className="project-arrow" /></div></article>)}</div></section> */}

    {/* ukryta sekcja NO GATEKEEPING */}
    {/* <section className="process-band"><div><Kicker>NO GATEKEEPING</Kicker><h2>Jak to<br /><em>działa?</em></h2><p>Zero tajemnej wiedzy. Cztery proste kroki i jesteś w domu.</p></div><div className="steps"><div><b>01</b><h3>Wrzucasz brief</h3><p>Zdjęcia, inspiracje, wymiary. Może być nawet voice note.</p></div><div><b>02</b><h3>My ogarniamy</h3><p>Pomiar, rysunki i propozycja, która ma sens.</p></div><div><b>03</b><h3>Robimy metal</h3><p>W polskim warsztacie, dokładnie i bez shortcutów.</p></div><div><b>04</b><h3>Wchodzimy z montażem</h3><p>Ty odbierasz klucze. My zabieramy kurz.</p></div></div></section> */}

    <section className="quote-section" id="kontakt"><div className="quote-copy"><Kicker>LET'S MAKE IT REAL</Kicker><h2>Masz przestrzeń?<br /><em>To już połowa.</em></h2><p>Napisz, co planujesz. Nie ocenimy nawet najbardziej odklejonego pomysłu.</p><div className="contact-details"><a href="mailto:wojtek@grupaADK.pl">wojtek@grupaADK.pl</a><a href="tel:+48111111111">+48 111 111 111</a></div></div><form className="quote-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="success-state"><div className="success-icon"><Check /></div><h3>Odebrane. Nice.</h3><p>Wrócimy z odpowiedzią i pierwszymi pytaniami. Stay tuned.</p><button type="button" className="text-link" onClick={() => setSent(false)}>Wyślij kolejne zapytanie</button></div> : <><label>IMIĘ<input required placeholder="Jak masz na imię?" /></label><label>MAIL<input required type="email" placeholder="hello@..." /></label><label>CO ROBIMY?<select defaultValue=""><option value="" disabled>Wybierz opcję</option><option>Drzwi loftowe</option><option>Ścianki szklane</option><option>Balustrady</option><option>Jeszcze nie wiem</option></select></label><label>OPIS PROJEKTU<textarea rows={4} placeholder="Metraż, miasto, vibe..." /></label><button className="button button-dark form-submit">Wyślij, lecimy <ArrowRight data-icon="inline-end" /></button><small>Bez spamu. Tylko konkrety.</small></>}</form></section>

    <section className="faq-section" id="faq"><div><Kicker>FAQ, BO PYTANIA SĄ OK</Kicker><h2>Nie ma<br /><em>głupich pytań.</em></h2></div><div className="faq-list">{faqs.map(([q, a], i) => <div className="faq-item" key={q}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{q}</span>{faq === i ? <X /> : <Plus />}</button>{faq === i && <p>{a}</p>}</div>)}</div></section>

    <footer className="footer"><div><a className="brand" href="#top"><b>WeLoveLoft</b></a></div><div className="footer-nav"><button onClick={() => go('vibe')}>O co chodzi</button><button onClick={() => go('kontakt')}>Kontakt</button></div><div className="footer-end"><a href="mailto:wojtek@grupaADK.pl">wojtek@grupaADK.pl</a></div><div className="footer-group-adk"><p>Jesteśmy częścią</p><a href="https://www.adkokna.pl" target="_blank" rel="noopener noreferrer"><img src="https://www.adkokna.pl/assets/cdn.prod.website-files.com/69b07f0b2f3857e59bf8f5e2/69b07f90ac5f2061419834cf_logi_PNG_BIALY-p-500.png" alt="GrupaADK" className="adk-logo" /></a></div><div className="footer-credit"><span>made by: <a href="https://venturebox.pl" target="_blank" rel="noopener noreferrer">venturebox.pl</a></span></div></footer>
  </main>
}
