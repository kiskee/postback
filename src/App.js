import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form1 from "./components/Form1";
import Job from "./components/Job";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";
import Success from "./components/Success";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form1" element={<Form1 />} exact></Route>
          <Route path="/form2" element={<Form2 />} exact></Route>
          <Route path="/form3" element={<Form3 />} exact></Route>
          <Route path="/success" element={<Success />} exact></Route>
          <Route path="/" element={<Job />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
