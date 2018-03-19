/*jshint esversion: 6 */
import React from 'react';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import AppSidebar from "components/AppSidebar";
import './styles.css';
import {fetchMovies, searchMovie} from "../../api";

export default class App extends React.Component {
    state = {
        moviesList: [],
        watchlist: JSON.parse(localStorage.getItem('watchlist')) || []
    };

    componentDidMount() {
        this.getMoviesByCategory('popular');
    };

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('watchlist', JSON.stringify(nextState.watchlist));
    }

    getMoviesByCategory = (category) => {
        fetchMovies(category).then(data => {
            this.setState({moviesList: data});
        });
    };

    handleMovieSearch = query => {
        searchMovie(query).then(data => {
            this.setState({moviesList: data});
        });
    };

    handleAddMovie = movie => {
        this.includeMovie = this.state.watchlist.filter(elem => elem.id === movie.id).length;

        if (!this.includeMovie) {
            this.setState(prevState => ({
                watchlist: [...prevState.watchlist, movie],
            }))
        }
    };

    handleDeleteMovie = id => {
        this.setState(prevState => ({
            watchlist: prevState.watchlist.filter(movie => movie.id !== id)
        }));
    };

    render() {
        const {moviesList, watchlist} = this.state;
        return (
            <div className="App">
                <Header text="movie mate"> </Header>
                <div className="App__body">
                    <AppSidebar className="App__sidebar" watchlist={watchlist} onWatchCardClick={this.handleDeleteMovie}
                                onSearch={this.handleMovieSearch} onCategorySearch={this.getMoviesByCategory}/>
                    <MovieList movies={moviesList} onCardClick={this.handleAddMovie}/>
                </div>
            </div>
        )
    }
}