import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <div>
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand text-dark"> Wedding Photographer Abrar</a>
                        <div>
                            <ul className="navbar-nav d-flex">
                                <li className="nav-item">
                                    <CustomLink className='link' to='/home'> HOME </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className='link' to='/services'> SERVICES </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className='link' to='/checkout'> CHECK OUT </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className='link' to='/blogs'> BLOGS </CustomLink>
                                </li>
                                <li className="nav-item">
                                    <CustomLink className='link' to='/about'> ABOUT </CustomLink>
                                </li>
                                <li className="nav-item">
                                    {
                                        user ?
                                            <CustomLink onClick={handleSignOut} className='link' to='/login'> SIGN OUT </CustomLink>
                                            :
                                            <CustomLink className='link' to='/login'> LOGIN </CustomLink>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;

