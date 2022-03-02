import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home";
import NotFound from "./Components/NotFound/NotFound";
import axios from 'axios';
import { useEffect, useState } from "react";

function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('./db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home pizzas={pizzas}/>} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
