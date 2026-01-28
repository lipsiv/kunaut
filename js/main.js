// Main JavaScript for Kunaut

// Image placeholders for different news categories
const imagePlaceholders = {
    'mars-exploration': '🪐',
    'aerospace-education': '🚀',
    'space-incubator': '🏢',
    'asteroid-discovery': '☄️',
    'nasa-cooperation': '🌐',
    'split-space-hub': '🌊',
    'space-olympiad': '🏆',
    'space-conference': '🎤'
};

// Format date to Croatian format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('hr-HR', options);
}

// Get placeholder emoji for news image
function getPlaceholder(image) {
    return imagePlaceholders[image] || '📰';
}

// Create news card HTML
function createNewsCard(news) {
    const card = document.createElement('div');
    card.className = 'news-card';
    
    card.innerHTML = `
        <a href="${news.url}" target="_blank" rel="noopener noreferrer">
            <div class="news-thumbnail">
                <div class="placeholder">${getPlaceholder(news.image)}</div>
            </div>
            <div class="news-content">
                <div class="news-date">${formatDate(news.date)}</div>
                <h3 class="news-title">${news.title}</h3>
                <p class="news-description">${news.description}</p>
                <span class="news-source">${news.source}</span>
            </div>
        </a>
    `;
    
    return card;
}

// Render all news cards
function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    
    if (!newsGrid) {
        console.error('News grid element not found');
        return;
    }
    
    // Sort news by date (newest first) - data is already sorted
    const sortedNews = spaceNewsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Clear existing content
    newsGrid.innerHTML = '';
    
    // Add each news card
    sortedNews.forEach(news => {
        const card = createNewsCard(news);
        newsGrid.appendChild(card);
    });
    
    console.log(`Loaded ${sortedNews.length} news items`);
}

// Smooth scroll for navigation links
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    renderNews();
    setupNavigation();
    console.log('Kunaut website loaded successfully');
});
