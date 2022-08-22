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
      <SelfApresentation />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
