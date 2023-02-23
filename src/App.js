import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Single from "./Pages/Single";
import Search from "./Components/Search";

import Login from "./Pages/Login";
import { AuthContext } from "./Context/AuthContext";
import { useContext } from "react";
import Films from "./Pages/Category/Films";
import Serials from "./Pages/Category/Serials";
import Popular from "./Pages/Category/Popular";
import Listem from "./Pages/Category/Listem";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      {user?.isLogin ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:search" element={<Search />} />
            <Route path="/movies/:name" element={<Single />} />
            <Route path="/films" element={<Films />} />
            <Route path="/series" element={<Serials />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/listem" element={<Listem />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Login></Login>
      )}
    </div>
  );
}
export default App;
