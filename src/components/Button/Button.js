import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Button.css';
function Button(props) {
    const { children, animate, orange, light, dark, large } = props;
    return (
        <>
            <button 
                className={classNames(
                    'btn',
                    {'btn-orange': orange},
                    {'btn-dark':  dark},
                    {'btn-light':  light},
                    {'btn-lg': large},
                    {'btn-animate': animate}
                )}
            >
                {children}
            </button>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    animate: PropTypes.bool,
    orange: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    large: PropTypes.bool
}

export default Button;
