import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WidgetsChecklist from "./components/WidgetsChecklist/WidgetsChecklist";
import "./App.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Footer from "./components/Footer/Footer";

function App() {
  const { widgets } = useContext(AppContext);

  return (
    <div>
      <Navbar />
      {widgets && <WidgetsChecklist />}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
