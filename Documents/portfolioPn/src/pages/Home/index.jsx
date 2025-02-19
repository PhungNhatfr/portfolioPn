import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import BackGround from '../../components/Animation/BackGround';
import Project from './Project';
import Footer from './Footer';


const cx = classNames.bind(styles);

function Home() {

  
    return ( 
      <div className={cx('home')}>
       
          <div className={cx('section', 'background-intro')}>
          <BackGround />
        </div>
       

          
          <div className={cx('section', 'project')}>
          <Project />
        </div>
          

        
          <div className={cx('section', 'footer')}>
          <Footer />
          </div>

         
        </div>
     
      
     );
}

export default Home;