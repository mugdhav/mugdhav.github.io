const articlesContainer = document.querySelector('#articles .grid-container');
const videosContainer = document.querySelector('#videos .grid-container');

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredArticles = articles.filter(article => {
        return article.title.toLowerCase().includes(searchTerm) || article.description.toLowerCase().includes(searchTerm);
    });

    const filteredVideos = videos.filter(video => {
        return video.title.toLowerCase().includes(searchTerm) || video.description.toLowerCase().includes(searchTerm);
    });

    renderArticles(filteredArticles);
    renderVideos(filteredVideos);
});

function renderArticles(articlesToRender) {
    articlesContainer.innerHTML = '';
    articlesToRender.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('grid-item');
        articleElement.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.link}">Read More</a>
            <button class="copy-btn">Copy Description</button>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

function renderVideos(videosToRender) {
    videosContainer.innerHTML = '';
    videosToRender.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('grid-item');
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <p>${video.description}</p>
            <iframe src="${video.embedUrl}" frameborder="0" allowfullscreen></iframe>
        `;
        videosContainer.appendChild(videoElement);
    });
}

renderArticles(articles);
renderVideos(videos);

const backToTopBtn = document.getElementById('backToTopBtn');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
