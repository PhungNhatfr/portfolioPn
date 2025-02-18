import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/Button";
import classNames from "classnames/bind";
import styles from './About.module.scss';
import ParallaxMouse from './ParallaxMouse';

const cx = classNames.bind(styles);

function About() {
    return (
        <div>
            <div>
                <Button iconOnly={ <FontAwesomeIcon icon={faHouse} className={cx('icon')} />} className={cx('home-icon')} to="/" />
            </div>  

            <ParallaxMouse />

            <div className={cx('text')}>
                <p className={cx('section-1')}>I am currently a student at INSA Val de Loire. I am passionate about web development, particularly front-end technologies, and I am eager to apply my knowledge and skills in a professional setting.</p>
                <p className={cx('section-2')}>I am actively seeking an internship opportunity in front-end web development, where I can contribute my expertise in HTML, CSS, JavaScript, and modern frameworks such as React . I am eager to learn, adapt, and collaborate with a dynamic team to build engaging and user-friendly web applications.
</p>
                <p className={cx('section-3')}>I would love the opportunity to further discuss how my skills align with your company's needs.</p>
            </div>

            
        </div>
    );
}

export default About;