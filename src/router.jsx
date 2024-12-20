import App from "./App";
import Home from "./pages/Home";
import Register from "./pages/register";
import Login from "./pages/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const RoutingComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default RoutingComponent;
