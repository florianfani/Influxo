import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ContactForm from "./pages/ContactUs";
import About from "./pages/About";
import "./App.css";
import Projects from "./pages/Projects";
import SingleProductPage from "./pages/SingleProductPage";
import Home from "./pages/Home";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";

function App() {
  return (
    <Router>
      <div className="w-full">
        <div className="md:fixed w-full md:z-50">
          <Navbar />
        </div>
        <div className="md:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<SingleProductPage />} />
            <Route path="/services" element={<Services />} /> {/* Contact Page */}
            <Route path="/services/:slug" element={<SingleService />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
