import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {
    Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './Navbar.element';   


const Navbar = () => {
   const [click, setClick] = useState(false);


   const handleClick = () => setClick(!click);
  
   
    return (
        <>
          <IconContext.Provider value={{color: 'rgba(12,12,12,0.4)'}} > 
            <Nav>
                <NavbarContainer>
                    <NavLogo to='./'>
                        I N N O
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='./'>Main Page</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/Product'>Product</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
          </IconContext.Provider>  
        </>
    )
}

export default Navbar;
