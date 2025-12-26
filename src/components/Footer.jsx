import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/product');

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    if (isProductPage) {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView();
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="/gallery/SEL LOGO.png" alt="SEL İÇECEK" className="footer-logo-image" />
          </div>
          
          <nav className="footer-nav">
            <Link to="/">Ana Sayfa</Link>
            <a href="#hakkimizda" onClick={(e) => handleNavClick(e, 'hakkimizda')}>Hakkımızda</a>
            <a href="#urunler" onClick={(e) => handleNavClick(e, 'urunler')}>Ürünler</a>
            <a href="#iletisim" onClick={(e) => handleNavClick(e, 'iletisim')}>İletişim</a>
          </nav>
          
          <div className="footer-contact">
            <a href="tel:05456069264">0545 606 92 64</a>
            <span className="footer-divider-dot">•</span>
            <a href="mailto:info@selicecek.com.tr">info@selicecek.com.tr</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sel İçecek. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

