
import "./App.css";
import CounterReducer from "./components/CounterReducer";
import BookContextProvider from "./context/BookContext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <CounterReducer />

      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;