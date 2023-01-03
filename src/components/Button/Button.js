import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';

function Button({ children, animate, orange, light, dark, large, type, w100 }) {
  return (
    <>
      <button
        type={type}
        className={classNames(
          'btn',
          { 'btn-orange': orange },
          { 'btn-dark': dark },
          { 'btn-light': light },
          { 'btn-lg': large },
          { 'btn-animate': animate },
          { 'w-100': w100 },
        )}
      >
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  animate: PropTypes.bool,
  orange: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  large: PropTypes.bool,
  type: PropTypes.string,
  w100: PropTypes.bool,
};

export default Button;
