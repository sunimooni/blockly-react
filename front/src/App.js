import React from 'react';

function food({fav}){
  return (<h2>i like {fav}</h2>);
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <food fav ="kimchi" />
      <food fav ="ramen" />
      <food fav ="kimbam" />
      <food fav ="ddukguk" />
    </div>
  );
}

export default App;
