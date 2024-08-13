// Toggle menu visibility
document.querySelector('.menu-icon').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
});

// Quotes slider functionality
let currentQuote = 0;
const quotes = document.querySelectorAll('.quotes-slider .quote');

function showQuote(index) {
    quotes.forEach((quote, i) => {
        quote.classList.toggle('active', i === index);
    });
}

function nextQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;
    showQuote(currentQuote);
}

// Automatically change quotes every 3 seconds
setInterval(nextQuote, 3000);
showQuote(currentQuote);
