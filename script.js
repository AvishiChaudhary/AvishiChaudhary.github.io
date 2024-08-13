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

    // Event listeners for buttons
    document.querySelector('.next').addEventListener('click', showNextQuote);
    document.querySelector('.prev').addEventListener('click', showPrevQuote);
});

// Toggle menu visibility
document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Scroll to top functionality
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
