import './About.css';

const About = () => {
  return (
    <section id="hakkimizda" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-image-side">
            <div className="about-image-wrapper">
              <img src="/gallery/about-image-2.webp" alt="Sel İçecek" className="about-image-main" />
              <div className="about-image-decorative"></div>
            </div>
            <div className="about-experience-badge">
              <span className="experience-number">25+</span>
              <span className="experience-text">Yıllık Tecrübe</span>
            </div>
          </div>
          
          <div className="about-text-side">
            <h2 className="about-title">HAKKIMIZDA</h2>
            <h3 className="about-subtitle">Premium Kalite, Güvenilir Dağıtım</h3>
            <p className="about-description">
              Sel İçecek, Türkiye'de Saranskiy Distillery'nin resmi distribütörüdür. Markamız, 
              titiz kalite kontrol ve özenle seçilmiş hammaddelerle üretilen ürünlerin 
              güvenilir bir şekilde tüketiciye ulaşmasını garanti eder.
            </p>
            <p className="about-description">
              Sektördeki derin tecrübemizle, sadece dünyanın en seçkin vodka ve şaraplarını 
              sunmakla kalmıyor, aynı zamanda her bir şişede doğanın saflığını ve 
              geleneksel üretim tekniklerinin kalitesini masanıza getiriyoruz.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Resmi Distribütörlük</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Üstün Kalite Standartları</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Güvenilir İş Ortağı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



