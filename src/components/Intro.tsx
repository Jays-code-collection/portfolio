import Typewriter from "./TypeWriter";
import "./_Intro.scss";

const Intro = () => (
  <div className="intro-container">
    <Typewriter className="intro-title" text="Jay Sharma" />
    <div className="intro-description">
      Hi I'm Jay, a full stack Software Engineer working for Bloomberg in their
      London office. I love learning new programming languages and am currently
      trying to build a compiler using Rust.
    </div>
  </div>
);

export default Intro;
