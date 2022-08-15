import { NavHeader } from "./components/atoms/index";
import { SelfApresentation, AboutMe } from "./components/molecules/index";
function App() {
  return (
    <div className="App">
      <NavHeader />
      <SelfApresentation />
      <AboutMe />
    </div>
  );
}

export default App;
