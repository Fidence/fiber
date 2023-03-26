import "./App.scss";
import FirstComp from "./components/first";
import FooterComp from "./components/footer";
import ForthComp from "./components/forth";
import HeaderComp from "./components/header";
import SecondComp from "./components/second.tsx";
import ThirdComp from "./components/third";



function App() {
  return (
    <div className="App">
   <HeaderComp/>
   <FirstComp/>
  <SecondComp/>
  <ThirdComp/>
  <ForthComp/>
  <FooterComp/>
    </div>
  );
}

export default App;
