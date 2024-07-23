document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addReview();
});

function addReview() {
    const name = document.getElementById('reviewName').value;
    const text = document.getElementById('reviewText').value;

    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');

    const reviewName = document.createElement('h4');
    reviewName.textContent = name;
    reviewDiv.appendChild(reviewName);

    const reviewText = document.createElement('p');
    reviewText.textContent = text;
    reviewDiv.appendChild(reviewText);

    document.getElementById('reviewList').appendChild(reviewDiv);

    document.getElementById('reviewForm').reset();
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    document.getElementById('contactForm').reset();
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for subscribing to our newsletter!');
    document.getElementById('newsletterForm').reset();
});

document.getElementById('searchInput').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const destinations = document.querySelectorAll('.destination');

    destinations.forEach(destination => {
        const destinationName = destination.querySelector('h3').textContent.toLowerCase();
        if (destinationName.includes(searchValue)) {
            destination.style.display = 'block';
        } else {
            destination.style.display = 'none';
        }
    });
});
