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
                    <a href="" >Read More</a>
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
                    <a href="${review.url}" class="steam-link">STEAM LINK</a>
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

// Insert review cards into the main container
reviews.forEach((review) => {
    const reviewCardHTML = createReviewCard(review);
    mainContainerPage1.innerHTML += reviewCardHTML;
});

// Add a container for the expanded review
const reviewExpandedContainer = document.createElement('div');
reviewExpandedContainer.className = 'review-expanded';
reviewExpandedContainer.style.display = 'none'; // Initially hidden
document.body.appendChild(reviewExpandedContainer);


mainContainerPage1.addEventListener('click', (event) => {
    const card = event.target.closest('.review-card');
    if (card) {
        // Retrieve the data-id from the clicked card
        const reviewId = card.dataset.id;

        // Find the corresponding review in the reviews array
        const review = reviews.find(r => r.id == reviewId); // Match against the correct id

        console.log("Clicked Review ID:", reviewId);
        console.log("Matched Review:", review);

        if (review) {
            // Generate and display the expanded review
            reviewExpandedContainer.innerHTML = createReviewExpanded(review);
            reviewExpandedContainer.style.display = 'flex';

            // Add event listener for the close button
            const closeButton = reviewExpandedContainer.querySelector('.close-button');
            closeButton.addEventListener('click', () => {
                reviewExpandedContainer.style.display = 'none'; // Hide the expanded review
            });
        } else {
            console.error("No review found for the given reviewId.");
        }
    }
});

// References to the search bar and button
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

// Function to render filtered reviews
function renderFilteredReviews(filteredReviews) {
    mainContainerPage1.innerHTML = ''; // Clear existing cards
    if (filteredReviews.length === 0) {
        mainContainerPage1.innerHTML = '<p>No results found.</p>'; // Show message if no results
    } else {
        filteredReviews.forEach(review => {
            const reviewCardHTML = createReviewCard(review);
            mainContainerPage1.innerHTML += reviewCardHTML;
        });
    }
}

// Event listener for button click
searchButton.addEventListener('click', () => {
    const searchTerm = searchBar.value.toLowerCase().trim();

    // Filter reviews based on search term
    const filteredReviews = reviews.filter(review => {
        // Check if the title, creator, tags, or previewText includes the search term
        return (
            review.title.toLowerCase().includes(searchTerm) ||
            review.creator.toLowerCase().includes(searchTerm) ||
            review.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            review.previewText.some(text => text.toLowerCase().includes(searchTerm))
        );
    });

    // Render filtered reviews
    renderFilteredReviews(filteredReviews);
});

