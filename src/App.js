import { Footer } from "./components/atoms/index";
import {
  SelfApresentation,
  AboutMe,
  Projects,
} from "./components/molecules/index";
import { Contact, NavHeader } from "./components/organisms/index";
function App() {
  return (
    <div className="App">
      <NavHeader />
      <main>
        <SelfApresentation />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
