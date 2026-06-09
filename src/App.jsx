import { useState } from "react";
import Loader from "./Components/Loader";

import Hero from "./Components/Hero";
import ProfessionalJourney from "./Components/ProfessionalJourney";
import HeroText from "./Components/HeroText";
import Navbar from "./Components/Navbar";
import ProgressBar from "./Components/ProgressBar";
import Achivement from "./Components/Achivement";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Provider store={store}>
        {/* Loader */}
        {loading && <Loader onFinish={() => setLoading(false)} />}

        {/* Main Portfolio */}
        {!loading && (
          <div className="bg-[#020817]">
            <Navbar />

            <section id="home">
              <HeroText />
            </section>

            <ProgressBar />

            <section id="experience">
              <ProfessionalJourney />
            </section>

            <section id="achievements">
              <Achivement />
            </section>

            <section id="skills">
              <Skills />
            </section>

            <section id="projects">
              <Projects />
            </section>

            <section id="contact">
              <Social />
            </section>
          </div>
        )}
      </Provider>
    </>
  );
}

export default App;
