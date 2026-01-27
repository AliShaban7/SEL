import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Helper function to get image URL - handles Turkish characters
  const getImageUrl = (filename) => {
    return `/gallery/${filename}`;
  };

  const products = [
    {
      id: 1,
      name: 'Saranskiy Distillery Chistie Rosi',
      brand: 'Saranskiy Distillery',
      productName: 'Chistie Rosi',
      category: 'vodka',
      image: '/gallery/Chisti-Rosi-Packed.jpg',
      description: 'Organik vodka',
      alcohol: '40% vol',
      highlights: ['Kosher Parve', 'Manuel kontrol'],
      slug: 'chistie-rosi'
    },
    {
      id: 2,
      name: 'Saranskiy Distillery Balchug XXI Yüzyıl',
      brand: 'Saranskiy Distillery',
      productName: 'Balchug XXI',
      category: 'vodka',
      image: '/gallery/Balchug-update.jpeg',
      description: 'Soft vodka',
      alcohol: '40% vol',
      highlights: ['Forbes ödüllü', 'Spirits Masters ödüllü'],
      slug: 'balchug-xxi'
    },
    {
      id: 3,
      name: 'Mildiani Kindzmarauli',
      brand: 'Mildiani',
      productName: 'Kindzmarauli',
      category: 'wine',
      image: '/gallery/kindzmarauilo.png',
      description: 'Premium Gürcü şarabı',
      alcohol: '12-13% vol',
      highlights: ['Geleneksel üretim', 'Premium kalite'],
      slug: 'Kindzmarauli'
    },
    {
      id: 4,
      name: 'Mildiani Rkatsiteli',
      brand: 'Mildiani',
      productName: 'Rkatsiteli',
      category: 'wine',
      image: '/gallery/rkatsiteli-white.png',
      description: 'Klasik beyaz şarap',
      alcohol: '12-13% vol',
      highlights: ['Gürcü üzüm çeşidi', 'Özel fermantasyon'],
      slug: 'rkatsiteli'
    },
    {
      id: 5,
      name: 'Mildiani Mukuzani',
      brand: 'Mildiani',
      productName: 'Mukuzani',
      category: 'wine',
      image: '/gallery/mukuzan-red.png',
      description: 'Kırmızı şarap',
      alcohol: '12-13% vol',
      highlights: ['Saperavi üzümü', 'Zengin aroma'],
      slug: 'mukuzani'
    },
    {
      id: 6,
      name: 'Mildiani Pirosmani',
      brand: 'Mildiani',
      productName: 'Pirosmani',
      category: 'wine',
      image: '/gallery/prosman-white.png',
      description: 'Özel karışım şarap',
      alcohol: '12-13% vol',
      highlights: ['Sanatçı adına', 'Sınırlı üretim'],
      slug: 'pirosmani'
    },
    {
      id: 7,
      name: 'Mildiani Saperavi',
      brand: 'Mildiani',
      productName: 'Saperavi',
      category: 'wine',
      image: '/gallery/Saperavi-red.png',
      description: 'Kakheti bölgesinden özel Saperavi',
      alcohol: '13-14% vol',
      highlights: ['Kuru', 'Yoğun kiraz rengi'],
      slug: 'saperavi'
    },
    {
      id: 8,
      name: 'Mildiani Pirosmani Red',
      brand: 'Mildiani',
      productName: 'Pirosmani Red',
      category: 'wine',
      image: '/gallery/prosman.png',
      description: 'Kakheti bölgesinden yarı-kuru Pirosmani',
      alcohol: '12-13% vol',
      highlights: ['Tatlı meyve aromaları', 'Yarı-kuru'],
      slug: 'pirosmani-red'
    }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="urunler" className="products">
      <div className="products-container">
        <h2 className="section-title">ÜRÜNLER</h2>
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            TÜMÜ
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'vodka' ? 'active' : ''}`}
            onClick={() => setActiveFilter('vodka')}
          >
            VODKA
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'wine' ? 'active' : ''}`}
            onClick={() => setActiveFilter('wine')}
          >
            ŞARAP
          </button>
        </div>
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <Link key={product.id} to={`/product/${product.slug}`} className="product-card-link" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-card">
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      console.error('Image failed to load:', product.image);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              <div className="product-info">
                {product.brand ? (
                  <div className="product-name-wrapper">
                    <span className="product-brand">{product.brand}</span>
                    <h3 className="product-name">{product.productName}</h3>
                  </div>
                ) : (
                  <h3 className="product-name">{product.name}</h3>
                )}
                <p className="product-description">{product.description}</p>
                <div className="product-details">
                  <span className="alcohol-content">{product.alcohol}</span>
                  <div className="product-highlights">
                    {product.highlights.map((highlight, idx) => (
                      <span key={idx} className="highlight-badge">{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

