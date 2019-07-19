import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';



const Header = ({userFullName, currentUser}) => {
    return (
        <div className="header">
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <span>{userFullName? `Welcome ${userFullName.split(' ')[0]}` : null}</span>
                <NavLink className='option' to='/shop'>SHOP</NavLink>
                <NavLink className='option' to='/contact'>CONTACT</NavLink>
                {
                    currentUser ? 
                    <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
                    : 
                    <NavLink className="option" to='/signin'>SIGN IN</NavLink>
                }
            </div>
        </div>
    )
}

export default Header;