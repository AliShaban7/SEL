import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  
  const products = {
    'chistie-rosi': {
      name: 'Saranskiy Distillery Chistie Rosi',
      brand: 'Saranskiy Distillery',
      productName: 'Chistie Rosi',
      category: 'vodka',
      image: '/gallery/Chisti-Rosi-Packed.jpg',
      description: 'Organik vodka',
      alcohol: '40% vol',
      highlights: ['Kosher Parve', 'Manuel kontrol'],
      fullDescription: 'Chistie Rosi, Saranskiy Distillery tarafından üretilen premium organik vodkadır. Geleneksel üretim yöntemleri ve en kaliteli malzemelerle hazırlanan bu vodka, saf ve berrak tadıyla öne çıkar.',
      features: ['Organik malzemeler', 'Geleneksel üretim', 'Kosher sertifikalı', 'Manuel kalite kontrolü']
    },
    'balchug-xxi': {
      name: 'Saranskiy Distillery Balchug XXI',
      brand: 'Saranskiy Distillery',
      productName: 'Balchug XXI',
      category: 'vodka',
      image: '/gallery/Balchug-update.jpeg',
      description: 'Soft vodka',
      alcohol: '40% vol',
      highlights: ['Forbes ödüllü', 'Spirits Masters ödüllü'],
      fullDescription: 'Balchug XXI, Forbes ve Spirits Masters ödüllü bir premium vodkadır. Yumuşak tadı ve pürüzsüz dokunuşuyla dünya çapında tanınan bu ürün, Saranskiy Distillery\'nin en başarılı ürünlerinden biridir.',
      features: ['Forbes ödüllü', 'Spirits Masters ödüllü', 'Yumuşak tat', 'Premium kalite']
    },
    'Kindzmarauli': {
      name: 'Mildiani Kindzmarauli',
      brand: 'Mildiani',
      productName: 'Kindzmarauli',
      category: 'wine',
      image: '/gallery/kindzmarauilo.png',
      description: 'Premium Gürcü şarabı',
      alcohol: '12-13% vol',
      highlights: ['Geleneksel üretim', 'Premium kalite'],
      fullDescription: 'Kindzmarauli, Gürcistan\'ın en iyi üzüm bağlarından elde edilen üzümlerle üretilen premium bir beyaz şaraptır. Geleneksel üretim teknikleri ve modern teknolojinin birleşimiyle ortaya çıkmıştır.',
      features: ['Geleneksel üretim', 'Premium kalite', 'Gürcü üzümleri', 'Özel fermantasyon']
    },
    'rkatsiteli': {
      name: 'Mildiani Rkatsiteli',
      brand: 'Mildiani',
      productName: 'Rkatsiteli',
      category: 'wine',
      image: '/gallery/rkatsiteli-white.png',
      description: 'Klasik beyaz şarap',
      alcohol: '12-13% vol',
      highlights: ['Gürcü üzüm çeşidi', 'Özel fermantasyon'],
      fullDescription: 'Rkatsiteli, Gürcistan\'ın ikonik beyaz şarap üzüm çeşidinden üretilen klasik bir şaraptır. Özel fermantasyon süreciyle karakteristik aromaları ve taze tadı korunur.',
      features: ['Gürcü Rkatsiteli üzümü', 'Özel fermantasyon', 'Taze aroma', 'Klasik stil']
    },
    'mukuzani': {
      name: 'Mildiani Mukuzani',
      brand: 'Mildiani',
      productName: 'Mukuzani',
      category: 'wine',
      image: '/gallery/mukuzan-red.png',
      description: 'Kırmızı şarap',
      alcohol: '12-13% vol',
      highlights: ['Saperavi üzümü', 'Zengin aroma'],
      fullDescription: 'Mukuzani, Gürcistan\'ın en prestijli kırmızı şaraplarından biridir. Saperavi üzümlerinden üretilen bu şarap, zengin aromaları ve kompleks yapısıyla dikkat çeker.',
      features: ['Saperavi üzümü', 'Zengin aroma', 'Kompleks yapı', 'Premium kırmızı şarap']
    },
    'pirosmani': {
      name: 'Mildiani Pirosmani',
      brand: 'Mildiani',
      productName: 'Pirosmani',
      category: 'wine',
      image: '/gallery/prosman-white.png',
      description: 'Özel karışım şarap',
      alcohol: '12-13% vol',
      highlights: ['Sanatçı adına', 'Sınırlı üretim'],
      fullDescription: 'Pirosmani, ünlü Gürcü sanatçı Niko Pirosmani\'nin adını taşıyan özel bir şaraptır. Sınırlı üretimiyle ve benzersiz karışımıyla koleksiyonerlerin favorisidir.',
      features: ['Sanatçı adına', 'Sınırlı üretim', 'Özel karışım', 'Koleksiyonerlik']
    },
    'saperavi': {
      name: 'Mildiani Saperavi',
      brand: 'Mildiani',
      productName: 'Saperavi',
      category: 'wine',
      image: '/gallery/Saperavi-red.png',
      description: 'Kakheti bölgesinden özel Saperavi',
      alcohol: '13-14% vol',
      highlights: ['Kuru', 'Yoğun kiraz rengi'],
      fullDescription: 'Saperavi, Kakheti bölgesinin en iyi üzüm bağlarından elde edilen Saperavi üzümlerinden üretilen kuru bir kırmızı şaraptır. Yoğun kiraz rengi ve karakteristik aromalarıyla öne çıkar.',
      features: ['Kakheti bölgesi', 'Saperavi üzümü', 'Kuru', 'Yoğun kiraz rengi']
    },
    'pirosmani-red': {
      name: 'Mildiani Pirosmani Red',
      brand: 'Mildiani',
      productName: 'Pirosmani Red',
      category: 'wine',
      image: '/gallery/prosman.png',
      description: 'Kakheti bölgesinden yarı-kuru Pirosmani',
      alcohol: '12-13% vol',
      highlights: ['Tatlı meyve aromaları', 'Yarı-kuru'],
      fullDescription: 'Pirosmani Red, Kakheti bölgesinden elde edilen yarı-kuru bir kırmızı şaraptır. Tatlı meyve aromaları ve dengeli yapısıyla farklı bir deneyim sunar.',
      features: ['Kakheti bölgesi', 'Yarı-kuru', 'Tatlı meyve aromaları', 'Dengeli yapı']
    }
  };

  const product = products[productId];

  if (!product) {
    return <div className="product-detail-container">Ürün bulunamadı</div>;
  }

  const otherProducts = Object.entries(products).filter(([slug, product]) => slug !== productId);
  const visibleProducts = 3;
  const maxIndex = Math.max(0, otherProducts.length - visibleProducts);

  const handlePrevProducts = () => {
    setCurrentProductIndex(Math.max(0, currentProductIndex - 1));
  };

  const handleNextProducts = () => {
    setCurrentProductIndex(Math.min(maxIndex, currentProductIndex + 1));
  };

  // Reset carousel index when product changes
  useEffect(() => {
    setCurrentProductIndex(0);
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [productId]);

  return (
    <>
      <Header />
      <div className="product-detail">
        <div className="product-detail-container">
          <div className="product-detail-header">
            <Link to="/" className="back-link">← Ana Sayfaya Dön</Link>
            <span className="product-category">{product.category === 'vodka' ? 'VODKA' : 'ŞARAP'}</span>
            <h1 className="product-detail-title">{product.productName}</h1>
            <p className="product-detail-brand">{product.brand}</p>
          </div>

          <div className="product-detail-content">
            <div className="product-detail-image">
              <img src={product.image} alt={product.productName} />
            </div>

            <div className="product-detail-info">
              <div className="product-detail-description">
                <h3>Ürün Açıklaması</h3>
                <p>{product.fullDescription}</p>
              </div>

              <div className="product-detail-specs">
                <h3>Özellikler</h3>
                <div className="specs-grid">
                  <div className="spec-item">
                    <span className="spec-label">Alkol Oranı:</span>
                    <span className="spec-value">{product.alcohol}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Kategori:</span>
                    <span className="spec-value">{product.category === 'vodka' ? 'Vodka' : 'Şarap'}</span>
                  </div>
                </div>
              </div>

              <div className="product-detail-features">
                <h3>Özellikleri</h3>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="other-products">
            <h2>Diğer Ürünlerimiz</h2>
            <div className="other-products-carousel">
              <button 
                className="carousel-btn carousel-btn-prev" 
                onClick={handlePrevProducts}
                disabled={currentProductIndex === 0}
                aria-label="Önceki ürünler"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="other-products-grid">
                {otherProducts
                  .slice(currentProductIndex, currentProductIndex + visibleProducts)
                  .map(([slug, product]) => (
                    <Link key={slug} to={`/product/${slug}`} className="other-product-card">
                      <div className="other-product-image">
                        <img src={product.image} alt={product.productName} />
                      </div>
                      <div className="other-product-info">
                        <span className="other-product-brand">{product.brand}</span>
                        <h4 className="other-product-name">{product.productName}</h4>
                        <p className="other-product-description">{product.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
              
              <button 
                className="carousel-btn carousel-btn-next" 
                onClick={handleNextProducts}
                disabled={currentProductIndex >= maxIndex}
                aria-label="Sonraki ürünler"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
