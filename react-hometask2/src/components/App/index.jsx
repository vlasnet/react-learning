import React from 'react';
import Header from'components/Header';
import MovieList from 'components/MovieList';
import MovieForm from 'components/MovieForm';
import v4 from 'uuid/v4';
import './styles.css';
import movies from 'movieDB';

export default class App extends React.Component {
    state = {
        moviesList: movies
    };
    onDeleteCard = id => {
        this.setState({
            moviesList: this.state.moviesList.filter(movie => movie.id !== id)
        });
    };

    onAddCard = card => {
        const movie = {
            id: v4(),
            title: card.title,
            description: card.description,
            rating: card.rating,
            genres: card.genres
        }

        this.setState({
            moviesList: [...this.state.moviesList, movie]
        });
    };

    render() {
        const { moviesList } = this.state;
        return (
            <div className="App">
                <Header text="movie mate"></Header>
                <div className="App__body">
                    <MovieList movies={moviesList} onCardClick={this.onDeleteCard} />
                    <MovieForm onFormSubmit={this.onAddCard}/>
                </div>
            </div>
        )
    }
}