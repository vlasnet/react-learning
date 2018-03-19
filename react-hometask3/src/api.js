let apiKey = "4d6c7059a832270165f3295710165cb6";

export function fetchMovies(query) {
    return fetch(`https://api.themoviedb.org/3/movie/${query}?api_key=${apiKey}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
        })
        .then(json => {
            return json.results;
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}

export function searchMovie(query) {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error fetching data. Response status: " + response.status + " : " + response.statusText);
        })
        .then(json => {
            return json.results;
        })
        .catch(err => {
            console.error("Error: ", err);
        });
}