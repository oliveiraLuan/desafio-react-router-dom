import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import NotFound from "./routes/NotFound";
import Electronics from "./routes/Products/Electronics";
import Computers from "./routes/Products/Computers";
import Books from "./routes/Products/Books";
import About from "./routes/About";


function App() {

  return (
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/products" element={<Products/>}>
                    <Route index element={<Computers/>}/>
                    <Route path="computers" element={<Computers/>}/>
                    <Route path="electronics" element={<Electronics/>}/>
                    <Route path="books" element={<Books/>}/>
                </Route>
                <Route path="/about" element={<About/>} />
            </Route>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  </>)
}

export default App
