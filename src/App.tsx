import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <div className="fixed w-full z-10 pl-20 bg-white">
        <Navbar />
      </div>
      <div className="relative min-h-screen w-full bg-white text-black flex">
        <Sidebar />
        <div className="pt-20 w-full bg-customLightPurple/5">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
