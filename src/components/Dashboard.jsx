// Dashboard.jsx

import Card from "./Card";
import Graph from "./Graph";
import styles from "../styles/Dashboard.module.css";
import Department from "./Department";
import Activity from "./Activity";

const Dashboard = () => {
 return (
    <div className={styles.dashboard}>

      <div className={styles.cardsContainer}>
        <Card title="Total Members" value="6" color="purple" />
        <Card title="Male Members" value="0" color="blue" />
        <Card title="Female Members" value="6" color="pink" />
        <Card title="Other Members" value="90" color="orange" />
      </div>
      
        
                 <h3>This Year Earnings</h3>
               <div className={styles.earningsChart}>
                 <Graph />   
<Activity/>
             </div>
     
      <Department/>
    </div>
  );
};

export default Dashboard;
