import { useState } from "react";
import { elastic as BurgerMenu } from "react-burger-menu";
import "./Menu.css";

const Menu = ({ navigationHook }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateAndCloseSideBar = (hash) => {
    setIsMenuOpen(false);
    navigationHook(hash);
  };
  return (
    <BurgerMenu
      right
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      isOpen={isMenuOpen}
      onOpen={handleIsOpen}
      onClose={handleIsOpen}
    >
      <a
        id="about"
        className="menu-item"
        href="#/about"
        onClick={() => navigateAndCloseSideBar("#/about")}
      >
        About Me
      </a>
      <a
        id="career"
        className="menu-item"
        href="#/career"
        onClick={() => navigateAndCloseSideBar("#/career")}
      >
        My Career
      </a>
      <a
        id="about"
        className="menu-item"
        href="#/projects"
        onClick={() => navigateAndCloseSideBar("#/projects")}
      >
        Project References
      </a>
      <a
        id="contact"
        className="menu-item"
        href="#/contact"
        onClick={() => navigateAndCloseSideBar("#/contact")}
      >
        Contact
      </a>
    </BurgerMenu>
  );
};

export default Menu;
