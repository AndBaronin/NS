
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';


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

      
    </main>
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
