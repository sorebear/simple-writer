import { useEffect, useRef, useState } from 'react';
import styles from './NotePad.module.scss';

const NotePad = ({ sideRailOpen }) => {
  const timeoutRef = useRef(null);
  const [textValue, setTextValue] = useState('');

  const getFilesFromCookie = () => {
    const c_name = 'writer_files';
    if (document.cookie.length > 0) {
      let c_start = document.cookie.indexOf(c_name + '=');
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        let c_end = document.cookie.indexOf(';', c_start);
        if (c_end == -1) {
          c_end = document.cookie.length;
        }
        const files = JSON.parse(document.cookie.substring(c_start, c_end) || '{}');
        return files;        
      }
    }

    return {};
  }

  useEffect(() => {
    const files = getFilesFromCookie();
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

      const files = getFilesFromCookie();
      files['Test Document'] = textValue;
      document.cookie = `writer_files=${JSON.stringify(files)}; path=/`
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