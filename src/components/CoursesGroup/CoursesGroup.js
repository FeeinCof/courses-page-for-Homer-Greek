import { useState } from 'react';

import './CoursesGroup.css';

import chevronDownIcon from '../../assets/images/chevron_down.svg';
import CourseItem from '../CourseItem/CourseItem';

const CoursesGroup = ({name, objData, onClick}) => {
    const [isItemsHide, setItemsStatus] = useState(false);

    return (
        <>
            <div 
                className='CoursesGroup'
                onClick={() => setItemsStatus(!isItemsHide)}    
            >
                <span className='bold text-gray'>{name}</span>
                <div>
                    <p className='text-gray t-14 bold'>
                        {objData.length} videos &nbsp;&nbsp;
                        <img width={'18px'} src={chevronDownIcon} />
                    </p>
                </div>
            </div>
            {
                (objData && !isItemsHide) && objData.map((a, index) => 
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
        </>
    )
}

export default CoursesGroup;