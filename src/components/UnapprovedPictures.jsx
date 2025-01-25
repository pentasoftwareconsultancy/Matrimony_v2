
import styles from "../styles/UnapprovedPictures.module.css";

const UnapprovedPictures = () => {
  const unapprovedPictures = []; // Empty array to simulate "Nothing Found"

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Unapproved Profile Pictures</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Member Code</th>
              <th>Member Name</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            {unapprovedPictures.length > 0 ? (
              unapprovedPictures.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={item.photo}
                      alt="Profile"
                      className={styles.photo}
                    />
                  </td>
                  <td>{item.memberCode}</td>
                  <td>{item.memberName}</td>
                  <td>
                    <button className={styles.approveButton}>Approve</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={styles.emptyRow}>
                  <div className={styles.emptyState}>
                    <span className={styles.sadFace}>☹️</span>
                    <p>Nothing Found</p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnapprovedPictures;
