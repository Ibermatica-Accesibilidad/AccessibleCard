import './App.scss';
import Header from './Components/Header/Header';
import CardInfo from './CardInfo/CardInfo';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header>
        <h1>O Bank tarjetas de credito</h1>
      </Header>
      <div id="content" className="content">
        <CardInfo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
