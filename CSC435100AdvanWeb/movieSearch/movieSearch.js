document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "3588abcf";
    const API_URL = "https://www.omdbapi.com/";

    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const loadingElement = document.getElementById("loading");
    const errorElement = document.getElementById("error");
    const moviesContainer = document.getElementById("movies");
    const movieDetailsContainer = document.getElementById("movieDetails");

    // Function to fetch movies based on search query
    async function searchMovies() {
        const query = searchInput.value.trim();
        if (!query) return;
        
        loadingElement.style.display = "block";
        errorElement.textContent = "";
        moviesContainer.innerHTML = "";
        movieDetailsContainer.innerHTML = "";

        try {
            const response = await fetch(`${API_URL}?s=${query}&apikey=${API_KEY}`);
            const data = await response.json();
            
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                errorElement.textContent = data.Error;
            }
        } catch (err) {
            errorElement.textContent = "Failed to fetch data. Please try again.";
        } finally {
            loadingElement.style.display = "none";
        }
    }

    // Function to display movies
    function displayMovies(movies) {
        moviesContainer.innerHTML = "";
        movies.forEach(movie => {
            const movieElement = document.createElement("div");
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}" width="100">
                <h2>${movie.Title}</h2>
                <p>${movie.Year}</p>
                <button onclick="fetchMovieDetails('${movie.imdbID}')">View Details</button>
            `;
            moviesContainer.appendChild(movieElement);
        });
    }

    // Function to fetch and display movie details
    async function fetchMovieDetails(id) {
        loadingElement.style.display = "block";
        errorElement.textContent = "";
        movieDetailsContainer.innerHTML = "";
        
        try {
            const response = await fetch(`${API_URL}?i=${id}&apikey=${API_KEY}`);
            const data = await response.json();
            
            if (data.Response === "True") {
                movieDetailsContainer.innerHTML = `
                    <h2>${data.Title}</h2>
                    <p><strong>Year:</strong> ${data.Year}</p>
                    <p><strong>Genre:</strong> ${data.Genre}</p>
                    <p><strong>Director:</strong> ${data.Director}</p>
                    <p><strong>Actors:</strong> ${data.Actors}</p>
                    <p><strong>Plot:</strong> ${data.Plot}</p>
                `;
            } else {
                errorElement.textContent = data.Error;
            }
        } catch (err) {
            errorElement.textContent = "Failed to fetch data. Please try again.";
        } finally {
            loadingElement.style.display = "none";
        }
    }

    searchButton.addEventListener("click", searchMovies);
});
