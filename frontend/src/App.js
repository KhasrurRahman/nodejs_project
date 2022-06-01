import "./App.css";
import Nav from "./component/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./component/footer";
import Signup from './component/Signup.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>All Products</h1>} />
          <Route path="/add" element={<h1>Add Products</h1>} />
          <Route path="/update" element={<h1>Update Products</h1>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
