import React from 'react';
import './Navbar.css';
import branchLogo from '../../assets/images/_branch_logo@1080.png';
import Button from '../Button/Button';

function Navbar(props) {
    return (
        <>
            <div className='Navbar'>
                <div>
                    <div>
                        <img loading="lazy" alt='branch_logo' src={branchLogo} width="100px"/>
                        <div>
                            <span className='text-black'>Made with</span>
                            <span className='text-orange'>&nbsp;in India</span>
                        </div>
                    </div>
                    <div>
                        <Button animate orange large>
                            Enroll now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;