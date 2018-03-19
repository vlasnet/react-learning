import React from 'react';
import './styles.css';

export default class MovieForm extends React.Component {
    render() {
        let form = null;
        let title = null;
        let description = null;
        let rating = null;
        let genres = [];

        const _handleFormSubmit = evt => {
            evt.preventDefault();

            const newCard = {
                title: title.value,
                description: description.value,
                rating: rating.value,
                genres: [...genres]
            };

            if (newCard.title && newCard.description) {
                // console.log(JSON.stringify(newCard));
                this.props.onFormSubmit(newCard);
                form.reset();
                genres = [];
            } else {
                alert('Please fill out all form fields!');
            }
        };

        const _handleCheckboxChanges = evt => {
            const target = evt.target;
            const value = evt.target.value;
            if (target.checked) {
                genres = [...genres, value];
            } else {
                genres = genres.filter((genre) => {
                  return genre !== value;
                });
            }
        };

        return (
            <form className="MovieForm" onSubmit={_handleFormSubmit} ref={node => (form = node)}>
                <label htmlFor="" className="MovieForm__label">Title
                    <input
                        type="text"
                        className="MovieForm__input"
                        ref={node => {
                            title = node;
                        }}
                    />
                </label>
                <label htmlFor="" className="MovieForm__label">Description
                    <textarea
                        className="MovieForm__txtarea"
                        rows="8"
                        ref={node => {
                            description = node;
                        }}
                    />
                </label>
                <label htmlFor="" className="MovieForm__label">Rating
                    <select
                        className="MovieForm__input"
                        ref={node => {
                            rating = node;
                        }}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </label>
                <div className="MovieForm__genres" onClick={_handleCheckboxChanges}>
                    <label>
                        <input
                            type="checkbox"
                            value="drama"
                            defaultChecked={false}
                        />
                        drama
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="action"
                            defaultChecked={false}
                        />
                        action
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="comedy"
                            defaultChecked={false}
                        />
                        comedy
                    </label>
                </div>
                <button className="MovieForm__submit" type="submit">submit</button>
            </form>
        )
    }
}