import "./components/navbar.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar";

//Pages
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};



function App() {

  return (
    <>

      <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={Home} />
            <Route path="/about" element={About} />
            <Route path="/blog" element={Blog} />
            <Route path="/contact" element={Contact} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App