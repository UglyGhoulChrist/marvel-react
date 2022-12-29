import styles from "./Picture.module.scss";

function Picture({ name, thumbnail }) {
  return (
    <div className={styles.picture}>
      <img className={styles.image} src={thumbnail} alt={name} />
    </div>
  );
}
export default Picture;
