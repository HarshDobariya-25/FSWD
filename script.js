let movieCollection = [
    { title: "The Matrix", genre: "Sci-Fi", rating: 8.7, releaseYear: 1999 },
    { title: "Inception", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", rating: 9.0, releaseYear: 2008 },
    { title: "Forrest Gump", genre: "Drama", rating: 8.8, releaseYear: 1994 },
    { title: "The Lion King", genre: "Animation", rating: 8.5, releaseYear: 1994 }
];

// Add movie function
function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    movieCollection.push(newMovie);
    console.log(`${title} has been added to the collection.`);
    updateUI();
}

// List movies by genre
function listMoviesByGenre() {
    const genreFilter = document.getElementById("genreFilter").value.toLowerCase();
    const filteredMovies = movieCollection.filter(movie => movie.genre.toLowerCase().includes(genreFilter));
    
    const moviesList = document.getElementById("moviesByGenre");
    moviesList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = `${movie.title} (${movie.releaseYear}) - Rating: ${movie.rating}`;
        moviesList.appendChild(listItem);
    });
}

// Find the highest-rated movie
function findHighestRatedMovie() {
    const highestRatedMovie = movieCollection.reduce((highest, current) => {
        return current.rating > highest.rating ? current : highest;
    });

    const highestRatedDiv = document.getElementById("highestRatedMovie");
    highestRatedDiv.textContent = `${highestRatedMovie.title} (${highestRatedMovie.releaseYear}) - Rating: ${highestRatedMovie.rating}`;
}

// Get all movie titles
function getAllMovieTitles() {
    const titles = movieCollection.map(movie => movie.title);
    const movieTitlesList = document.getElementById("movieTitles");
    movieTitlesList.innerHTML = '';
    titles.forEach(title => {
        const listItem = document.createElement("li");
        listItem.textContent = title;
        movieTitlesList.appendChild(listItem);
    });
}

// Filter movies released after a specific year
function getMoviesAfterYear() {
    const yearFilter = document.getElementById("yearFilter").value;
    const filteredMovies = movieCollection.filter(movie => movie.releaseYear > yearFilter);
    
    const moviesAfterYearList = document.getElementById("moviesAfterYear");
    moviesAfterYearList.innerHTML = '';
    filteredMovies.forEach(movie => {
        const listItem = document.createElement("li");
        listItem.textContent = `${movie.title} (${movie.releaseYear})`;
        moviesAfterYearList.appendChild(listItem);
    });
}

// Update the UI when a new movie is added
function updateUI() {
    listMoviesByGenre();
    findHighestRatedMovie();
    getAllMovieTitles();
}

// Handle form submission
document.getElementById("movie-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const releaseYear = parseInt(document.getElementById("releaseYear").value);

    addMovie(title, genre, rating, releaseYear);

    // Clear the form
    document.getElementById("movie-form").reset();
});

// Initialize the UI
updateUI();
