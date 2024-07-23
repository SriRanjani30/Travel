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
