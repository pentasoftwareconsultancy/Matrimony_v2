import styles from "./summary.module.css";

const Summary = ({ formData }) => {
  const { profile, education, familyBackground, horoscope, Expectation, uploadedImage, address } = formData;

  const renderDetails = (title, data) => (
    <div>
      <h3>{title}</h3>
      {Object.entries(data || {}).map(([key, value]) => (
        <p key={key}>
          <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value || "N/A"}
        </p>
      ))}
    </div>
  );

  return (
    <div className={styles.summaryContainer}>
      <h2>Summary</h2>

      {profile && (
        <div>
          <h3>Profile Information</h3>
          {Object.entries(profile).map(([key, value]) => (
            <p key={key}>
              <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value || "N/A"}
            </p>
          ))}
        </div>
      )}

      <div className={styles.imageUploadSection}>
        {uploadedImage ? (
          <div className={styles.imagePreview}>
            <h3>Uploaded Profile Picture</h3>
            <img
              src={uploadedImage}
              alt="Uploaded Profile"
              className={styles.uploadedImage}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "default-placeholder.png";
              }}
            />
          </div>
        ) : (
          <p>No image uploaded yet.</p>
        )}
      </div>

      {address && (
        <div className={styles.summaryDetails}>
          <h3>Address</h3>
          {Object.entries(address).map(([key, value]) => (
            <p key={key}>
              <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value || "N/A"}
            </p>
          ))}
        </div>
      )}

      {renderDetails("Family Background", familyBackground)}
      {renderDetails("Horoscope", horoscope)}
      {renderDetails("Expectation", Expectation)}

      {education && (
        <div>
          <h3>Education Information</h3>
          {Object.entries(education).map(([key, value]) => (
            <p key={key}>
              <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value || "N/A"}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Summary;
