import { useState } from 'react';
import AddToCard from '../AddToCard';
import './style.scss'
import {Link} from 'react-router-dom'

const Nav = () => {
  const [showBasket,setShow] = useState(false)

  return (
    <nav>
      <div className="container">
        <Link to="/">
          <h1>LOGO</h1>
        </Link>
        <div className="nav-links">
          <Link to="/products" className="link">
            Products
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <button>Login</button>
          <button>SignUp</button>
          <button onClick={()=>setShow(true)}>Basket</button>
          {showBasket && <AddToCard setShow={setShow}/>}
        </div>
      </div>
    </nav>
  );
}

export default Nav