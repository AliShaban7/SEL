import { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    { id: 1, src: '/gallery/sortirovochnoe_otdelenie.jpg', alt: 'Sıralama bölümü' },
    { id: 2, src: '/gallery/0.jpg', alt: 'Vodka üretim süreci' },
    { id: 3, src: '/gallery/zona_upakovki.jpg', alt: 'Ambalajlama bölgesi' },
    { id: 4, src: '/gallery/vodopodgotovka.jpg', alt: 'Su hazırlama' },
    { id: 5, src: '/gallery/1.jpg', alt: 'Üretim süreci' }
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="galeri" className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h2 className="gallery-title">Vodka üretim sürecimizden kareler</h2>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-nav carousel-nav-left" onClick={prevImage} aria-label="Önceki fotoğraf">
            ‹
          </button>
          
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="carousel-slide"
                  onClick={() => openLightbox(image)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="carousel-image"
                    onError={(e) => {
                      e.target.src = '/placeholder-gallery.jpg';
                    }}
                  />
                  <div className="carousel-overlay">
                    <span className="carousel-icon">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="carousel-nav carousel-nav-right" onClick={nextImage} aria-label="Sonraki fotoğraf">
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Fotoğraf ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

