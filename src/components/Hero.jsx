import './Hero.css';
import LogoCarousel from './LogoCarousel';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-decorative-elements">
        <div className="decorative-circle circle-1"></div>
        <div className="decorative-circle circle-2"></div>
        <div className="decorative-line line-1"></div>
        <div className="decorative-line line-2"></div>
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">Premium Distribütör</span>
        </div>
        <div className="hero-text">
          <div className="hero-description-wrapper">
            <p className="hero-description">
              Türkiye'de <strong>Saranskiy Distillery</strong>'nin resmi distribütörü olarak, 
              titiz kalite kontrol ve özenle seçilmiş hammaddelerle üretilen 
              ürünlerin güvenilir bir şekilde tüketiciye ulaşmasını garanti ediyoruz.
            </p>
          </div>
          <div className="hero-cta">
            <button 
              className="hero-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('urunler');
              }}
            >
              Ürünlerimizi İncele <span className="button-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hero-logo-carousel">
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;

