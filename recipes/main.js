import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Create recipe template to dynamically display a recipe
function recipeTemplate(recipe) {
    return `
    <div class="recipe-card">
        <div class="image-contaner">
            <img src="${recipe.image}" alt="${recipe.name}">
        </div>
        <div class="discription-contaner">
            <section class="tags">
                ${recipe.tags.map(tag => `<h3 class="tag-text">${tag}</h3>`).join('')}
            </section>
            <h2 class="name">${recipe.name}</h2>
            <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars"
            >
                ${'⭐'.repeat(recipe.rating)}${'☆'.repeat(5 - recipe.rating)}
            </span>
            <p class="description">${recipe.description}</p>
        </div>
    </div>`;
}

// Function to render recipes
function renderRecipes(filteredRecipes) {
    const main = document.querySelector('main');
    main.innerHTML = filteredRecipes.map(recipeTemplate).join('');
}

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchInput) || 
        recipe.description.toLowerCase().includes(searchInput) || 
        recipe.tags.some(tag => tag.toLowerCase().includes(searchInput))
    );

    if (filteredRecipes.length > 0) {
        renderRecipes(filteredRecipes);
    } else {
        document.querySelector('main').innerHTML = '<p>No recipes found. Try a different search!</p>';
    }
}

// Function to display one random recipe initially
function displayRandomRecipe() {
    const randomRecipe = getRandomListEntry(recipes);
    renderRecipes([randomRecipe]); // Render only the random recipe
}

// Event listeners for search input and button
document.getElementById('search-button').addEventListener('click', handleSearch);

// Display one random recipe on page load
displayRandomRecipe();

