import styles from './SideRail.module.scss';
import File from '@components/File/File';

const SideRail = () => {
  
  return (
    <aside className={styles.sideRail}>

      <div className={styles.fileList}>
        <File />
      </div>
    </aside>
  );
};

export default SideRail;
