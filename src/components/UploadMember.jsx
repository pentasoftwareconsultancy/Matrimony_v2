
import styles from "../styles/UploadMember.module.css";

const UploadMember = () => {
  return (
    <>
     <div className={styles.container}>
      <h1 className={styles.title}>Member Bulk Upload</h1>
      
      <div className={styles.stepBox}>
        <h2>Step 1:</h2>
        <ol>
          <li>Download the skeleton file and fill it with proper data.</li>
          <li>
            You can download the example file to understand how the data must be
            filled.
          </li>
          <li>
            Once you have downloaded and filled the skeleton file, upload it in
            the form below and submit.
          </li>
        </ol>
        <button className={styles.downloadButton}>Download CSV</button>
      </div>

      <div className={styles.stepBox}>
        <h2>Step 2:</h2>
        <ol>
          <li>
            Gender, On Behalf ID, and Package ID should be in numerical ID format.
          </li>
          <li>Gender numerical IDs are: Male ID = 1, Female ID = 2.</li>
          <li>
            You can download the PDF to get On Behalf ID and Package ID.
          </li>
          <li>Add the country code before the phone number.</li>
        </ol>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.stepInstructions}>
        <h2>Step 2:</h2>
        <ol>
          <li>
            Gender, On Behalf ID, and Package ID should be in numerical ID format.
          </li>
          <li>Gender numerical IDs are: Male ID = 1, Female ID = 2.</li>
          <li>
            You can download the PDF to get On Behalf ID and Package ID.
          </li>
          <li>Add the country code before the phone number.</li>
        </ol>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.downloadButton}>Download On Behalf</button>
        <button className={styles.downloadButton}>Download Package</button>
      </div>
      <div className={styles.uploadSection}>
        <h3>Upload Member File</h3>
        <input type="file" className={styles.fileInput} />
        <button className={styles.uploadButton}>Upload CSV</button>
      </div>
    </div>    
    </>

  );
};

export default UploadMember;
