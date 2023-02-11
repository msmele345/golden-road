import classes from './Header.module.css';
import concertImg from '../../assets/concert2.jpg';

const Header = (): JSX.Element => {
    return (
     <>
        <header className={classes.header}>
             <h1>Golden Road Shows</h1>
         </header>
        <div className={classes['main-image']}>
            <img src={concertImg} alt="A Concert Image" />
        </div>
    </>
  )
};

export default Header;

