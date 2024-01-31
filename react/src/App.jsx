import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./Components/HomeComponent"
import QuizComponent from "./Components/QuizComponent"
import ResultComponent from "./Components/ResultComponent"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/Quiz" element={<QuizComponent />} />
        <Route path="/Result" element={<ResultComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
