import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './DarkMode.module.scss';

const cx = classNames.bind(styles);

function ThemeToggleButton({isChecked, handleChange, className}) {
    return ( 
    <div className={cx('wrapperButton', {className})}>
            <input
                type='checkbox'
                id='checkbox'
                className={cx('check')}
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="checkbox" className={cx('label')}>
                <FontAwesomeIcon className={cx('sun')} icon={faSun} />
                <FontAwesomeIcon className={cx('moon')} icon={faMoon} />
                <span className={cx("ball", { move: isChecked })}></span>
            </label>
    </div>
     );
}

export default ThemeToggleButton;