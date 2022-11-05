import { MainPage } from "./pages/main";
import LoginPage from "./pages/login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Finish } from "./components/steps/Finish";
import { useEffect, useState } from "react";
import { PublicPage } from "./pages/public";
import { OrderServicePage } from "./pages/orders";
import { First } from "./components/steps/First";
import { Second } from "./components/steps/Second";
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
            <Route path="/login" element={<LoginPage setAuth={setAuth} isAuthenticated={isAuthenticated}/>} />
            <Route path="/orders" element={<OrderServicePage isAuthenticated={isAuthenticated} />}>
               <Route path="/orders/step/:stepId" element = {<First />} />
               <Route path="/orders/step/:stepId" element = {<Second />} />
               <Route path="/orders/step/:stepId" element = {<Finish/>} />
              </Route>
          <Route path="/main" element={<MainPage isAuthenticated={isAuthenticated} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;