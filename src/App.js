import { NavHeader } from "./components/atoms/index";
import {
  SelfApresentation,
  AboutMe,
  Projects,
  Contact,
} from "./components/molecules/index";
function App() {
  return (
    <div className="App">
      <NavHeader />
      <SelfApresentation />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
