import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";


function App() {

  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
                <Route path="/products"/>
                <Route path="/aboutus"/>
            </Route>
        </Routes>
    </BrowserRouter>
  </>)
}

export default App
