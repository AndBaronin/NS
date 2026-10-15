
import { useState } from 'react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'My Story', href: '#my-story' },
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'About Crete', href: '#about-crete' },
  { label: 'Contacts', href: '#contacts' },
];


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <a
          className="brand"
          href="#home"
          aria-label="Natalia Saronova Property — Home"
          onClick={closeMenu}
        >
          <span className="brand-name">NATALIA SARONOVA</span>
          <span className="brand-caption">PROPERTY IN CRETE</span>
        </a>

        <nav
          id="main-navigation"
          className={`main-nav${isOpen ? ' is-open' : ''}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="header-contact" href="#contacts" onClick={closeMenu}>
          Get in touch
        </a>

        <button
          className={`menu-toggle${isOpen ? ' is-open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {isOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </>
  );
}


export default Header;
