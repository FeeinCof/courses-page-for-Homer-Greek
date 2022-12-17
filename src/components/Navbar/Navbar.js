import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
import branchLogo from '../../assets/images/_branch_logo@1080.png';
import Button from '../Button/Button';

function Navbar(props) {
    return (
        <>
            <div className='Navbar'>
                <div>
                    <div>
                        <Link to='/'>
                            <img loading="lazy" alt='branch_logo' src={branchLogo} width="100px"/>
                        </Link>
                        <Link to='/'>
                            <div>
                                <span className='text-black'>Made with</span>
                                <span className='text-orange'>&nbsp;in India</span>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link to='/offers'>
                            <Button animate orange large>
                                Enroll now
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;