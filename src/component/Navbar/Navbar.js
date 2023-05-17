import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = React.useState(false);
  const [button, setButton] = React.useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  React.useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={closeMobileMenu}>
                    <NavIcon />
                    PORTFOLIO
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                  {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                  <NavItems>
                    <NavLinks to='/'>Home</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to='/entreprises'>Entreprises</NavLinks>
                  </NavItems>
                  <NavItems>
                    <NavLinks to='/blog'>Blog</NavLinks>
                  </NavItems>
                  <NavItemBtn>
                    {button ? (
                      <NavBtnLink to='/sign-up'>
                        <Button primary>SIGN UP</Button>
                      </NavBtnLink>
                    ) : (
                      <NavBtnLink to='/sign-up'>
                        <Button fontBig primary>
                          SIGN UP
                        </Button>
                      </NavBtnLink>
                    )}
                  </NavItemBtn>
                  </NavMenu>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar;
