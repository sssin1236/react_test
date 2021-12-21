import './css/style.css';
import {Logo, Menu} from './components/Header.js';
import Footer from './components/Footer.js';

const arr = ['Blizzards','Calm','Dusty_Road','Escape','Payday','Retreat','Seasonal','Vespers'];
const len = arr.length;
const deg = 360/len;

function App() {
  return (
    <div className="App">
      <figure>
        <Logo />
        <Menu />

          <section>
          {
            arr.map((data,index)=>{
              let style = {transform: `rotate(${deg*index}deg)`}
              return (
                <article key={index} style={style}>
                  <div className="inner">
                    <h2>{data}</h2>
                  </div>
                </article>
              )
            })
          }
          </section>

        <Footer />
      </figure>
    </div>
  );
}

export default App;
