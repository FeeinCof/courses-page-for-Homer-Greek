import PropTypes from 'prop-types';

import './CourseItem.css';

import playIcon from '../../assets/images/playButton.svg';
import classNames from 'classnames';

const CourseItem = ({ title, src, time, free, onClick }) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  if (seconds < 10) seconds = `0${seconds}`;
  return (
    <>
      <div className={classNames('CourseItem', { free: free })} onClick={(event) => onClick({ title, src })}>
        <div>
          {free && <img width={'100px'} alt="img" width="100px" height="60px" src={free.src} />}
          {!free && <img src={playIcon} alt="img" />}
          <span className={classNames('text-gray courseTitle', { 't-18': free })}>{title}</span>
        </div>
        <div>
          {free && <span className="t-bg-white">Free</span>}
          <span className="text-gray">
            &nbsp;&nbsp;{minutes}:{seconds}
          </span>
        </div>
      </div>
    </>
  );
};

CourseItem.propTypes = {
  title: PropTypes.string,
  time: PropTypes.number,
  src: PropTypes.string,
  free: PropTypes.object,
  onClick: PropTypes.func,
};

export default CourseItem;
