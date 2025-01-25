import { useState } from 'react';
import styles from './Blog.module.css';

function Blog() {
  const allPostsData = [
    { title: 'Migrating to Linear 101', image: './step/images.jpg', NewBlog: 'd', Herad: 'vbb', Text: 'b', type: 'Recent' },
    { title: 'UX review presentations', image: '../assets/images (2).jpg', NewBlog: '', Herad: '', Text: '', type: 'Recent' },
    { title: 'Building your API Stack', image: '../assets/images (1).jpg', NewBlog: '', Herad: '', Text: '', type: 'Recent' },
    { title: 'Grid system for better Design User Interface', image: '../assets/download.png', NewBlog: '', Herad: '', Text: '', type: 'Recent' },
    { title: 'Climate Endgame: Exploring catastrophic climate change scenarios', image: '../assets/download.jpg', NewBlog: '', Herad: '', Text: '', type: 'Recent' },
    { title: 'Bill Walsh leadership lessons', image: '/images/post6.jpg', NewBlog: '', Herad: '', Text: '', type: 'All' },
    { title: 'PM mental models', image: '/images/post7.jpg', NewBlog: '', Herad: '', Text: '', type: 'All' },
    { title: 'What is Wireframing?', image: '/images/post8.jpg', NewBlog: '', Herad: '', Text: '', type: 'All' },
    { title: 'How collaboration makes us better designers', image: '/images/post9.jpg', NewBlog: '', Herad: '', Text: '', type: 'All' },
    { title: 'Our top 10 Javascript frameworks to use', image: '/images/post10.jpg', NewBlog: '', Herad: '', Text: '', type: 'All' },
    { title: 'Podcast: Creating a better CX Community', image: '/images/post11.jpg', NewBlog: '', Herad: '', Text: '', type: 'All' },
  ];

  const [filter, setFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredPosts = allPostsData.filter((post) => {
    const matchesFilter = filter === 'All' || post.type === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchText.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Log filtered posts for debugging
  console.log(filteredPosts); // This will output the filtered data in the browser console

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BLOG</h1>

      {/* Search and Filter Section */}
      <div className={styles.filterContainer}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className={styles.searchInput}
        />
        <div>
          <button
            className={filter === 'All' ? styles.activeFilter : ''}
            onClick={() => setFilter('All')}
          >
            All Posts
          </button>
          <button
            className={filter === 'Recent' ? styles.activeFilter : ''}
            onClick={() => setFilter('Recent')}
          >
            Recent Posts
          </button>
          <button
            className={styles.addButton}
            onClick={() => window.location.href = 'aadblog'} // Use React-friendly navigation
          >
            Add New Member
          </button>
        </div>
      </div>

      {/* Table Section */}
      <section className={styles.tableSection}>
        <h2>Blog Posts Table</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Sr</th>
              <th>Title</th>
              <th>Image</th>
              <th>NewBlog</th>
              <th>Herad</th>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map((post, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{post.title}</td>
                <td>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.tableImage}
                  />
                </td>
                <td>{post.NewBlog || 'N/A'}</td>
                <td>{post.Herad || 'N/A'}</td>
                <td>{post.Text || 'N/A'}</td>
                <td>
                  <button
                    onClick={() => alert(`Viewing: ${post.title}`)}
                    className={styles.actionButton}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredPosts.length === 0 && <p>No posts match your search criteria.</p>}
      </section>
    </div>
  );
}

export default Blog;
