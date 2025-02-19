
import classNames from 'classnames/bind';
import { faBars, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './DefaultLayout.module.scss';
import Button from '../../components/Button';
import Menu from '../../components/Popper/Menu';




const cx = classNames.bind(styles);

function DefaultLayout({ children, about }) {
    
    
    const MENU_ITEMS = [
        {
            to: '/',
            title: 'Home',
            icon: <FontAwesomeIcon icon={faHouse} />,
        },
        {
            to: '/about',
            title: 'About',
            icon: <FontAwesomeIcon icon={faUser} />
        }
    ]

    return (
        <div className={cx('defaultLayout')} >
            
            <Menu items={MENU_ITEMS} className={cx('menu')} >
                <Button iconOnly={<FontAwesomeIcon icon={ faBars}  />} className={cx('menu-icon')} /> 
            </Menu> 
            
            {about && <Button iconOnly={ <FontAwesomeIcon icon={faHouse} className={cx('icon')} />} className={cx('home-icon')} to="/" /> }
           
            {children}
        </div>
    );
}

export default DefaultLayout;