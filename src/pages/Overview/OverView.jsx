import styles from './OverView.module.css';
import Stats from "../../features/overview/Stats/Stats";

function OverView() {
  return (
    <div className={styles.overview} >
      <h1>Overview</h1>
      <Stats />
     
    </div>
  );
}

export default OverView;
