import { useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import About from "./components/About";
import { Email } from "./components/Email";
import GetInTouch from "./components/GetInTouch";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function App() {
  const [refAbout, inViewAbout] = useInView({ threshold: 0.5 });
  const [refSkills, inViewSkills] = useInView({ threshold: 0.5 });
  const [refWork, inViewWork] = useInView({ threshold: 0.5 });
  const [refGetInTouch, inViewGetInTouch] = useInView({ threshold: 0.5 });

  const aboutProps = useSpring({
    opacity: inViewAbout ? 1 : 0,
    from: { opacity: 0 },
  });
  const skillsProps = useSpring({
    opacity: inViewSkills ? 1 : 0,
    from: { opacity: 0 },
  });
  const workProps = useSpring({
    opacity: inViewWork ? 1 : 0,
    from: { opacity: 0 },
  });
  const getInTouchProps = useSpring({
    opacity: inViewGetInTouch ? 1 : 0,
    from: { opacity: 0 },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-screen flex justify-center items-center bg-[#0a192f] ">
          <Dna height="100" width="100" />
        </div>
      ) : (
        <div div className="bg-[#0a192f]">
          <Navbar />
          <Main />
          <animated.div ref={refAbout} style={aboutProps}>
            <About />
          </animated.div>
          <animated.div ref={refSkills} style={skillsProps}>
            <Skills />
          </animated.div>
          <animated.div ref={refWork} style={workProps}>
            <Work />
          </animated.div>
          <animated.div ref={refGetInTouch} style={getInTouchProps}>
            <GetInTouch />
            <Email />
          </animated.div>
        </div>
      )}
    </>
  );
}

export default App;
