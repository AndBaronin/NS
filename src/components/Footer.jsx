
function Footer() {
  return (
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

        {/* TODO: Replace text placeholder with the official RE/MAX logo */}
        <div className="remax-placeholder">RE/MAX</div>

        <p>In the Land of Myths, Trust is Everything.</p>

        <a className="back-to-top" href="#home">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
