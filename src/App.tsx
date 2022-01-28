import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import ErrorPage from "./containers/ErrorPage";

function App() {
  return (
    <section className="menu section">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
