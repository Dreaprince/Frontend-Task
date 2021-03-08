import styled from 'styled-components';
import {Link} from 'react-router-dom';
// import img from '../../images/LOGO.jpg';




export const Nav = styled.nav`
    background: #010080;
    width: 100%;
    max-width: 1440px;
    margin-right: auto; 
    margin-left: auto; 
    height: 80px;
    border-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Poppins;
    font-style: normal;
    line-height: 186%;
    position: sticky;
    top: 0;
    z-index: 999;
    
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    max-width: 1251px;
    z-index: 1;
`;

export const NavLogo = styled.div`
cursor: pointer;
display: flex;
width: 100%;
max-width: 129px;
height: 76px;
align-self: center;
color: #fff;
margin-top: 60px;
font-size: 28px;


    @media screen and (max-width: 1100px) {
        margin-left: 25px;
    }     

`;

export const MobileIcon = styled.div `
display: none;

@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgba(225,225,225,0.94);
}
`;

export const NavItem = styled.li`
font-family: Poppins;
font-style: normal;
line-height: 186%;
font-size: 16px;
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 2px solid #FDFDFD;
}

@media screen and (max-width: 768px) {
    width: 100%;
    font-weight: 600;
    font-size: 25px;
    
    &:hover {
       border: none; 
    }
}
`;

export const NavLinks = styled(Link)`
color: #FFFFFF;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

@media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    color: #181B1B;

    &:hover {
        color: #F3832F;
        transition: all 0.3s ease;
    }
}
`;

