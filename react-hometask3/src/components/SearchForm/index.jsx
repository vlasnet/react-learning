import React, {Component} from 'react';
import './styles.css';

export default class SearchForm extends Component {
    state = {
        query: null,
    };

    onSubmit = evt => {
        evt.preventDefault();
        this.props.onSearch(this.state.query);
    };

    onChange = evt => {
        this.setState({query: evt.target.value});
    };

    render() {
        return (
            <div>
                <form className="SearchForm" onSubmit={this.onSubmit}>
                    <input type="text" className="SearchForm__input" placeholder="Search for movies by name..."
                           onChange={this.onChange}/>
                    <button className="SearchForm__btn">Search</button>
                </form>
            </div>
        )
    }

}

// export default SearchForm;
