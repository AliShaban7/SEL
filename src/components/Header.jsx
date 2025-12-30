import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    
    // Check if we're on the homepage
    if (location.pathname === '/') {
      // We're on homepage, just scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // We're on another page, navigate to homepage with hash
      navigate('/#' + id);
      // After navigation, scroll to section
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const goToHome = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <div className="header-container">
        {/* Desktop Navigation - Left */}
        <nav className="nav-menu desktop-nav">
          <a href="#hakkimizda" onClick={(e) => { e.preventDefault(); scrollToSection('hakkimizda'); }}>HAKKIMIZDA</a>
          <a href="#urunler" onClick={(e) => { e.preventDefault(); scrollToSection('urunler'); }}>ÜRÜNLER</a>
          <a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection('galeri'); }}>GALERİMİZ</a>
        </nav>

        {/* Logo - Center */}
        <div className="logo-container" onClick={goToHome} style={{ cursor: 'pointer' }}>
          <img src="/gallery/SEL LOGO.png" alt="SEL İÇECEK" className="header-logo-image" />
        </div>
        
        {/* Contact Button - Right */}
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
        <a href="/" onClick={(e) => { e.preventDefault(); goToHome(); }}>ANA SAYFA</a>
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
