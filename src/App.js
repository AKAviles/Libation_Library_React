import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./css/containers.css";

function App() {
  return (
    <body className='main-body'>
      <BrowserRouter>
        <article>
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        </article>
      </BrowserRouter>
    </body>
  );
}

export default App;
