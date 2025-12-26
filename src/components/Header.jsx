import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

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
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
             <div className="header-container">
               <nav className="nav-menu">
                 <a href="#hakkimizda" onClick={(e) => { e.preventDefault(); scrollToSection('hakkimizda'); }}>HAKKIMIZDA</a>
                 <a href="#urunler" onClick={(e) => { e.preventDefault(); scrollToSection('urunler'); }}>ÜRÜNLER</a>
                 <a href="#galeri" onClick={(e) => { e.preventDefault(); scrollToSection('galeri'); }}>GALERİMİZ</a>
               </nav>
        <div className="logo-container">
          <img src="/gallery/SEL LOGO.png" alt="SEL İÇECEK" className="header-logo-image" />
        </div>
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
      </div>
    </header>
  );
};

export default Header;
