import Typewriter from "typewriter-effect";
import "./TypeWriter.css";

const getExperienceYears = () => {
  const thisYear = new Date().getFullYear();
  const start = new Date("01.10.2018").getFullYear();
  return thisYear - start;
};

const renderLine = (text) => `<span class="Typewriter-Text">${text}</span>`;

const TypeWriter = () => {
  return (
    <Typewriter
      delay={-1}
      onInit={(typewriter) => {
        typewriter
          .typeString(renderLine("Maria Tiurina<br>"))
          .typeString(renderLine("Full-stack software developer<br>"))
          .typeString(
            renderLine(
              `Coding experience: ${getExperienceYears()} years`
            )
          )
          .start();
      }}
    />
  );
};

export default TypeWriter;
