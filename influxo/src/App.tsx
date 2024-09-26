import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ContactForm from "./pages/ContactUs";
import About from "./pages/About";
import "./App.css";
import Projects from "./pages/Projects";
import SingleProductPage from "./pages/SingleProductPage";
// You can import other pages here as needed
import Home from "./pages/Home";
import Services from "./pages/Services";
import SingleService from "./pages/SingleService";
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="w-full">
        <div className="md:fixed w-full md:z-50">
          <Navbar />
        </div>
        <div className="md:pt-24">
          <Routes>
            {/* Define routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactForm />} /> {/* Contact Page */}
            {/* <Route path="/" element={<HomePage />} /> Home Page */}
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/projects" element={<Projects />} /> {/* Contact Page */}
            <Route path="/projects/:id" element={<SingleProductPage />} />
            <Route path="/services" element={<Services />} /> {/* Contact Page */}
            <Route path="/services/:slug" element={<SingleService />} />
            {/* Contact Page */}
            <Route path="/about" element={<About />} />
            {/* Add other routes as needed */}
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
