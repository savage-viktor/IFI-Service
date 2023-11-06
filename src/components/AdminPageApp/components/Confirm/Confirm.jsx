import styles from './Confirm.module.css';

function Confirm({ text, accept, decline }) {
  return (
    <div className={styles.confirmWindow}>
      <p className={styles.text}>{text}</p>
      <div className={styles.buttonsBox}>
        <button onClick={accept} type="button">
          Так
        </button>
        <button onClick={decline} type="button">
          Ні
        </button>
      </div>
    </div>
  );
}

export default Confirm;
