

import classNames from 'classnames/bind';
import {  useEffect, useState } from 'react';
import styles from './DarkMode.module.scss';
import ThemeToggleButton from './ThemeToggleButton';

const cx = classNames.bind(styles);



function DarkMode({children}) {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

    }, [theme])

    const handleChange = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return ( 
        <div>
            {!children && <ThemeToggleButton
                handleChange={handleChange}
                isChecked={theme === 'light' ? false : true}
            /> }
            {children}
        </div>
     );
}

export default DarkMode;