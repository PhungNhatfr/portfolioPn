import classNames from 'classnames/bind';
import styles from './HandShake.module.scss';

const cx = classNames.bind(styles);

const HandShake = () => {
    return ( 
        <div className={cx('main')}>
            <div className={cx('circle')}></div>
            <p className={cx('title')}>CONTACT ME</p>
        </div>
     );
};

export default HandShake;