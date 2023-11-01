import { Link, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={styles.adminPage}>
      <nav className={styles.navPanel}>
        <Link to="/">Моделі</Link>
        <Link to="/services">Послуги</Link>
        <Link to="/messages">Повідомлення</Link>
      </nav>
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}

export default SharedLayout;
