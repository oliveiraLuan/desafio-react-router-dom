import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import AboutUs from "./routes/AboutUs";


function App() {

  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/aboutus" element={<AboutUs/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  </>)
}

export default App
