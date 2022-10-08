import { elastic as BurgerMenu } from "react-burger-menu";
import './Menu.css';

const Menu = () => {
  return (
    <BurgerMenu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      <a id="about" className="menu-item" href="#/about">
      About Me
      </a>
      <a id="career" className="menu-item" href="#/career">
      My Career
      </a>
      <a id="about" className="menu-item" href="#/projects">
      Project References
      </a>
      <a id="contact" className="menu-item" href="#/contact">
        Contact
      </a>
    </BurgerMenu>
  );
};

export default Menu;
