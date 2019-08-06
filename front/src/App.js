import React from 'react';

function Food({ name, picture }){
  return (
    <h2>i like {name}</h2>
    <img src={picture}></img>
  );
}

const foodILike = [
  {
    name: "kimchi",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fit,w_960/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F05%2Fd0be187452b0d9e24622a2e76e1853915a622988.jpeg" 
  }, 
  {
    name: "kimchi2",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fit,w_960/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F05%2Fd0be187452b0d9e24622a2e76e1853915a622988.jpeg"
  },
  {
    name : "kimchi3",
    image : "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fit,w_960/https%3A%2F%2Fstorage.googleapis.com%2Fgen-atmedia%2F3%2F2013%2F05%2Fd0be187452b0d9e24622a2e76e1853915a622988.jpeg"
  }
]



function App() {
  return (
    <div>
      <h1>hello</h1>
      {foodILike.map( dish => (
        <Food name = {dish.name} picture = {dish.image} />
        ))}
    </div>
  );
}

export default App;
