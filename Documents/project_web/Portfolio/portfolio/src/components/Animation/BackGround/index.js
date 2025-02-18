import classNames from 'classnames/bind';
import styles from './BackGround.module.scss';

const cx = classNames.bind(styles);

const BackGround =() => {
  return (
    <div className={styles.container}>
      <div className={cx('intro')}>
        <h1 className={cx('title')}>PHUNG NHAT</h1>
        <h5 className={cx('location')}>Blois, France</h5>
        <h3 className={cx('school')}>{"<Student at Insa Centre Val de Loire />"}</h3>
      </div>
      {[...Array(4)].map((_, index) => (
        <div key={index} className={styles.glowing}>
      {[...Array(3)].map((_, i) => (
          <span key={i} style={{ "--i": i + 1 }}></span>
      ))}
        </div>
      ))}
    </div>
      );
}

export default BackGround;