import './CourseItem.css';

import playIcon from '../../assets/images/playButton.svg';
import classNames from 'classnames';

const CourseItem = ({title, src, time, free, onClick}) => {
    let minutes = Math.floor(time/60);
    let seconds = time - minutes * 60;
    if (seconds < 10) seconds = `0${seconds}`; 
    return (
        <>
            <div 
                className={classNames('CourseItem', {'free': free})}
                onClick={event => onClick({title, src})}
            >
                <div>
                    {
                        free && (
                            <img width={'100px'} height={'60px'} src={free.src}/>
                        )
                    }{
                        !free && (
                            <img src={playIcon}/>
                        )
                    }
                    <span className={
                        classNames(
                            'text-gray',
                            {'t-18': free}
                        )
                    }>{title}</span>
                </div>
                <div>
                    {
                        free && (
                            <span className='t-bg-white'>Free</span>
                        )
                    }
                    <span className='text-gray'>&nbsp;&nbsp;{minutes}:{seconds}</span>
                </div>
            </div>
        </>
    )
}

export default CourseItem;