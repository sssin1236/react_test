import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <figure>
        <Logo />
        <Menu />
        

        <Footer />
      </figure>
    </div>
  );
}

export default App;
