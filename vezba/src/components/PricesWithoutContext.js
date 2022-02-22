import React from "react";

const PricesWithoutContext = ({ moviescopy }) => {
  return (
    <div>
      Prices without context
      {moviescopy.map((movie) => (
        <p key={movie.id}>{movie.price} </p>
      ))}
    </div>
  );
};

export default PricesWithoutContext;