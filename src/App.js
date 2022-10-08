import React from "react";
import HomePage from "./pages/HomePage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const PageToRender = HomePage;
  const navigationHook = (hash) => {
    window.location.href = `${window.location.href.split("#")[0]}${hash}`;
  };
  return (
    <div className="PageContainer" id="outer-container">
      <Menu />
      <main id="page-wrap">
        <PageToRender navigationHook={navigationHook} />
        <Footer />
      </main>
    </div>
  );
};
export default App;
