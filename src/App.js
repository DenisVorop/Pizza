import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Home from "./Components/Main/Home";
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
