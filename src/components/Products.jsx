import { useState } from 'react';
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
      name: 'Chisti Rosi',
      category: 'vodka',
      image: '/gallery/Chisti-Rosi-Packed.jpg',
      description: 'Organik vodka',
      alcohol: '40% vol',
      highlights: ['Kosher Parve', 'Manuel kontrol', 'ISO 22000 sertifikalı']
    },
    {
      id: 2,
      name: 'Balchug XXI Yüzyıl',
      category: 'vodka',
      image: '/gallery/22-07.png',
      description: 'Soft vodka',
      alcohol: '40% vol',
      highlights: ['Forbes ödüllü', 'Spirits Masters ödüllü']
    },
    {
      id: 3,
      name: 'Mildiani Alaznis Veli',
      brand: 'Mildiani',
      productName: 'Alaznis Veli',
      category: 'wine',
      image: getImageUrl('ALAZNİS-VELİ.png'),
      description: 'Premium Gürcü şarabı',
      alcohol: '12-13% vol',
      highlights: ['Geleneksel üretim', 'Premium kalite']
    },
    {
      id: 4,
      name: 'Mildiani Rkatsiteli',
      brand: 'Mildiani',
      productName: 'Rkatsiteli',
      category: 'wine',
      image: getImageUrl('RKATSİTELİ.png'),
      description: 'Klasik beyaz şarap',
      alcohol: '12-13% vol',
      highlights: ['Gürcü üzüm çeşidi', 'Özel fermantasyon']
    },
    {
      id: 5,
      name: 'Mildiani Mukuzani',
      brand: 'Mildiani',
      productName: 'Mukuzani',
      category: 'wine',
      image: getImageUrl('MUKUZANİ.png'),
      description: 'Kırmızı şarap',
      alcohol: '12-13% vol',
      highlights: ['Saperavi üzümü', 'Zengin aroma']
    },
    {
      id: 6,
      name: 'Mildiani Pirosmani',
      brand: 'Mildiani',
      productName: 'Pirosmani',
      category: 'wine',
      image: getImageUrl('PİROSMANİ.png'),
      description: 'Özel karışım şarap',
      alcohol: '12-13% vol',
      highlights: ['Sanatçı adına', 'Sınırlı üretim']
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
            <div key={product.id} className="product-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="product-image-container">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  onError={(e) => {
                    console.error('Image failed to load:', product.image);
                    // Try with URL-encoded filename as fallback for Turkish characters
                    const filename = product.image.split('/').pop();
                    const encodedUrl = `/gallery/${encodeURIComponent(filename)}`;
                    if (e.target.src !== encodedUrl) {
                      console.log('Trying encoded URL:', encodedUrl);
                      e.target.src = encodedUrl;
                    } else {
                      console.error('Both original and encoded URLs failed for:', product.name);
                      e.target.style.display = 'none';
                    }
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

