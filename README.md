# MoonDoge Meme Coin Website

This is a simple, responsive website template for a fictional meme cryptocurrency called "MoonDoge". The website is built with HTML, CSS, and vanilla JavaScript, featuring modern design elements and interactive features.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with animations and interactive elements
- Token distribution chart using Chart.js
- Mobile navigation menu
- Smooth scrolling
- Interactive particles background effect
- Copy to clipboard functionality for token contract address
- Animated statistics counters
- Roadmap timeline
- Social media integration

## File Structure

```
/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
└── images/             # Directory for images
```

## Setup Instructions

1. Clone or download this repository to your local machine
2. Add your own images to the `images/` directory:
   - `moondoge-logo.png` - Your meme coin logo
   - `moondoge-rocket.png` - Hero section image
   - `moondoge-about.png` - About section image
3. Open `index.html` in your web browser to view the site

## Customization

### Changing Colors

The website uses CSS variables for easy customization. Edit the `:root` selector in `css/styles.css` to update the color scheme:

```css
:root {
    --primary-color: #ff6b00;
    --secondary-color: #4c1d95;
    --accent-color: #ffb700;
    /* other variables */
}
```

### Token Information

Update the token information in the HTML file to match your meme coin:

1. Change the contract address in the "Buy" section
2. Update the token distribution chart data in `js/main.js`
3. Modify the tokenomics cards in the "Tokenomics" section
4. Update the roadmap timeline in the "Roadmap" section

### Social Media Links

Replace the `#` placeholders in the social media links with your actual social media URLs:

```html
<div class="social-links">
    <a href="YOUR_TELEGRAM_URL" class="social-icon"><i class="fab fa-telegram"></i></a>
    <a href="YOUR_TWITTER_URL" class="social-icon"><i class="fab fa-twitter"></i></a>
    <!-- other social links -->
</div>
```

## Dependencies

The website uses the following external libraries:

- [Font Awesome](https://fontawesome.com/) - For icons
- [Chart.js](https://www.chartjs.org/) - For the token distribution chart
- [Google Fonts](https://fonts.google.com/) - For typography (Poppins font)

## Browser Compatibility

This website is compatible with:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## Disclaimer

This is a template for a fictional meme coin. If you use this template for an actual cryptocurrency project, please ensure you comply with all relevant financial regulations and provide appropriate disclaimers to your users. 