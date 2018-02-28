import React from 'react';
import Header from'components/Header';
import MovieCard from 'components/MovieCard';
import MovieForm from 'components/MovieForm';
import './styles.css';
import movies from 'movieDB';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header text="movie mate"></Header>
                <div className="App__body">
                    <div className="MovieList">
                        {movies.map(movie => <MovieCard key={movie.id}{...movie} />)}
                    </div>
                    <MovieForm />
                </div>
            </div>
        )
    }
}

export default App;