
import { useEffect, useState } from 'react';

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 500);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <footer className="site-footer" id="contacts">
        <section className="contact-section">
          <div className="section-container">
            <p className="eyebrow">YOUR NEXT CHAPTER</p>
            <h2>Let’s find your place in Crete.</h2>

            <p className="footer-description">
              Get in touch to discuss your plans and find the right property
              in Crete.
            </p>

            {/* TODO: Add confirmed contact links */}
            <div className="footer-contacts">
              {/* Email, phone, WhatsApp and social networks */}
            </div>
          </div>
        </section>

        <div className="footer-bottom">
          <a
            className="brand footer-brand"
            href="#home"
            aria-label="Natalia Saronova Property — Home"
          >
            <span className="brand-name">NATALIA SARONOVA</span>
            <span className="brand-caption">PROPERTY IN CRETE</span>
          </a>

          {/* TODO: Replace with the official RE/MAX logo */}
          <div className="remax-placeholder">RE/MAX</div>

          <p>In the Land of Myths, Trust is Everything.</p>
        </div>
      </footer>

      <button
        className={`scroll-top${showScrollTop ? ' visible' : ''}`}
        type="button"
        aria-label="Back to top"
        onClick={scrollToTop}
        tabIndex={showScrollTop ? 0 : -1}
        aria-hidden={!showScrollTop}
      >
        ↑
      </button>
    </>
  );
}

export default Footer;
