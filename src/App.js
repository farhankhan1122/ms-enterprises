import './App.css';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import Banner from './components/Banner';
import Footer from './components/Footer';
import LogoSlider from './components/LogoSlider';
import Cities from './components/Cities';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <Header />
      <Banner />
      <LogoSlider />
      <Footer />
    </div>
  );
}

export default App;
