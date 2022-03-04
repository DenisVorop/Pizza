import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home";
import NotFound from "./Components/NotFound/NotFound";
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setPizzas } from "./Redux/Reducers/PizzasReducer";

//========================================================================================================================================================

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
