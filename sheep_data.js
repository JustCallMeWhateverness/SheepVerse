document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.sheep-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const details = card.querySelectorAll('p');
            details.forEach(detail => {
                detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
            });
        });
    });
});