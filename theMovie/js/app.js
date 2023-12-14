const apiKey = '76502ece07b8b73be63cbfb592b3860d';
const moviesGrid = document.getElementById('moviesGrid');
const currentPageElement = document.getElementById('currentPage');
let currentPage = 1;

async function fetchMovies(page) {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`);
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}

function buildGrid(movies) {
    moviesGrid.innerHTML = '';
    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'pelicula';
        movieCard.innerHTML = `<img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                              <p class="titulo">${movie.title}</p>`;
        moviesGrid.appendChild(movieCard);
    });
}

function updatePageNumber() {
    currentPageElement.textContent = currentPage;
}

function changePage(delta) {
    currentPage += delta;
    if (currentPage < 1) {
        currentPage = 100;
    } else if (currentPage > 100) {
        currentPage = 1;
    }
    fetchDataAndBuildGrid();
}

async function fetchDataAndBuildGrid() {
    const movies = await fetchMovies(currentPage);
    buildGrid(movies);
    updatePageNumber();
}

// Inicializar la página
fetchDataAndBuildGrid();
