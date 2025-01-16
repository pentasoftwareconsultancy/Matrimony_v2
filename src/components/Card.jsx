
import styles from "../styles/Card.module.css";

const Card = ({ title, value, color }) => {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <h4>{title} </h4>
      <p>{value}</p>
    </div>
  );
};

export default Card;
