/**
 * Portfolio: year in footer, theme toggle, and projects rendered from data/projects.js.
 */
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  var externalIcon = '<svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M1 11L11 1M11 1H4M11 1v7"/></svg>';

  // Turns a YouTube link into an embed URL, or returns null for other links
  function youtubeEmbed(url) {
    var match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    return match ? 'https://www.youtube.com/embed/' + match[1] : null;
  }

  function renderVideo(src) {
    var embed = youtubeEmbed(src);
    if (embed) {
      return `<div class="media__item media__item--embed"><iframe src="${embed}" title="Project video" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }
    return `<div class="media__item"><video src="${src}" controls preload="metadata" playsinline></video></div>`;
  }

  function renderProjects() {
    var list = document.getElementById('projects-list');
    if (!list) return;

    var projects = window.PROJECTS || [];
    if (!projects.length) {
      list.innerHTML = '<p class="projects-empty">No projects yet.</p>';
      return;
    }

    list.innerHTML = projects.map(function (project) {
      var tasks = (project.tasks || []).map(function (task) {
        return `<li>${task}</li>`;
      }).join('');

      var links = (project.links || []).map(function (link) {
        return `<a class="project-card__link" href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label}${externalIcon}</a>`;
      }).join('');

      var media =(project.videos || []).map(renderVideo).concat(
        (project.images || []).map(function (src) {
          return `<a class="media__item" href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${project.name} screenshot" loading="lazy"></a>`;
        })
      ).join('');

      return `
        <article class="project-card">
          <h3 class="project-card__name">${project.name}</h3>
          ${project.description ? `<p class="project-card__description">${project.description}</p>` : ''}
          ${links ? `<div class="project-card__links">${links}</div>` : ''}
          ${tasks ?`<ul class="project-card__tasks">${tasks}</ul>` : ''}
          ${media ? `<div class="media">${media}</div>` : ''}
        </article>
      `;
    }).join('');
  }

  // Theme toggle
  var themeToggle = document.querySelector('.theme-toggle');
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
      themeToggle.classList.add('theme-toggle--spin');
      setTimeout(function () { themeToggle.classList.remove('theme-toggle--spin'); }, 400);
    });
  }

  renderProjects();

  // Fade project cards in as they scroll into view
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.project-card').forEach(function (card) {
      card.classList.add('reveal');
      revealObserver.observe(card);
    });
  }
})();
