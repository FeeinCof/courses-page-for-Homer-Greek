import { useState } from 'react';

import './CourseComponent.css';

import chevronIcon from '../../assets/images/chevron_icon.svg';
const CourseComponent = ({objData}) => {
    let { name } = objData;
    return (
        <>
            <div className='CourseComponent'>
                <div className='heading'>
                    <div>
                        <h4 className='bold text-light'>{name}</h4>
                    </div>
                    <div>
                        <p className='bold text-light'>8 videos</p>
                        <p className='text-light t-14'>38 mins <img width={'12px'} src={chevronIcon} /></p>
                    </div>
                </div>
                <div className='body'>body</div>
            </div>
        </>
    )
}

export default CourseComponent;