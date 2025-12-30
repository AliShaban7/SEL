import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="iletisim" className="contact">
      <div className="contact-container">
        <h2 className="section-title">BİZİMLE İLETİŞİME GEÇİN</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Mesaj Gönderin</h3>
            <p className="form-subtitle">Bizimle iletişime geçmek için formu doldurun</p>
            <div className="form-group">
              <label htmlFor="name">Adınız Soyadınız</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Adınız ve soyadınız"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="E-posta adresiniz"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesajınız</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Mesajınızı buraya yazın"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">GÖNDER</button>
          </form>
          
          <div className="contact-info-section">
            <h3 className="info-section-title">İletişim Bilgileri</h3>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Telefon</h3>
                <a href="tel:05456069264">0545 606 92 64</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>E-posta</h3>
                <a href="mailto:info@selicecek.com.tr">info@selicecek.com.tr</a>
              </div>
            </div>
            
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="contact-details">
                <h3>Adres</h3>
                <p>Üniversite Mh. Civan Sk. No:1 Allure Tower Kat: 18 Ofis 256 Avcılar/İstanbul</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

