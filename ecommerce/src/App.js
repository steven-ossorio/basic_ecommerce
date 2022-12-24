import { Routes, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./routes/authentication/authentication";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
