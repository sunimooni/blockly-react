import React from 'react';
import propTypes from "prop-types";

// state 가 필요 없을 경우 function오로

function Movie({id, year, title, summary, poster}){
    return <div class = "movie">
        <img src={poster} alt={title} title={title}></img>
        <div class="movie_data">
            <h3 class="movie_title">{title}</h3>
            <h5 class="movie_year">{year}</h5>
            <p class="movie_summary">{summary}</p>
        </div>
    </div>;
}

Movie.propTypes = {
    id : propTypes.number.isRequired,
    year : propTypes.number.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    poster : propTypes.string.isRequired
};

export default Movie;