
import styles from "./Notifications.module.css";

const notifications = [
  {
    id: 1,
    image: "https://via.placeholder.com/50",
    message: "Ellie joined team developers",
    date: "04 April, 2021",
    time: "04:00 PM",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/50",
    message: "Jenny joined team HR",
    date: "04 April, 2021",
    time: "04:00 PM",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/50",
    message: "Adam got employee of the month",
    date: "03 April, 2021",
    time: "02:00 PM",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/50",
    message: "Robert joined team design",
    date: "02 April, 2021",
    time: "02:00 PM",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/50",
    message: "Jack joined team design",
    date: "01 April, 2021",
    time: "03:00 PM",
  },
];

const Notifications = () => {
  return ( 

    <>
   
    
    <div className={styles.container}>

        <div className={styles.containers}>
        <button  > <a href="/">   previous</a></button> 
      <div className={styles.header}>
        <h2 className={styles.title}>Notifications</h2>
        <a href="#" className={styles.viewAll}>
          View All
        </a>
      </div>
      <ul className={styles.list}>
        {notifications.map((notification) => (
          <li key={notification.id} className={styles.notification}>
            <img
              src={notification.image}
              alt="Profile"
              className={styles.image}
            />
            <div className={styles.details}>
              <p className={styles.message}>{notification.message}</p>
              <span className={styles.timestamp}>
                {notification.date} | {notification.time}
              </span>
            </div>
          </li>
        ))}
      </ul>
      </div>
    
    
    </div>
 
    </>
  );
};

export default Notifications;
