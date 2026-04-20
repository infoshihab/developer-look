import { useEffect, useState } from 'react'

const navItems = ['Expertise', 'Work', 'About', 'Contact']

const expertiseItems = [
  {
    id: '01',
    title: 'Social strategy',
    text: 'Smart strategy. Strong start. We dive into your brand, audience, and goals, then translate insights into a clear action plan.',
    linkLabel: 'More about social strategy',
  },
  {
    id: '02',
    title: 'Content creation',
    text: 'Content that stands out and connects. Creative, fast, and energetic, always built around your brand story and results.',
    linkLabel: 'More about content creation',
  },
  {
    id: '03',
    title: 'Activation',
    text: 'Visible where and when it matters. We distribute your content through the right channels to reach the right audience.',
    linkLabel: 'More about activation',
  },
  {
    id: '04',
    title: 'Data',
    text: 'Insights that drive impact. We measure, analyze, and optimize continuously so you always know what is working.',
    linkLabel: 'More about data',
  },
]

const caseStudies = [
  {
    title: 'From Zero to Momentum in 3 Weeks',
    brand: 'Bullit',
    text: 'For Bullit, we translated culture and energy into social-first shorts that delivered fast momentum.',
    image: '/images/work/work1.jpg',
  },
  {
    title: 'Smooth in Flavor, Bold in Visuals',
    brand: 'Roasta',
    text: 'With focused visuals, we transformed product flavor into a bold and memorable digital identity.',
    image: '/images/work/work2.jpg',
  },
  {
    title: 'Content That Truly Connects',
    brand: 'Loco',
    text: 'For Loco, we turned atmosphere into high-impact content designed to engage and convert.',
    image: '/images/work/work3.jpg',
  },
]

const brands = [
  { name: 'Brand 1', image: '/images/brands/brand1.png' },
  { name: 'Brand 2', image: '/images/brands/brand2.jpg' },
  { name: 'Brand 3', image: '/images/brands/brand3.png' },
  { name: 'Brand 4', image: '/images/brands/brand4.jpg' },
  { name: 'Brand 5', image: '/images/brands/brand5.jpg' },
  { name: 'Brand 6', image: '/images/brands/brand6.jpg' },
]

const stats = [
  { value: '10M+', label: 'Organic views', desc: 'Growth powered by smart content systems' },
  { value: '30+', label: 'Brands supported', desc: 'From startup teams to global brands' },
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
          <p className="hero-subkicker">Done guessing what content will perform?</p>
          <h1>
            We create content that stands out, stays memorable, and moves your audience to action.
          </h1>
          <p className="hero-copy">
            We do more than produce beautiful visuals. We make performance measurable, so you know what
            works, what to improve, and where to scale next.
          </p>
          <a className="cta-link" href="#">
            View all work
          </a>
          <a className="ghost-link" href="#">
            Learn about us
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
          <p className="label">Content That Scores</p>
          <h2>
            We tell your story in a way that fits your audience, combining creative direction with
            performance-focused execution.
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
                <article key={brand.name} className="brand-tile">
                  <img src={brand.image} alt={brand.name} loading="lazy" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="contact-glow" />
          <div className="contact-main">
            <p className="label">Let&apos;s Get Hyped!</p>
            <h2>Let&apos;s Build Something Great</h2>
            <p>
              Reach out and discover how social-first content, strategy, and data can work together to
              accelerate your growth.
            </p>
            <div className="contact-actions">
              <a className="contact-primary" href="mailto:info@gethyped.nl">
                Email us directly
              </a>
              <a className="contact-secondary" href="tel:+31615337496">
                Or call +31 6 1533 7496
              </a>
            </div>
          </div>
          <div className="contact-side">
            <article>
              <span>Contact</span>
              <a href="mailto:info@gethyped.nl">info@gethyped.nl</a>
            </article>
            <article>
              <span>Phone</span>
              <a href="tel:+31615337496">+31 6 1533 7496</a>
            </article>
            <article>
              <span>Address</span>
              <p>Beltrumsestraat 6, 7141 AL Groenlo, Netherlands</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <p className="footer-kicker">Let&apos;s Get Hyped!</p>
          <h3>Get Hyped! Let&apos;s start your next campaign.</h3>
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
            <a href="#">Privacy policy</a>
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
