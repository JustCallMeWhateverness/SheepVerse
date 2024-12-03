document.addEventListener('DOMContentLoaded', function() {

    const sheepCards = document.querySelectorAll('.sheep-card');

    sheepCards.forEach(card => {
        // Add a click event listener to each card
        card.addEventListener('click', function() {
            const details = card.querySelectorAll('p');

            // Toggle the visibility of the clicked card's details
            details.forEach(detail => {
                if (detail.style.display === 'none' || detail.style.display === '') {
                    detail.style.display = 'block'; // Show the details
                } else {
                    detail.style.display = 'none';  // Hide the details
                }
            });
        });
    });
});