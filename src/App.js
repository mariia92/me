import React from "react";
import HomePage from "./pages/HomePage";
import CvPage from "./pages/CvPage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const Pages = [
    { hash: "", page: HomePage },
    { hash: "#/about", page: HomePage },
    { hash: "#/career", page: CvPage },
  ];

  const [currentHash, setCurrentHash] = React.useState("");

  const getPageToRender = () =>
    Pages.find((p) => p.hash === window.location.hash)?.page || HomePage;

  let PageToRender = getPageToRender();

  React.useEffect(() => {
    PageToRender = getPageToRender();
  }, [currentHash]);

  const navigationHook = (hash) => {
    window.location.href = `${window.location.href.split("#")[0]}${hash}`;
    setCurrentHash(hash);
  };

  return (
    <div className="PageContainer" id="outer-container">
      <Menu navigationHook={navigationHook} />
      <main id="page-wrap">
        <PageToRender />
        <Footer />
      </main>
    </div>
  );
};
export default App;
