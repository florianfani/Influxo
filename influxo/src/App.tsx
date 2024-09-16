import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ContactForm from "./pages/ContactUs";
import "./App.css";
// You can import other pages here as needed
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <div className="w-full">
        <div className="">
          <Navbar />
        </div>

        <Routes>
          {/* Define routes here */}
          {/* <Route path="/" element={<HomePage />} /> Home Page */}
          <Route path="/contact" element={<ContactForm />} /> {/* Contact Page */}
          {/* <Route path="/about" element={<AboutPage />} /> About Page */}
          {/* Add other routes as needed */}
        </Routes>

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
