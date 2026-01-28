# 🪐 Kunaut

A beautiful space-themed news aggregator for space industry news from Croatia and around the world. Built for GitHub Pages.

![Preview](./preview.png)

## 🌟 Features

- **Space-Themed Design**: Animated starfield background with a modern, futuristic aesthetic
- **Bilingual Support**: Content displayed in both Croatian and English
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **News Cards**: Beautiful thumbnail-based news cards with hover effects
- **GitHub Pages Ready**: Pre-configured for easy deployment to GitHub Pages

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages

1. **Create a new repository** on GitHub
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `kunaut` (or any name you prefer)
   - Make it **Public**

2. **Push this project to GitHub**
   ```bash
   cd kunaut
   git init
   git add .
   git commit -m "Initial commit: Kunaut website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/kunaut.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select `main` branch
   - Click **Save**
   - Your site will be available at `https://YOUR_USERNAME.github.io/kunaut/`

### Option 2: Run Locally

Simply open `index.html` in your browser:

```bash
# Using Python
cd kunaut
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## 📁 Project Structure

```
kunaut/
├── index.html          # Main HTML file
├── .nojekyll           # GitHub Pages config (disables Jekyll)
├── README.md           # This file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   ├── news-data.js    # News articles data
│   └── main.js         # Main JavaScript logic
└── images/
    └── stars.png       # Background assets
```

## 📰 Adding News

Edit `js/news-data.js` to add new news articles:

```javascript
{
    id: 9,
    date: "2026-02-01",
    title: "Your News Title in Croatian",
    titleEn: "Your News Title in English",
    description: "Description in Croatian...",
    descriptionEn: "Description in English...",
    image: "category-keyword",
    source: "Source Name",
    url: "https://original-article-url.com/"
}
```

**Image Categories Available:**
- `mars-exploration` - 🪐
- `aerospace-education` - 🚀
- `space-incubator` - 🏢
- `asteroid-discovery` - ☄️
- `nasa-cooperation` - 🌐
- `split-space-hub` - 🌊
- `space-olympiad` - 🏆
- `space-conference` - 🎤

## 🎨 Customization

### Colors
Edit the `:root` variables in `css/style.css`:

```css
:root {
    --primary-color: #00d4ff;      /* Main accent color */
    --secondary-color: #7b2cbf;    /* Secondary accent */
    --accent-color: #ff6b35;       /* Highlight color */
    --bg-dark: #0a0a1a;            /* Background color */
}
```

### Fonts
The project uses Google Fonts:
- **Orbitron**: For headings (futuristic/sci-fi look)
- **Exo 2**: For body text (clean, modern sans-serif)

## 📱 Responsive Design

The website is fully responsive:
- **Desktop**: Full layout with side-by-side thumbnail and content
- **Tablet**: Adjusted margins and padding
- **Mobile**: Stacked layout (thumbnail above content)

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Pokrenuto s ❤️ za hrvatsku svemirsku zajednicu**
**Powered by ❤️ for the Croatian space community**
