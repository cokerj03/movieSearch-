# movieSearch
# Movie Search App

This is a simple Movie Search application that allows users to search for movies using the OMDB API and view detailed information.

## Features
- Search for movies by title
- View detailed movie information including title, genre, director, actors, and plot
- Error handling for invalid searches and API failures
- Loading states while fetching data

## Setup Instructions

### Prerequisites
- A web browser (Chrome, Firefox, Edge, etc.)
- A text editor (Visual Studio Code recommended)
- Node.js (optional, for running a local development server)
- A valid OMDB API key (Get one from [OMDB API](https://www.omdbapi.com/apikey.aspx))

### Installation Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/movie-search-app.git
   ```
2. **Navigate to the project directory**:
   ```sh
   cd movie-search-app
   ```
3. **Open the project in Visual Studio Code**:
   ```sh
   code .
   ```
4. **Update API Key**:
   - Open `movieSearch.js`
   - Replace `const API_KEY = "3588abcf";` with your own API key from OMDB

5. **Run the project**:
   - Open `movieSearch.html` in a web browser
   - Or use a local server:
     ```sh
     npx serve .
     ```
   - Then open `http://localhost:5000` in your browser

## API Integration Details
- Uses the OMDB API to fetch movie data
- `https://www.omdbapi.com/?s=<movie-title>&apikey=<your_api_key>` for searching movies
- `https://www.omdbapi.com/?i=<movie-id>&apikey=<your_api_key>` for fetching movie details

## Known Limitations/Future Improvements
- Free OMDB API key has a daily request limit
- Could improve UI with additional styling and animations
- Add support for more advanced search filters (e.g., year, genre)

## Contributing
Feel free to submit issues and pull requests for improvements.

## License
This project is licensed under the MIT License.
