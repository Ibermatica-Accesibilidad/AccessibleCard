import { useState, useEffect } from "react";
import './App.scss';
import Header from './Components/Header/Header';
import CardInfo from './CardInfo/CardInfo';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="App">
      <Header>
        <h1>O Bank tarjetas de credito</h1>
      </Header>
      <main id="main" role="main" className="main">
        <CardInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
