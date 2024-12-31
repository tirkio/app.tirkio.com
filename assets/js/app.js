// app.js

// Initialize Framework7
const app = new Framework7({
    root: '#app',
    theme: 'auto', // Automatically sets the theme based on the platform (iOS or Material Design)
    routes: [
        { path: '/wealth.html', pageName: 'wealth' },
        { path: '/provisions.html', pageName: 'provisions' },
        { path: '/assets.html', pageName: 'assets' },
        { path: '/retirement.html', pageName: 'retirement' },
    ],
    swipeBackPage: true, // Enables swipe-to-go-back
    tabs: {
        swipeable: true, // Enables swipeable tabs
    },
});

// Event Listener for Tab Navigation
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-link');

    tabs.forEach((tab) => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            const activeTab = document.querySelector('.tab-link-active');
            if (activeTab) activeTab.classList.remove('tab-link-active');
            tab.classList.add('tab-link-active');

            // Load the content dynamically
            const href = tab.getAttribute('href');
            fetchContent(href);
        });
    });
});

// Function to Fetch and Load Tab Content Dynamically
function fetchContent(url) {
    fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error(`Error fetching ${url}: ${response.statusText}`);
            return response.text();
        })
        .then((html) => {
            const contentBlock = document.querySelector('.page-content');
            contentBlock.innerHTML = html;
        })
        .catch((error) => console.error('Error loading content:', error));
}

// Function to Handle Dark/Light Mode Toggle
function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark');
}

// Attach toggle event to navbar action
document.querySelector('.navbar .link').addEventListener('click', toggleDarkMode);