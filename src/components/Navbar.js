import React, { useState } from 'react'
import './Navbar.css'
import { menuitems } from './Menudata';
import { Link } from 'react-scroll';

function Navbar() {
  const[open,setOpen]=useState(false)

  const touch= ()=>setOpen(!open)
  return (
    <div>
        <nav className='navbarItems'>
             <h1 className='logo'>JB<i class="fa-sharp fa-regular fa-lightbulb"></i></h1>
                <div className='menu-icons' onClick={touch}>
                     
{              
  open?<i className='fa fa-close' />:<i className= 'fa fa-bars'/>
}                     
                     
                </div>
                <ul className={open?'nav-menu active':'nav-menu'}>
                {menuitems.map((items,index)=>(
                       <li key={index}><Link to={items.url}className={items.cName} smooth={true} 
                       offset={-100} 
                       duration={500} >{items.item}</Link></li>
                ))}
                  </ul>
        </nav>
    </div>
  )
}

export default Navbar