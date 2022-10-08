import SummaryCard from "../components/SummaryCard";
import TypeWriter from "../components/TypeWriter";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="ProfileImageWrapper">
        <TypeWriter />
      </div>
      <SummaryCard />
    </>
  );
};

export default HomePage;
