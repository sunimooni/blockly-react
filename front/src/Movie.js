import React from 'react';
import PropTypes from "prop-types";

// state 가 필요 없을 경우 function오로

function Movie({id, year, title, summary, poster}){
    return <h1>{title}</h1>;
}

Movie.PropTypes = {
    id : PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;