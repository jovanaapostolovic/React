import { useState } from "react";
import "./App.css";
import CinemaList from "./components/CinemaList";
import MovieList from "./components/MovieList";
import MovieListWithoutContext from "./components/MovieListWithoutContext";
import Prices from "./components/Prices";
import PricesWithoutContext from "./components/PricesWithoutContext";
import CinemaProvider from "./context/CinemaProvider";
import MovieProvider from "./context/MovieProvider";

const initialState = [
  {
    name: "Harry Potter",
    price: "700",
    id: 0,
  },
  {
    name: "Lotr",
    price: "900",
    id: 1,
  },
  {
    name: "Batman",
    price: "500",
    id: 2,
  },
];

function App() {
  const [state, setState] = useState(initialState);
  return (
    <div className="App">
      <CinemaProvider>
        <CinemaList />
        <MovieProvider>
          <MovieList />
          <Prices />
        </MovieProvider>
      </CinemaProvider>
      <br />
      <br />
      <strong> Without context, only using props:</strong>
      <br />
      <MovieListWithoutContext moviescopy={state} />
      <PricesWithoutContext moviescopy={state} />
    </div>
  );
}

export default App;