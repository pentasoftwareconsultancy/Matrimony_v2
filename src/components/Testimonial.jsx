import { useState } from "react";
import styles from "../styles/Testimonial.module.css";

const TestimonialDashboard = () => {
  const [testimonials, setTestimonials] = useState([]); // Dashboard testimonials
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    position: "",
    text: "",
    image: "",
  });
  const [notifications, setNotifications] = useState([]); // List of all notifications

  // Handle form submission
  const handleAddTestimonial = (e) => {
    e.preventDefault();

    // Add testimonial to the dashboard
    setTestimonials([...testimonials, newTestimonial]);

    // Add a new notification
    const newNotification = `Testimonial from ${newTestimonial.name} added to the dashboard!`;
    setNotifications([...notifications, newNotification]);

    // Clear form inputs
    setNewTestimonial({ name: "", position: "", text: "", image: "" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.d}>
      <div className={styles.formSection}>
        <h2>Submit a Testimonial</h2>

        <form className={styles.form} onSubmit={handleAddTestimonial}>
          <input
            type="text"
            placeholder="Name"
            value={newTestimonial.name}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Position"
            value={newTestimonial.position}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, position: e.target.value })}
            required
          />
          <textarea
            placeholder="Testimonial"
            value={newTestimonial.text}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, text: e.target.value })}
            required
          ></textarea>
          <input
            type="url"
            placeholder="Image URL (optional)"
            value={newTestimonial.image}
            onChange={(e) => setNewTestimonial({ ...newTestimonial, image: e.target.value })}
          />
          <button type="submit">Add Testimonial</button>
        </form>
      </div>

      
      {/* Notification Section */}
      <div className={styles.notificationsSection}>
<form className={styles.formSections} >
        <h2>All Notifications</h2>
        {notifications.length === 0 ? (
          <p>No notifications yet.</p>
        ) : (
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>{notification}</li>
            ))}
          </ul>
        )}
      </form>
      </div>
      </div>
      <div className={styles.dashboardSection}>
        <h2>Testimonials</h2>
        {testimonials.length === 0 ? (
          <p>No testimonials yet.</p>
        ) : (
          <div className={styles.testimonialList}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.position}</p>
                <p>{testimonial.text}</p>
                {testimonial.image && (
                  <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} />
                )}
              </div>
            ))}
          </div>
          
        )}
      </div>
    </div>
  );
};

export default TestimonialDashboard;