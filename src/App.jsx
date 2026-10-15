
import './App.css';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'My Story', href: '#my-story' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About Crete', href: '#about-crete' },
  { label: 'Contacts', href: '#contacts' },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Natalia Saronova Property — Home">
        <span className="brand-name">NATALIA SARONOVA</span>
        <span className="brand-caption">PROPERTY IN CRETE</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="header-contact" href="#contacts">
        Get in touch
      </a>
    </header>
  );
}

function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="eyebrow">REAL ESTATE · CRETE, GREECE</p>

          <h1>
            In the Land of Myths,
            <br />
            <span>Trust is Everything.</span>
          </h1>

          <p className="hero-description">
            Find your place in Crete with personal guidance
            and a thoughtful approach to real estate.
          </p>

          <a className="primary-button" href="#properties">
            Explore properties <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="hero-note">
          <span className="hero-note-line" />
          <span>YOUR STORY IN CRETE STARTS HERE</span>
        </div>
      </section>

      <section className="intro section-container" id="my-story">
        <div>
          <p className="eyebrow">A PERSONAL APPROACH</p>
          <h2>A place to call your own.</h2>
        </div>

        <div className="intro-copy">
          <p>
            Buying property is more than a transaction.
            It is about finding a place that feels right
            and making a confident decision.
          </p>
          <a className="text-link" href="#contacts">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="properties-section section-container" id="properties">
        <p className="eyebrow">FIND YOUR PLACE</p>
        <h2>Properties for every chapter.</h2>

        <div className="property-categories">
          {[
            ['01', 'Economy'],
            ['02', 'Mid-range'],
            ['03', 'Premium'],
            ['04', 'Commercial'],
          ].map(([number, title]) => (
            <a className="category-link" href="#contacts" key={number}>
              <span className="category-number">{number}</span>
              <span>{title}</span>
              <span className="category-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div className="section-container">
          <p className="eyebrow">HOW I CAN HELP</p>
          <h2>More than finding a property.</h2>

          <div className="service-list">
            {[
              'Property search and selection',
              'Guidance through the buying process',
              'Local knowledge and personal support',
            ].map((service, index) => (
              <div className="service-row" key={service}>
                <span>0{index + 1}</span>
                <h3>{service}</h3>
                <span aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="crete-section section-container" id="about-crete">
        <p className="eyebrow">GET TO KNOW THE ISLAND</p>
        <h2>Discover Crete.</h2>
        <p>
          From the lively streets of Heraklion to peaceful coastal towns,
          find the part of the island that suits your way of life.
        </p>
      </section>

      <section className="contact-section" id="contacts">
        <div className="section-container">
          <p className="eyebrow">YOUR NEXT CHAPTER</p>
          <h2>Let’s find your place in Crete.</h2>
          <a className="primary-button" href="mailto:">
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand footer-brand" href="#home">
        <span className="brand-name">NATALIA SARONOVA</span>
        <span className="brand-caption">PROPERTY IN CRETE</span>
      </a>

      <p>In the Land of Myths, Trust is Everything.</p>
      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
