import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import DarkMode from '../../DarkMode';
import { Wrapper as WrapperPopper } from '../index'; 

const cx = classNames.bind(styles);

function Menu({ items, children,  }) {
    
    const renderItems = () => {
        return (
                items.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            data={item}
                        />
                    )
                })
        )
    }

    const renderResult = () => (
        <div className={cx('menu-list')}>
            <WrapperPopper className={cx('menu-popper')}>
                <div className={cx('menu-body')}>{renderItems()}</div>
                <div className={cx('menu-footer')}><DarkMode /></div>
            </WrapperPopper>
        </div>
    )

    return ( 
        <div>
            <Tippy
                
                hideOnClick={false}
                interactive
                delay={[0,500]}
                placement='bottom-end'
                render={renderResult}
                >
                {children}
            </Tippy>
        </div>
     );
}

export default Menu;