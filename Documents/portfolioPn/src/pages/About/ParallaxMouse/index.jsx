import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from './ParallaxMouse.module.scss';

const cx = classNames.bind(styles);

function ParallaxMouse() {

    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 40; 
        const y = (e.clientY / innerHeight - 0.5) * 40;

        setOffset({ x, y });
    };


    return ( 
            <div className={cx('parallax-container')} onMouseMove={handleMouseMove}>
                
                    <img
                        src="/images/librabry.png"
                        alt="Layer 1"
                        className={cx('layer-1', 'parallax-image')}
                        style={{ transform: `translate(${offset.x * 0.3}px, ${offset.y * 0.3}px)` }}
                        />
               

                
                    <img
                        src="/images/logo_light.png"
                        alt="Layer 2"
                        className={cx('layer-2', 'parallax-image')}
                        style={{ transform: `translate(${offset.x * 0.5}px, ${offset.y * 0.5}px)` }}
                        />
               

                
                    <img
                        src="/images/hall.png"
                        alt="Layer 3"
                        className={cx('layer-3', 'parallax-image')}
                        style={{ transform: `translate(${offset.x * 0.7}px, ${offset.y * 0.7}px)` }}
                        />      
            </div>
            
     
  );
}

export default ParallaxMouse;