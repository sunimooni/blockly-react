import React from 'react';
import propTypes from "prop-types";

// state 가 필요 없을 경우 function오로

function Movie({id, year, title, summary, poster, genres}){
    return <div className = "movie">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summary}</p>
	    <ul className="genres">
		{genres.map((genre, index) => (
			<li key={index} className="genres_genre">{genre}</li> 
		))}
	    </ul>
        </div>
    </div>;
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired
};

export default Movie;
