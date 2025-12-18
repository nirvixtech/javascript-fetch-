const API_URL = 'https://jsonplaceholder.typicode.com/post/';

const statusEl = document.getElementById('status');
const postsContainer = document.getElementById('posts-container');

async function fetchPosts() {
  try {
    statusEl.textContent = 'Loading posts...';

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const posts = await response.json();
    renderPosts(posts);
    statusEl.textContent = `Loaded ${posts.length} posts.`;
  } catch (error) {
    console.error('Error fetching posts:', error);
    statusEl.textContent = 'Failed to load posts. Please try again later.';
  }
}

function renderPosts(posts) {
  postsContainer.innerHTML = '';

  posts.forEach((post) => {
    const card = document.createElement('article');
    card.className = 'post-card';

    const title = document.createElement('h2');
    title.className = 'post-title';
    title.textContent = post.title;

    const body = document.createElement('p');
    body.className = 'post-body';
    body.textContent = post.body;

    const meta = document.createElement('div');
    meta.className = 'post-meta';
    meta.textContent = `User ID: ${post.userId} · Post ID: ${post.id}`;

    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(meta);

    postsContainer.appendChild(card);
  });
}

// Start fetching as soon as the script loads
fetchPosts();



