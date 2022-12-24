import React from 'react';


export default function MovieCard({item}) {


  return (
    <div className="movieCard">
      <h2>
        {item.title}
      </h2>
      <img src={item.posterURL} alt={item.title} />
      <p>{item.description}</p>
      <h3>{item.rate}</h3>
    </div>

  );
}