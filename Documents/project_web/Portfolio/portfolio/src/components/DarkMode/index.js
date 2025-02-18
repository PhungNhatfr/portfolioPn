
import {  useEffect, useState } from 'react';

import ThemeToggleButton from './ThemeToggleButton';


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