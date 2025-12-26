import './LogoCarousel.css';

const LogoCarousel = () => {
  const logos = [
    { id: 1, src: '/gallery/logo_saranskiy.svg', alt: 'Saranskiy Distillery' },
    { id: 2, src: '/gallery/chisti-rosi-logo.png', alt: 'Chisti Rosi' },
    { id: 3, src: '/gallery/balchug-logo.png', alt: 'Balchug' },
    { id: 4, src: '/gallery/derevenka-logo.png', alt: 'Derevenka' },
    { id: 5, src: '/gallery/saranskiy-zavod.svg', alt: 'Saranskiy Zavod' },
    { id: 6, src: '/gallery/Mildiani-logo.svg', alt: 'Mildiani' },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="logo-carousel-section">
      <div className="logo-carousel-container">
        <div className="logo-carousel-track">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="logo-carousel-item">
              <img 
                src={logo.src} 
                alt={logo.alt}
                className="carousel-logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;

