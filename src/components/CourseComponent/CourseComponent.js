import { useState } from 'react';

import CoursesGroup from '../CoursesGroup/CoursesGroup';
import CourseItem from '../CourseItem/CourseItem';

import './CourseComponent.css';

import chevronIcon from '../../assets/images/chevron_icon.svg';

const CourseComponent = ({objData, onClick}) => {
    const { videos, playlist, name, icon } = objData;
    const [isBodyHide, setBodyStatus] = useState(false);
    return (
        <>
            <div className='CourseComponent'>
                <div 
                    className='heading'
                    onClick={() => {
                        setBodyStatus(!isBodyHide);
                    }}
                >
                    <div>
                        <img width={'42px'} src={icon}/>
                        <h4 className='bold text-light'>&nbsp;{name}</h4>
                    </div>
                    <div>
                        <p className='bold text-light'>8 videos</p>
                        <p className='text-light t-14'>38 mins <img width={'12px'} src={chevronIcon} /></p>
                    </div>
                </div>
                {
                    !isBodyHide && (
                        <div className='body'>
                            {/* <CoursesGroup></CoursesGroup> */}
                            {/* <CourseItem /> */}
                            {
                                videos && videos.map((a, index) => 
                                    <CourseItem 
                                        title={a.title}
                                        time={a.time}
                                        free={a.free}
                                        key={index}
                                        src={a.src}
                                        onClick={onClick}
                                    />
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CourseComponent;