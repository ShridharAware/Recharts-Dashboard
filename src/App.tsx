import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import WidgetsChecklist from "./components/WidgetsChecklist/WidgetsChecklist";
import "./App.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { widgets } = useContext(AppContext);

  return (
    <div>
      <Navbar />
      {widgets && <WidgetsChecklist />}
      <Home />
    </div>
  );
}

export default App;
