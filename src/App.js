import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Pages/Home";

function App() {

  return (
    <div className="bg-gray-50">
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
