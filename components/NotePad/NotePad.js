import styles from './NotePad.module.scss';

const NotePad = ({ sideRailOpen }) => {

  return (
    <div
      className={`${styles.notePad}`}
      data-side-rail={sideRailOpen ? 'open' : 'closed'}
    >
      <textarea
        className={styles.textarea}
        placeholder="Once upon a time..."
      />
    </div>
  );
}

export default NotePad;