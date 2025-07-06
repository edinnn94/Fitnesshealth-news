const apiKey = 'V3U_bWP6XjcbB-jET7tDR-YzE2VgH7AeLmAOJ-ME';
const url = `https://newsapi.org/v2/everything?q=fitness+OR+health+OR+nutrition&language=en&sortBy=publishedAt&pageSize=20&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    renderNews(data.articles);
  } catch (err) {
    console.error('Failed to fetch news:', err);
  }
}

function renderNews(articles) {
  const container = document.getElementById('news-grid');
  container.innerHTML = '';
  articles.forEach(a => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${a.urlToImage || 'https://via.placeholder.com/300x150'}" alt="">
      <h2>${a.title}</h2>
      <p>${a.description || ''}</p>
      <small>${new Date(a.publishedAt).toLocaleString('en-US')} – ${a.source.name}</small>
      <a href="${a.url}" target="_blank">Read more</a>
    `;
    container.appendChild(card);
  });
}

window.onload = fetchNews;
