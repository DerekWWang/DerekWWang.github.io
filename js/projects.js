const response = await fetch('media/projects.json');
const projects = await response.json();

const grid = document.querySelector('.card-grid');

projects.forEach(project => {
    const isInProgress = project['in-progress'];
    const badge = isInProgress
        ? '<span class="badge badge-progress">In Progress</span>'
        : '';

    const tech = project.tech.map(t => `<span class="tag">${t}</span>`).join('');

    const footer = project.link
        ? `<div class="card-footer"><a href="${project.link}" target="_blank">View Project →</a></div>`
        : '';

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${project.name}</h3>
            ${badge}
        </div>
        <p class="card-desc">${project.description}</p>
        <div class="tags">${tech}</div>
        ${footer}
    `;

    grid.appendChild(card);
});
