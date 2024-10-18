import "./App.css";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import InsuranceOptions from "./components/InsuranceOptions/InsuranceOptions";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <InsuranceOptions/>
      <Value/>
      <Contact/>
      <GetStarted/>
    </div>
  );
}

export default App;
