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
import { NotFound } from "./pages/NotFound";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/contact", element: <ContactForm /> },
  { path: "/projects", element: <Projects /> },
  { path: "/projects/:id", element: <SingleProductPage /> },
  { path: "/services", element: <Services /> },
  { path: "/services/:slug", element: <SingleService /> },
  { path: "/about", element: <About /> }
];

function AppContent() {

  return (
    <div className="w-full">
      <div className="md:fixed w-full md:z-50">
        <Navbar />
      </div>
      <div className="md:pt-24">
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
