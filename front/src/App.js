import React from 'react';

function Food({fav}){
  return (<h2>i like {fav}</h2>);
}

function App() {
  return (
    <div>
      <h1>hello</h1>
      <Food fav ="kimchi" />
      <Food fav ="ramen" />
      <Food fav ="kimbam" />
      <Food fav ="ddukguk" />
    </div>
  );
}

export default App;
