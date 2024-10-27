const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	},
	{
		id: 4,
		title: "Revenant Gun (3) (The Machineries of Empire)",
		date: "June 12, 2018",
		description:
		"Shuos Jedao is awake... ...and nothing is as he remembers. He's a teenager, a cadet-a nobody-in the body of an old man; a general in command of an elite force. And he's the most feared, and reviled, man in the galaxy.",
		imgSrc:
		"https://m.media-amazon.com/images/I/81S4snnVYwL._SY466_.jpg",
		imgAlt: "Book cover for Revenant Gun",
		ages: "15-21",
		genre: "Science Fiction",
		stars: "⭐⭐⭐⭐"
		}
];

function generateReviews() {
	const mainContainer = document.querySelector('.blog_posts');

	mainContainer.innerHTML = '';

	articles.forEach((article) => {
		const reviewLink = document.createElement('a');
		reviewLink.classList.add('review_preview');
		reviewLink.href = '#'; // Replace with the actual link once available

		const previewLeft = document.createElement('div');
		previewLeft.classList.add('preview_left');

		const title = document.createElement('h2');
		title.classList.add('book_title');
		title.textContent = article.title;
		previewLeft.appendChild(title);

		const releaseDate = document.createElement('p');
		releaseDate.classList.add('release_date');
		releaseDate.textContent = article.date;
		previewLeft.appendChild(releaseDate);

		const genre = document.createElement('p');
		genre.classList.add('genre');
		genre.textContent = article.genre;
		previewLeft.appendChild(genre);

		const ages = document.createElement('p');
		ages.classList.add('ages');
		ages.textContent = article.ages;
		previewLeft.appendChild(ages);

		const stars = document.createElement('p');
		stars.classList.add('stars');
		stars.textContent = article.stars;
		previewLeft.appendChild(stars);

		const description = document.createElement('p');
		description.classList.add('book_disc');
		description.textContent = article.description;
		previewLeft.appendChild(description);

		reviewLink.appendChild(previewLeft);

		const previewRight = document.createElement('div');
		previewRight.classList.add('preview_right');

		const bookCover = document.createElement('img');
		bookCover.classList.add('book_cover');
		bookCover.src = article.imgSrc;
		bookCover.alt = article.imgAlt;
		previewRight.appendChild(bookCover);

		reviewLink.appendChild(previewRight);

		mainContainer.appendChild(reviewLink);
	});
}

document.addEventListener('DOMContentLoaded', generateReviews);