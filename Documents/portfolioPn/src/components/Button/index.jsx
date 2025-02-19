
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);


function Button({
    leftIcon,
    custome,
    small,
    large,
    iconOnly,
    to,
    href,
    className,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    let props = {
        onClick,
        ...passProps,
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className,
        leftIcon,
        custome,
        iconOnly,
        small,
        large,
    });

    return ( 
        <Comp className={classes} {...props} >
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {iconOnly && <span className={cx('iconOnly')}>{iconOnly}</span>}
            {!iconOnly && <span className={cx('title')}>{children}</span>}
        </Comp>
     );
}

export default Button;