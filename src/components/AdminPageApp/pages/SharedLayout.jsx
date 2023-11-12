import { Link, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import styles from './SharedLayout.module.css';

function SharedLayout() {
  return (
    <div className={styles.adminPage}>
      <nav className={styles.navPanel}>
        <Link to="/">Моделі</Link>
        <Link to="/services">Послуги</Link>
        <Link to="/messages">Повідомлення</Link>
        <Link to="/shop">Магазин</Link>
      </nav>
      <div className={styles.outlet}>
        <Outlet />
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
}

export default SharedLayout;
