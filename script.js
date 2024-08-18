document.addEventListener('DOMContentLoaded', function() {
    const quotes = document.querySelectorAll('.quotes-slider .quote');
    let currentQuoteIndex = 0;

    function showQuote(index) {
        quotes.forEach((quote, i) => {
            quote.classList.toggle('visible', i === index);
        });
    }

    function showNextQuote() {
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        showQuote(currentQuoteIndex);
    }

    function showPrevQuote() {
        currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
        showQuote(currentQuoteIndex);
    }

    // Initial display
    showQuote(currentQuoteIndex);

    // Event listeners for arrows
    document.querySelector('.next').addEventListener('click', showNextQuote);
    document.querySelector('.prev').addEventListener('click', showPrevQuote);
});

// Toggle menu visibility
document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Scroll to top functionality
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
    scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
