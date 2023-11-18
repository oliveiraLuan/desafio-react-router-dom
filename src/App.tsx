import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import AboutUs from "./routes/AboutUs";
import NotFound from "./routes/NotFound";


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
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  </>)
}

export default App
