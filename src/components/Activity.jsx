import { useState } from "react";

import styles from "../styles/Dashboard.module.css";


const Activity = ()  => {
  const activities = [
    {
      title: "Earned Gold Certification in Change Management",
      date: "May 1, 2022",
      correct: "5/5 Correct",
      badge: styles.gold,
    },
    {
      title: "Completed Drive-Thru",
      date: "May 1, 2022",
      correct: "5/10 Correct",
      badge: styles.defaultBadge,
    },
    {
      title: "Earned Bronze in Drive-Thru",
      date: "May 1, 2022",
      correct: "8/10 Correct",
      badge: styles.bronze,
    },
    {
      title: "Earned Silver in Drive-Thru",
      date: "May 1, 2022",
      correct: "9/10 Correct",
      badge: styles.silver,
    },
    {
      title: "Earned Gold in Drive-Thru",
      date: "May 1, 2022",
      correct: "10/10 Correct",
      badge: styles.gold,
    },
    {
      title: "Earned Gold in Drive-Thru 101",
      date: "May 1, 2022",
      correct: "5/7 Correct",
      badge: styles.gold,
    },
    {
      title: "Completed Pre-Test in Customer Experience 101",
      date: "May 1, 2022",
      correct: "10/10 Correct",
      badge: styles.defaultBadge,
    },
    {
      title: "Completed Pre-Test in Customer Experience 101",
      date: "May 1, 2022",
      correct: "5/7 Correct",
      badge: styles.defaultBadge,
    },
  ];
  
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const handleOpenReportModal = () => setIsReportModalOpen(true);
  const handleCloseReportModal = () => setIsReportModalOpen(false);

  const handleDownloadReport = (timeframe) => {
    const reportData = getReportData(timeframe);
    localStorage.setItem("reportData", JSON.stringify(reportData));

    const blob = new Blob([JSON.stringify(reportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `report_${timeframe.replace(" ", "_").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);

    setIsReportModalOpen(false);
  };

  const getReportData = (timeframe) => {
    const currentDate = new Date();
   

    return {
      timeframe,
      generatedAt: currentDate.toISOString(),
   
    };
  };

  return (
    <div className={styles.dashboard}>
     

      <div className={styles.earningsContainer}>
        <div className={styles.earningsChart}>
       
           <div className={styles.activityTab}>
      <div className={styles.profileHeader}>
       
        <h2 className={styles.profileName}>Arya Muller</h2>
      </div>
      <div className={styles.tabs}>
        <span className={styles.tab}></span>
        <span className={styles.tab}></span>
        <span className={`${styles.tab} ${styles.activeTab}`}>Activity</span>
      </div>
      <div className={styles.activityList}>
        {activities.map((activity, index) => (
          <div key={index} className={styles.activityItem}>
            <span className={`${styles.badge} ${activity.badge}`}></span>
            <div className={styles.activityContent}>
              <p className={styles.activityTitle}>{activity.title}</p>
              <p className={styles.activityDetails}>
                {activity.date} • {activity.correct}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
        
        </div>
      </div>
    
      <button className={styles.reportButton} onClick={handleOpenReportModal}>
            Download Report
          </button>
      {isReportModalOpen && (
        <div className={styles.reportModal}>
          <div className={styles.modalContent}>
            <h3>Select Report Timeframe</h3>
            <button
              className={styles.modalButton}
              onClick={() => handleDownloadReport("Last Month")}
            >
              Last Month
            </button>
            <button
              className={styles.modalButton}
              onClick={() => handleDownloadReport("Last 6 Months")}
            >
              Last 6 Months
            </button>
            <button
              className={styles.modalButton}
              onClick={() => handleDownloadReport("Last 12 Months")}
            >
              Last 12 Months
            </button>
            <button
              className={styles.modalButtonCancel}
              onClick={handleCloseReportModal}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
     
    </div>
  );
};
export default Activity;
