import { useState } from 'react';
import styles from '../styles/AddNewblog.module.css';
import { useNavigate } from 'react-router-dom';

function AddNewblog({ setPosts }) {
  const [newPost, setNewPost] = useState({
    title: '',
    image: '',
    NewBlog: '',
    Herad: '',
    Text: '',
    type: 'Recent'
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new post to the list
    setPosts(prevPosts => [...prevPosts, newPost]);

    // Redirect back to the Blog page
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <h1>Add New Member</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={newPost.image}
            onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            required
          />
        </div>
        <div>
          <label>NewBlog:</label>
          <input
            type="text"
            value={newPost.NewBlog}
            onChange={(e) => setNewPost({ ...newPost, NewBlog: e.target.value })}
          />
        </div>
        <div>
          <label>Herad:</label>
          <input
            type="text"
            value={newPost.Herad}
            onChange={(e) => setNewPost({ ...newPost, Herad: e.target.value })}
          />
        </div>
        <div>
          <label>Text:</label>
          <textarea
            value={newPost.Text}
            onChange={(e) => setNewPost({ ...newPost, Text: e.target.value })}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddNewblog;
