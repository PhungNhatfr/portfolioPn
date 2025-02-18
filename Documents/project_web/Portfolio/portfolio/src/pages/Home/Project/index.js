import { faSun } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';

import ShowProject from '../../../components/Popper/Project';
import styles from './Project.module.scss';
import Button from '../../../components/Button';

const cx = classNames.bind(styles);

const PROJECT_ITEMS = [
    {
        title: 'PokemonSearch',
        source: 'course freeCodeCamp project',
        sourceImage: '/images/pokemonSearch.png',
        link: 'https://codepen.io/PhungNhatfr/pen/bNbXMEg',
    },
    {
        title: 'To do App',
        source: 'course freeCodeCamp project',
        sourceImage: '/images/todoApp.png',
        link: 'https://codepen.io/PhungNhatfr/pen/raNBddy',
    },
    {
        title: 'Roman Number Convert',
        source: 'course freeCodeCamp project',
        sourceImage: '/images/convertRoman.png',
        link: 'https://codepen.io/PhungNhatfr/pen/bNGbvON',
    },
    {
        title: 'Clone Tiktok UI',
        source: 'personal project',
        sourceImage: '/image/cloneTiktok.png',
        link: '#',
    },
]

function Project() {
    return ( 
        <div className={cx('project')}>
            <p className={cx('title')}>Projects</p>
            <div className={cx('container')}>
                {PROJECT_ITEMS.map((project, index) => {
                    return (
                        <ShowProject projects={project} key={index}> 
                            {project.link && <a href={project.link} target='_blank' >
                                <div className={cx('project-container')}>
                                    <h3 className={cx('title-project')}>{project.title}</h3>
                                    <p className={cx('source')}>{project.source}</p>
                                </div>
                                </a>} 
                        </ShowProject>
                    )
                })}
            
            </div>
        </div>
     );
}

export default Project;