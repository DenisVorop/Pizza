import Home from './Pages/Home';
import Cart from "./Pages/Cart";

import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";

import { Route, Routes } from "react-router-dom";

//========================================================================================================================================================

function App() {

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
