import './style.modules.css';

const image1 = require('../assets/img/icon1.png');
const image2 = require('../assets/img/icon2.png');
const image3 = require('../assets/img/icon3.png');
const image4 = require('../assets/img/icon4.png');

function Section () {
    return (  
  
  <section className="container">

    <article className="article">

        <img className="image" src={image1} alt='chave de fenda'></img> 
        <h2 className = "h2">Declarative</h2>
        <p className="text">React make it painless to create interactive Ul's</p>

    </article>
        
    <article className="article">

        <img className="image" src={image2} alt='ironhack logo' ></img>
        <h2 className = "h2">Components</h2>    
        <p className="text">Build encapsulated components that manage their state</p>
    </article>

    <article className="article">

        <img className="image" src={image3} alt='ironhack logo'></img>
        <h2 className = "h2">Single-way</h2>    
        <p className="text">A set of immutable values are passed to the components</p>
    </article>

    <article className="article">

        <img className="image" src={image4} alt='ironhack logo'></img>
        <h2 className = "h2">JSX</h2>
        <p className="text">Statically-typed, desined to run on modern browser's</p>
    </article>

  </section>



    );
}

export default Section;