import { Routes, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./routes/authentication/authentication";
import Checkout from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Shop from "./routes/shop/shop.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="signin" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
