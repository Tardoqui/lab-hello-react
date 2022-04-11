import './style.modules.css';

const logo = require('../assets/img/ironhack-logo-xs.png');
const menuImage = require('../assets/img/menu-top-xs.png');

function Div () {


    return (  
        <div className='div'>
            
            <img src={logo} alt='ironhack logo' className='logo'></img>
            <img src={menuImage} alt='ironhack menu' className='menu'></img>

            <h1 className='h1'>Say hello to <br></br> ReactJS</h1>
            <p className="h3">You will learn how to use <br></br>the most popular frontend library,<br></br> and become a super ninja developer.</p>

            <button className="button"><strong>Awesome!</strong></button>

        </div>
    );
}

export default Div;

