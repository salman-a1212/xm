import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slider from './components/Slider';
import How from './components/How';
import Service from './components/Service';
import Test from './components/Test'
import Offer from './components/Offer';
import Client from './components/Client';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Slider />
      <How />
      <Service />
      <Test />
      <Offer />
      <Client />
      <Contact />
    </div>
  );
}

export default App;
