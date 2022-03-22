import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useTypedSelector } from "../store/redux/rootReducer";
import { Layout } from "./pages/layout/Layout";
import { Login } from "./pages/login/Login";

function App() {
  const {auth, theme} = useTypedSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    let local = localStorage.getItem("auth");
    let themes = localStorage.getItem("theme");
    document.documentElement.setAttribute('data-theme', themes ? themes : theme)    
    if (auth.success || local === "true") {
      return navigate("/");
    } else if (
      auth.error ||
      auth.error === null ||
      local === "false" ||
      local === null
    ) {
      return navigate("/login");
    }
  }, [auth, navigate, theme]);

  return (
    <div className="app">
      <Routes>
        <Route index element={<Layout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
