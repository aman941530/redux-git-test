import logo from "./logo.svg";
import "./App.css";
import ProductPage from "./components/ProductPage.js";
import Counter from "./components/Counter.js"
import Header from "./components/Header.js"

function App() {
  return (
    <>
      <Header/>
      <ProductPage />
      <Counter />
    </>
  );
}

export default App;
