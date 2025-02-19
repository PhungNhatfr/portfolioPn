import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import HandShake from '../../../components/Animation/HandShake';
import styles from './Footer.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles)

const BUTTON_ITEMS = [
    {
        title: 'Email',
        icon: <FontAwesomeIcon icon={faEnvelope} />,
        source: 'mailto:phungnhatfr2352@gmail.com',
    },
    {
        title: 'GitHub',
        icon: <FontAwesomeIcon icon={faGithub} />,
        source: 'https://github.com/PhungNhatfr',
    },
    {
        title: 'Linkedin',
        icon: <FontAwesomeIcon icon={faLinkedin} />,
        source: 'https://www.linkedin.com/in/nhat-phung-72aa22276/',
    },
]

function Footer() {
    return ( 
        <div className={cx('footer-container')}>
            <div className={cx('part1')}>
                <h2 className={cx('title')}>Let's work together</h2>
                <div className={cx('line')}></div>
                {
                    BUTTON_ITEMS.map((item, index) => (
                        <Button className={cx('button')} key={index} href={item.source} leftIcon={item.icon} target="_blank" large>{ item.title }</Button>
                    ))
                }
            </div>

            <div className={cx('animation')}>
                <HandShake />
            </div>
        </div>
     );
}

export default Footer;