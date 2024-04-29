import React, { useEffect, useState } from 'react'
import { FaChevronDown , FaHeart , FaShoppingCart  } from "react-icons/fa";
import './navbar.css'
import { Link } from 'react-router-dom';
import { FiMoon } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FiMenu } from "react-icons/fi";


const Navbar = ({cartItems , watchlist , dark , changeTheme}) => {

    let [openMenu , setOpenMenu] = useState(false);

    function isOpenMenu(){
        setOpenMenu(!openMenu)
    }
    function closeMenu(){
        setOpenMenu(false);
    }

    useEffect(function(){
  document.querySelector(".menu").onclick = function(){
    document.querySelector(".nav-middle ul").classList.toggle("open")
  }
    } , [])


    
  return (
    <nav>
        <div className="nav-left">
            <Link to='/' style={{textDecoration : "none"}}>
            <h2>Bravo <span>Shop</span></h2>
            </Link>
        </div>
        <div className="nav-middle">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li className='products-link'><a href="#" onClick={isOpenMenu}>
                    Products <FaChevronDown/> 
                    </a>
                  {openMenu &&
                      <div className="products-toggle">
                   <Link to="/fake" onClick={() => closeMenu()}>Fake Api Products</Link>
                   <Link to="/dummy" onClick={closeMenu}>Dummy Api Products</Link>
                   </div>
                   }
                    </li>
                <li><Link to="/contact">Contact</Link></li>
                {dark ? 
                  <li><MdOutlineWbSunny className='sun' onClick={changeTheme}/></li>
                  :
                  <li><FiMoon className='moon' onClick={changeTheme}/></li>

               }
              
            </ul>
        
        </div>
        <div className="nav-right">
            <div className="watchlist">
             <Link to='/watchlist'>
             <FaHeart className='nav-icon'/>
             </Link>
             <span>({watchlist.length})</span>
            </div>
            <div className="shopping">
               <Link to='/cart'>
               <FaShoppingCart className='nav-icon' />
               </Link>
                <span>({cartItems.length})</span>
            </div>
        </div>
        <FiMenu className='menu'/>

        

      
    </nav>
  )
}

export default Navbar
