# Brotherhood of Shadows Website

A modern, professional website for the Brotherhood of Shadows nonprofit organization.

## Features

- 🏠 **Homepage**: Hero section with mission statement and core values
- 📖 **About Page**: Mission, vision, and values of the organization
- 👥 **Members Page**: Team members and membership information
- 🖼️ **Gallery**: Visual showcase of community events and activities
- 📝 **Blog**: Articles about leadership, growth, values, and community service
- 📧 **Contact**: Contact form and information for reaching out

## Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **React Router** 6.14.0 - Client-side routing
- **Tailwind CSS** 3.3.3 - Utility-first CSS framework
- **React Scripts** 5.0.1 - Build and development tools

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Members.js
│   │   ├── Gallery.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Build

Build for production:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Pages

### Home
- Hero section with mission statement
- Core values showcase
- Call-to-action for joining

### About
- Organization mission and vision
- Core values detailed explanations
- Organization history and story

### Members
- Leadership team profiles
- Member information
- Membership application information

### Gallery
- Event photos and memories
- Community activity showcase
- Photo submission information

### Blog
- Articles on various topics
- Categorized posts (Leadership, Growth, Values, Service)
- Author and date information
- Category filtering

### Contact
- Contact form for inquiries
- Contact information (email, phone, location)
- Social media links
- Response time information

## Customization

### Colors
The site uses a purple-based color scheme. Modify colors in `tailwind.config.js` to change the theme.

### Content
All content can be easily modified in the respective page components. Update text, images, team members, and blog posts as needed.

### Branding
Update the organization name, logo, and other branding elements in the Navbar and Footer components.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © Brotherhood of Shadows
