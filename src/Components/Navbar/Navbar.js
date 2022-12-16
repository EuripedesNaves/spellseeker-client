import React from 'react'
import { Link } from 'react-router-dom'
import { NavItem, Nav } from 'reactstrap'
import Spellseeker from '../../images/Spellseeker.png'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div>
            <div className='main'>Navbar
                <Nav className='Nav'>
                    <NavItem>
                        <Link>
                            <img
                                src={Spellseeker}
                                alt={Spellseeker}
                            />
                        </Link>
                    </NavItem>


                    <div className='nav-Links'>
                        <NavItem>
                            <Link to='/login' className='link'>
                                Login
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/register' className='link'>
                                Register
                            </Link>
                        </NavItem>
                    </div>
                </Nav>
            </div >
        </div>
    );
}
