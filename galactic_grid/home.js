import reviews from "./reviews.mjs";

const mainContainerPage1 = document.querySelector('main');

// Function to create a review card HTML structure
function createReviewCard(review) {
    return `
        <div class="review-card" data-id="${review.id}">
            <button class="review-card-click">
                <img class="preview-image" src="${review.image1}" alt="${review.title}" width="100%">
                <div>
                    <h3 class="review-card-title">${review.title}</h3>
                    <p class="date">${review.datePublished}</p>
                    <p class="preview-paragraph">${review.previewText[0]}</p>
                    <a href="#" class="read-more-link">Read More</a>
                </div>
            </button>
        </div>
    `;
}

// Function to create a full-page review template
function createReviewExpanded(review) {
    return `
        <div class="review-expanded">
            <div class="title-close">
                <h2 class="review-title">${review.title}</h2>
                <button class="close-button">X</button>
            </div>
            <div class="review-content">
                <img class="img-1" src="${review.image1}" alt="${review.title}" width="100%">
                <div class="creator-rating-container">
                    <div class="creator-name-container">
                        <p>
                            Creator: <span class="creator-name">${review.creator}</span>
                        </p>
                    </div>
                    <a href="${review.url}" class="steam-link" target="_blank">STEAM LINK</a>
                    <span
                        class="rating"
                        role="img"
                        aria-label="Rating: ${review.rating} out of 5 stars"
                    >
                        ${'⭐'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}
                    </span>
                </div>
                <p class="paragraph-part-1">${review.paragraphPart1}</p>
                <img class="img-2" src="${review.image2}" alt="${review.title}" width="100%">
                <img class="img-3" src="${review.image3}" alt="${review.title}" width="100%">
                <p class="paragraph-part-2">${review.paragraphPart2}</p>
            </div>
        </div>
    `;
}

// Function to get three random reviews
function getRandomReviews(reviews, count = 3) {
    const shuffled = reviews.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Function to render three random review cards
function renderRandomReviews() {
    const randomReviews = getRandomReviews(reviews, 3);
    mainContainerPage1.innerHTML = ''; // Clear previous content
    randomReviews.forEach(review => {
        mainContainerPage1.innerHTML += createReviewCard(review);
    });
    attachCardClickListeners();
}

// Function to handle review card clicks
function attachCardClickListeners() {
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const reviewId = card.getAttribute('data-id'); // Correct way to get the data-id attribute
            console.log("Clicked Review ID:", reviewId); // Debugging line to see the ID

            const selectedReview = reviews.find(review => review.id === reviewId);
            if (selectedReview) {
                renderFullReview(selectedReview);
            }
        });
    });
}

// Function to render a full review
function renderFullReview(review) {
    mainContainerPage1.innerHTML = createReviewExpanded(review);

    // Attach close button event listener
    const closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
        renderRandomReviews(); // Go back to random reviews
    });
}

// Initial rendering of random reviews
renderRandomReviews();
