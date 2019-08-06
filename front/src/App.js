import React from 'react';

function Food({ name, picture, rating }){
  return <div>
    <h2>i like {name}</h2>
    <p>{rating}/5.0</p>
    <img src = {picture} alt={name}></img>
  </div>
}

const foodILike = [
  {
    id : "1",
    name: "kimchi",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fit,w_960/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F05%2Fd0be187452b0d9e24622a2e76e1853915a622988.jpeg" ,
    rating :4.9
  }, 
  {
    id : "2",
    name: "kimchi2",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fit,w_960/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F05%2Fd0be187452b0d9e24622a2e76e1853915a622988.jpeg",
    rating : 5.0
  },
  {
    id : "3",
    name : "kimchi3",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fit,w_960/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F05%2Fd0be187452b0d9e24622a2e76e1853915a622988.jpeg",
    rating : 2.2
  }
]

Food.propTypes = {
  name : propTypes.string.isRequired,
  picture : propTypes.string.isRequired,
  rating : propTypes.number.isRequired
};

function renderFood(dish){
  return <Food 
    key = {dish.id} 
    name={dish.name} 
    picture={dish.image} 
    rating={dish.rating} 
  / >
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
