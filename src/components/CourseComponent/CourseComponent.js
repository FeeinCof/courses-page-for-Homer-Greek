import { useState } from 'react';
import PropTypes from 'prop-types';

import CoursesGroup from '../CoursesGroup/CoursesGroup';
import CourseItem from '../CourseItem/CourseItem';

import './CourseComponent.css';

import chevronIcon from '../../assets/images/chevron_icon.svg';

const CourseComponent = ({objData, onClick}) => {
    const { videos, playlist, name, icon } = objData;
    const [isBodyHide, setBodyStatus] = useState(false);
    const group = [];
    for (const item in playlist) {
        group.push(item);
    }

    const getCourseTime = (obj) => {
        let arr = [], times = [];
        for (let child in obj) {
            if (Array.isArray(obj[child])) arr.push(obj[child])
            else if (!Array.isArray(obj[child])) {
                for (let child2 in obj[child]) {
                    if(Array.isArray(obj[child][child2])) arr.push(obj[child][child2]);
                }
            }
        }
        
        arr.map((a) => {
            a.map((b) => times.push(b.time))
        });
        let sum = times.reduce((a, b) => a + b);
        let minutes = Math.floor(sum / 60);
        if (minutes > 60) {
            let hours = Math.floor(sum / 60);
            if (hours > 1) return `${hours} hrs`;
            else return `${hours} hr`;
        } else {
            return `${minutes} mins`;
        }
    }

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
                        <p className='text-light t-14'>{getCourseTime(objData)} <img width={'12px'} src={chevronIcon} /></p>
                    </div>
                </div>
                {
                    !isBodyHide && (
                        <div className='body'>
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
                            {
                                group && group.map((a, index) => 
                                    <CoursesGroup
                                        name={a}
                                        objData={playlist[a]}
                                        key={index}
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

CourseComponent.propTypes = {
    objData: PropTypes.object,
    onClick: PropTypes.func
}

export default CourseComponent;