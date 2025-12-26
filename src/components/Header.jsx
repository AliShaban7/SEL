import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src="/gallery/SEL LOGO.png" alt="SEL İÇECEK" className="header-logo-image" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-menu desktop-nav">
          <a href="#hakkimizda" onClick={(e) => { e.preventDefault(); scrollToSection('hakkimizda'); }}>HAKKIMIZDA</a>
          <a href="#urunler" onClick={(e) => { e.preventDefault(); scrollToSection('urunler'); }}>ÜRÜNLER</a>
          <a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection('galeri'); }}>GALERİMİZ</a>
        </nav>
        
        <div className="contact-info">
          <button 
            className="contact-button"
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('iletisim'); 
            }}
          >
            BİZE ULAŞIN <span className="button-arrow">→</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#hakkimizda" onClick={(e) => { e.preventDefault(); scrollToSection('hakkimizda'); }}>HAKKIMIZDA</a>
        <a href="#urunler" onClick={(e) => { e.preventDefault(); scrollToSection('urunler'); }}>ÜRÜNLER</a>
        <a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection('galeri'); }}>GALERİMİZ</a>
        <button 
          className="mobile-contact-button"
          onClick={(e) => { 
            e.preventDefault(); 
            scrollToSection('iletisim'); 
          }}
        >
          BİZE ULAŞIN
        </button>
      </nav>
    </header>
  );
};

export default Header;
