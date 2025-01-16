import { useState, useEffect } from 'react';
import styles from './profileUpload.module.css';

const ProfilePhotos = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    // Retrieve the stored profile picture from localStorage if available
    const storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create an object URL for the uploaded file
      const imageUrl = URL.createObjectURL(file);

      // Save the image URL to localStorage
      localStorage.setItem('profilePicture', imageUrl);

      // Set the profile picture state to show the uploaded image
      setProfilePicture(imageUrl);
    }
  };

  return (
    <div className={styles.profilePhotosContainer}>
      <h2>Profile Photos</h2>
      <p className={styles.instruction}>
        * Kindly bring cropping lines on photo at proper position and then click on submit.
      </p>
      <div className={styles.profilePictureContainer}>
        <p>1 Upload your first profile picture (Close-up preferred):</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className={styles.fileInput}
        />
        {profilePicture && (
          <img
            src={profilePicture}
            alt="Profile Picture"
            className={styles.profilePicturePreview}
          />
        )}
      </div>
    </div>
  );
};

export default ProfilePhotos;
