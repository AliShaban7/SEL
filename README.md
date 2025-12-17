# Sel İçecek Website

A premium, elegant React website for Sel İçecek, the official distributor of Saranskiy Distillery products in Turkey.

## Features

- **Responsive Design**: Mobile-first, fully responsive layout
- **Sticky Header**: Navigation bar that stays fixed on scroll
- **Smooth Animations**: Fade-in effects and hover transitions
- **Product Showcase**: Filterable product cards for Vodka and Wines
- **Image Gallery**: Lightbox-enabled gallery with production process images
- **Contact Form**: Functional contact form with validation
- **Premium Styling**: Black & Beige color scheme with dark golden accents

## Design Specifications

- **Main Colors**: Black (#000) & Beige (#F5F5DC)
- **Logo Color**: Dark Golden (#D4AF37)
- **Button Color**: Red (#DC143C)
- **Typography**: Modern, elegant sans-serif fonts

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
Sel-icecek/
├── public/
│   ├── products/          # Product images
│   ├── gallery/           # Gallery images
│   └── hero-bg.jpg        # Hero section background
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Navigation header
│   │   ├── Hero.jsx       # Hero section
│   │   ├── Products.jsx   # Products section
│   │   ├── Gallery.jsx    # Gallery section
│   │   ├── Contact.jsx    # Contact section
│   │   └── Footer.jsx     # Footer
│   ├── App.jsx            # Main app component
│   └── index.css          # Global styles
└── package.json
```

## Adding Images

Place your images in the `public` folder following this structure:

- **Hero Background**: `public/hero-bg.jpg`
- **Products**: `public/products/[product-name].jpg`
- **Gallery**: `public/gallery/production-[number].jpg`

See `public/README_IMAGES.md` for detailed image requirements.

## Adding New Products

To add new products, edit `src/components/Products.jsx` and add to the `products` array:

```javascript
{
  id: 3,
  name: 'Product Name',
  category: 'vodka', // or 'wine'
  image: '/products/product-image.jpg',
  description: 'Product description',
  alcohol: '40% vol',
  highlights: ['Highlight 1', 'Highlight 2']
}
```

## Customization

### Colors

Edit the CSS variables in component files:
- Header/Footer: `#D4AF37` (golden), `#000` (black)
- Buttons: `#DC143C` (red)
- Backgrounds: `#F5F5DC` (beige), `#000` (black)

### Contact Information

Update contact details in:
- `src/components/Header.jsx` - Phone number in header
- `src/components/Contact.jsx` - Full contact information
- `src/components/Footer.jsx` - Footer contact info

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- React 19
- Vite
- CSS3 (with animations and transitions)

## License

© 2024 Sel İçecek. All rights reserved.
