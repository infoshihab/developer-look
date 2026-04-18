import { useEffect, useState } from 'react'

const navItems = ['Expertises', 'Work', 'About', 'Contact']

const expertiseItems = [
  {
    id: '01',
    title: 'Social strategy',
    text: 'Slimme strategie. Sterke start. We duiken diep in jouw merk, doelgroep en doelen. En vertalen data naar een duidelijk plan met formats die echt impact maken.',
    linkLabel: 'Meer over social strategie',
  },
  {
    id: '02',
    title: 'Content creation',
    text: 'Content die opvalt en raakt. Creatief, snel en energiek. Altijd met jouw merkverhaal en resultaat als vertrekpunt.',
    linkLabel: 'Meer over content creatie',
  },
  {
    id: '03',
    title: 'Activation',
    text: 'Zichtbaar waar en wanneer het telt. We zorgen dat jouw content op de juiste kanalen bij de juiste doelgroep terechtkomt.',
    linkLabel: 'Meer over activatie',
  },
  {
    id: '04',
    title: 'Data',
    text: 'Inzichten die impact maken. We meten, analyseren en sturen bij zodat je precies weet wat werkt en waar je kunt versnellen.',
    linkLabel: 'Meer over data',
  },
]

const caseStudies = [
  {
    title: 'Van nul naar vol, binnen 3 weken',
    brand: 'Bullit',
    text: 'Voor Bullit vertaalden we cultuur en energie naar social-first shorts met resultaat.',
    image: '/images/work/bullit.jpg',
  },
  {
    title: 'Zacht in smaak, sterk in beeld',
    brand: 'Roasta',
    text: 'Met to-the-point visuals brengen we de pure smaak van Jamaica over.',
    image: '/images/work/roasta.jpg',
  },
  {
    title: 'Content die echt smaakt (en raakt)',
    brand: 'Loco',
    text: 'Voor Loco vertaalden we sfeer naar shorts die werken.',
    image: '/images/work/loco.jpg',
  },
]

const brands = ['Brouwersnös', 'Skin by Kim', 'TROTS', 'Bierlab', 'House of Bèta', 'MOOI']

const stats = [
  { value: '10M+', label: 'Organische views', desc: 'Groei door slimme content' },
  { value: '30+', label: 'Merken geholpen', desc: 'Van start-up tot multinational' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <div className="page">
      <header className="site-header">
        <div className="header-inner">
          <a className="logo" href="/">
            Get Hyped.
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </nav>
          <button className="contact-btn desktop-only" type="button">
            Get Results
          </button>
          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((state) => !state)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}>
              {item}
            </a>
          ))}
        </nav>
        <button className="contact-btn" type="button" onClick={() => setMenuOpen(false)}>
          Get Results
        </button>
        <a className="mobile-phone" href="tel:+31615337496" onClick={() => setMenuOpen(false)}>
          +31 6 1533 7496
        </a>
      </div>

      <main>
        <section className="hero">
          <div className="hero-glow" />
          <p className="eyebrow">Get Hyped - Social-first content agency</p>
          <p className="hero-kicker">Get Hyped. Get Noticed. Get Results.</p>
          <p className="hero-subkicker">Klaar met gokken op content die niets oplevert?</p>
          <h1>
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in
            beweging brengt. Snel, krachtig en energiek.
          </h1>
          <p className="hero-copy">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar. Zo weet je
            precies wat werkt en wat niet. Nooit meer content zonder strategie. Nooit meer content
            zonder resultaat.
          </p>
          <a className="cta-link" href="#">
            Bekijk al ons werk
          </a>
          <a className="ghost-link" href="#">
            Leer ons kennen
          </a>
          <div className="stats">
            {stats.map((item) => (
              <article key={item.value} className="stat-card">
                <h3>{item.value}</h3>
                <p className="stat-title">{item.label}</p>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="expertise-grid" id="expertise">
          {expertiseItems.map((item) => (
            <article key={item.id} className="card">
              <div className="card-top">
                <p className="label">Expertise</p>
                <span className="card-id">{item.id}</span>
              </div>
              <div className="card-heading">
                <h2>{item.title}</h2>
              </div>
              <p>{item.text}</p>
              <a className="card-link" href="#">
                {item.linkLabel}
              </a>
            </article>
          ))}
        </section>

        <section className="cases" id="work">
          <p className="label">Content dat scoort.</p>
          <h2>
            Wij vertellen jouw verhaal. Op een manier die echt past bij jouw doelgroep. Met creatieve
            content die werkt en het verschil maakt.
          </h2>
          <div className="case-list">
            {caseStudies.map((item) => (
              <article key={item.title} className="case-item">
                <div className="case-image-wrap">
                  <img src={item.image} alt={item.brand} />
                </div>
                <p>{item.text}</p>
                <h3>{item.title}</h3>
                <span>{item.brand}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="brands">
          <div className="brands-header">
            <p className="label">Trusted by ambitious brands</p>
            <h2>These brands got hyped.</h2>
          </div>
          <div className="brands-wall" aria-label="Brand showcase">
            <div className="brand-grid-pro">
              {brands.map((brand) => (
                <article key={brand} className="brand-tile">
                  <span>{brand}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="contact-glow" />
          <div className="contact-main">
            <p className="label">Let&apos;s Get Hyped!</p>
            <h2>Let&apos;s Get Hyped!</h2>
            <p>
              Get Hyped! Neem contact op en ontdek hoe social-first content, strategie en data samen
              zorgen voor resultaat.
            </p>
            <div className="contact-actions">
              <a className="contact-primary" href="mailto:info@gethyped.nl">
                Mail ons direct
              </a>
              <a className="contact-secondary" href="tel:+31615337496">
                Of bel +31 6 1533 7496
              </a>
            </div>
          </div>
          <div className="contact-side">
            <article>
              <span>Contact</span>
              <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
            </article>
            <article>
              <span>Telefoon</span>
              <a href="tel:+31615337496">+31 6 1533 7496</a>
            </article>
            <article>
              <span>Adres</span>
              <p>Beltrumsestraat 6, 7141 AL Groenlo</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <p className="footer-kicker">Let&apos;s Get Hyped!</p>
            <h3>Get Hyped! Neem contact op</h3>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href="/">
              Get Hyped.
            </a>
            <p>
              A social-first content agency helping brands grow through strategy-led creative and
              measurable performance.
            </p>
          </div>

          <div className="footer-col">
            <p>Menu</p>
            {navItems.map((item) => (
              <a key={`footer-${item}`} href="#">
                {item}
              </a>
            ))}
          </div>

          <div className="footer-col">
            <p>Contact</p>
            <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
            <a href="tel:+31615337496">+31 6 1533 7496</a>
            <span>Beltrumsestraat 6, 7141 AL Groenlo, NL</span>
          </div>

          <div className="footer-col">
            <p>Follow us</p>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Privacyvoorwaarden</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Get Hyped</span>
          <a href="#">© Design by Dylan</a>
        </div>
      </footer>
    </div>
  )
}

export default App
