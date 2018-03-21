/*jshint esversion: 6 */
import React from 'react';
import Header from 'components/Header';
import MovieList from 'components/MovieList';
import AppSidebar from "components/AppSidebar";
import SearchForm from 'components/SearchForm';
import SearchCategories from "components/SearchCategiries";
import Watchlist from "components/Watchlist";
import './styles.css';
import {searchMovieByName, searchMoviesByCategories} from "../../api";

export default class App extends React.Component {
    state = {
        moviesList: [],
        watchlist: [],
    };

    componentDidMount() {
        this.getMoviesByCategory('popular');
        if (localStorage.getItem('watchlist')) {
            this.setState({watchlist: JSON.parse(localStorage.getItem('watchlist'))})
        }
    };

    componentWillUpdate(nextProps, nextState) {
        if (this.state.watchlist.length !== nextState.watchlist.length) {
            localStorage.setItem('watchlist', JSON.stringify(nextState.watchlist));
        }
    }

    getMoviesByCategory = (category) => {
        searchMoviesByCategories(category).then(data => {
            this.setState({moviesList: data});
        });
    };

    handleMovieSearch = query => {
        if (query === null || query.trim() === "") {
            alert("Please insert movie name that you are looking for");
        } else {
            searchMovieByName(query).then(data => {
                this.setState({moviesList: data});
            });
        }
    };

    handleAddMovie = id => {
        let movie = this.state.moviesList.filter(item => item.id === id)[0];
        let includeMovie = this.state.watchlist.filter(elem => elem.id === movie.id).length;

        if (!includeMovie) {
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
                    <AppSidebar>
                        <SearchForm onSearch={this.handleMovieSearch}/>
                        <SearchCategories onCategorySearch={this.getMoviesByCategory}/>
                        <Watchlist watchlist={watchlist} onWatchCardClick={this.handleDeleteMovie}/>
                    </AppSidebar>
                    <MovieList movies={moviesList} onCardClick={this.handleAddMovie}/>
                </div>
            </div>
        )
    }
}