import "./App.css";
import Content from "./components/Content";
import Logo from "./components/Logo";
import Signature from "./components/Signature";
export { default as data } from "./data.json";

const App = () => {
  return (
    <div className="App">
      <Logo />
      <Content />
      <Signature />
    </div>
  );
};

export default App;
