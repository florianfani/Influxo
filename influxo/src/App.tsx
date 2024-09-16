import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="w-full">
      <div className="">
        <Navbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
