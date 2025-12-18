import './Hero.css';
import LogoCarousel from './LogoCarousel';
import CircularBadge from './CircularBadge';

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
        <div className="hero-text-content">
          <p className="hero-subtitle">DOĞADAN BARDAĞINIZA</p>
          <h1 className="hero-title-text">HER YUDUMDA DOĞANIN SAF LEZZETI</h1>
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
      <CircularBadge />
      <div className="hero-logo-carousel">
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Hero;

