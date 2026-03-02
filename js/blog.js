const response = await fetch('media/blog.json');
const { posts } = await response.json();

const grid = document.querySelector('.card-grid');

posts.forEach(post => {
    const isInProgress = post['in-progress'];
    const badge = isInProgress
        ? '<span class="badge badge-progress">In Progress</span>'
        : '<span class="badge badge-live">Published</span>';

    const date = new Date(post.date + 'T00:00:00').toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    });

    const tags = post.tags.map(t => `<span class="tag">${t}</span>`).join('');

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${post.title}</h3>
            ${badge}
        </div>
        <div class="card-date">${date}</div>
        <div class="tags">${tags}</div>
    `;

    grid.appendChild(card);
});
