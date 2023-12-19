import { useState } from 'react';
import styles from './File.module.scss';

const File = () => {
  const [fileName, setFileName] = useState('Test Document');

  return (
    <input
      className={styles.file}
      onChange={(e) => setFileName(e.target.value)}
      value={fileName}
    />
  );
}

export default File;
