import { useState } from "react";
import { Provider } from "react-redux";

import Loader from "./Components/Loader";
import ProfessionalJourney from "./Components/ProfessionalJourney";
import HeroText from "./Components/HeroText";
import ProgressBar from "./Components/ProgressBar";
import Achivement from "./Components/Achivement";
// import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Social from "./Components/Social";
import TechSkills from "./components/tech_skills";
import { store } from "./store/store";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Provider store={store}>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <main className="w-full min-h-screen min-w-0 overflow-x-clip bg-[#020817]">
          <section id="home" className="w-full min-w-0">
            <HeroText />
          </section>

          <ProgressBar />

          <section id="experience" className="w-full min-w-0">
            <ProfessionalJourney />
          </section>

          <section id="achievements" className="w-full min-w-0">
            <Achivement />
          </section>

          <section id="skills" className="w-full min-w-0">
            <TechSkills />
          </section>

          {/* <section id="skills" className="w-full min-w-0">
            <Skills />
          </section> */}

          <section id="projects" className="w-full min-w-0">
            <Projects />
          </section>

          <section id="contact" className="w-full min-w-0">
            <Social />
          </section>
        </main>
      )}
    </Provider>
  );
}

export default App;
