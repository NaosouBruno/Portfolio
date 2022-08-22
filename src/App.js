import { NavHeader } from "./components/atoms/index";
import {
  SelfApresentation,
  AboutMe,
  Projects,
} from "./components/molecules/index";
function App() {
  return (
    <div className="App">
      <NavHeader />
      <SelfApresentation />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
