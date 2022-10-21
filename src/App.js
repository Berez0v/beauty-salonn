import { MainPage } from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { PublicPage } from "./pages/PublicPage";
import { OrderServicePage } from "./pages/OrderServicePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem('auth')) || false
  );

  const setAuth = (value) => {
    setIsAuthenticated(value);
  };

  useEffect(() => {
    localStorage.setItem("auth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PublicPage />} />
          <Route path="/LoginPage" element={<LoginPage setAuth={setAuth} />} />
          <Route path="/OrderServicePage" element={<OrderServicePage isAuthenticated={isAuthenticated} />} />
          <Route path="/MainPage" element={<MainPage isAuthenticated={isAuthenticated} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;