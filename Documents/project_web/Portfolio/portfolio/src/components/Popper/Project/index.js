import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './ShowProject.module.scss';
import { Wrapper as WrapperProject } from '../index';

const cx = classNames.bind(styles);


function ShowProject({ projects , className, children }) {
    
    const renderProject = () => {
        return (
            <WrapperProject className={cx('wrapper-project')}>
                <img src={projects.sourceImage} alt={projects.title} className={cx('img')} />
            </WrapperProject>
        )
    }

    return ( 
        <Tippy
            placement='bottom'
            zIndex={999}
            render={renderProject}
        >
            {children}
        </Tippy>
     );
}

export default ShowProject;