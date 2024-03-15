import React from 'react'
import navLogo from "../../assets/lo.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
        <nav>
        <div className="logo">
        <img src={navLogo} alt="" />
        </div>
        
        <div className="searchBar">
            <input type="search" placeholder='Search for Products Brands and more'/>
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
       
       <div className="nav-cart">

        <div className="login">
        <i class="fa-regular fa-user"></i>
        <p>Login</p>
        </div>

        <div className="cart">
        <i class="fa-solid fa-cart-shopping"></i>
        <p>Cart</p>
        </div>

        <div className="seller">
        <i class="fa-solid fa-door-closed"></i>
        <p>Become a Seller</p>
        </div>

        <div className="dot">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>

       </div>


        </nav>
    </>
  )
}

export default Navbar