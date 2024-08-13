// Toggle menu visibility
        document.querySelector('.menu-icon').addEventListener('click', function() {
            var menu = document.getElementById('menu');
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            } else {
                menu.style.display = 'block';
            }
        });

        // Quotes slider logic
        let currentQuoteIndex = 0;
        const quotes = document.querySelectorAll('.quotes-slider .quote');

        function showNextQuote() {
            quotes[currentQuoteIndex].classList.remove('visible');
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            quotes[currentQuoteIndex].classList.add('visible');
        }

        // Initialize the first quote
        if (quotes.length > 0) {
            quotes[0].classList.add('visible');
        }

        setInterval(showNextQuote, 3000); // Change quote every 3 seconds

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
