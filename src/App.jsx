import ButtonGradient from "../public/assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
