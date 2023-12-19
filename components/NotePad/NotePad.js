import { useEffect, useRef, useState } from 'react';
import styles from './NotePad.module.scss';

const NotePad = ({ sideRailOpen }) => {
  const timeoutRef = useRef(null);
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    const files = JSON.parse(localStorage.getItem('simpleWriterFiles') || '{}');
    if (files['Test Document']) {
      setTextValue(files['Test Document']);
    }
  }, []);

  const handleChange = (e) => {
    setTextValue(e.target.value);
    clearTimeout(timeoutRef.current);
    // TODO: If I use a setTimeout, it's going to set the value when the timeout is created,
    // meaning the text value will never be up to date.
    timeoutRef.current = setTimeout(() => {
      console.log('[SOREN save file]');

      const files = JSON.parse(localStorage.getItem('simpleWriterFiles') || '{}');

      files['Test Document'] = textValue;
      
      localStorage.setItem('simpleWriterFiles', JSON.stringify(files));
    }, 2000);
  }

  console.log('[SOREN text value]', textValue);

  return (
    <div
      className={`${styles.notePad}`}
      data-side-rail={sideRailOpen ? 'open' : 'closed'}
    >
      <textarea
        className={styles.textarea}
        placeholder="Once upon a time..."
        onChange={(e) => handleChange(e)}
        value={textValue}
      />
    </div>
  );
}

export default NotePad;