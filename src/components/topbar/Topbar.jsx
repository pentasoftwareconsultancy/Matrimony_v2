import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { useState, useEffect } from "react";
import styles from "./Topbar.module.css";

export default function Topbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add(styles.darkMode);
      document.body.classList.remove(styles.lightMode);
    } else {
      document.body.classList.add(styles.lightMode);
      document.body.classList.remove(styles.darkMode);
    }
  }, [isDarkMode]);

  const notifications = [
    { id: 1, message: "Ellie joined team developers", time: "04 April, 2021 04:00 PM" },
    { id: 2, message: "Jenny joined team HR", time: "04 April, 2021 04:00 PM" },
    { id: 3, message: "Adam got employee of the month", time: "03 April, 2021 02:00 PM" },
    { id: 4, message: "Robert joined team design", time: "02 April, 2021 02:00 PM" },
    { id: 5, message: "Jack joined team design", time: "01 April, 2021 03:00 PM" },
  ];

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.topbarLeft}>
        <span className={styles.logo}>Lamasocial</span>
      </div>
      <div className={styles.topbarCenter}>
        <div className={styles.searchbar}>
          <Search className={styles.searchIcon} />
          <input
            placeholder="Search for friend, post or video"
            className={styles.searchInput}
          />
        </div>
      </div>
      <div className={styles.topbarRight}>
        <div className={styles.topbarLinks}>
          <span className={styles.topbarLink}>Homepage</span>
          <span className={styles.topbarLink}>Timeline</span>
        </div>
        <div className={styles.topbarIcons}>
          <div className={styles.topbarIconItem}>
            <Person />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
          <div className={styles.topbarIconItem}>
            <Chat />
            <span className={styles.topbarIconBadge}>2</span>
          </div>
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <i
              className={
                isDarkMode ? "fa-regular fa-moon" : "fa-regular fa-sun"
              }
            ></i>
          </button>
          <div
            className={styles.topbarIconItem}
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Notifications />
            <span className={styles.topbarIconBadge}>1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt="Profile"
          className={styles.topbarImg}
        />
      </div>

      {showNotifications && (
        <div className={styles.notificationsPopover}>
          <h3 className={styles.notificationsTitle}>Notifications</h3>
          <ul className={styles.notificationsList}>
            {notifications.map((notification) => (
              <li key={notification.id} className={styles.notificationItem}>
                <p>{notification.message}</p>
                <span>{notification.time}</span>
                
              </li>
            ))}
          </ul>
          <a href='/Notification'>
          <h4>see </h4></a>
        </div>
      )}
    </div>
  );
}
