function loadCategory(category) {
  const app = document.getElementById("app");
  const home = document.getElementById("home");
  const content = document.getElementById("content");
  const backBtn = document.getElementById("backBtn");

  const backgrounds = {
    learner: "https://images.unsplash.com/photo-1581090700227-1e7e8f3f9c7d",
    gamer: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    artist: "https://images.unsplash.com/photo-1502920917128-1aa500764b7a",
    hacker: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    sports: "https://images.unsplash.com/photo-1517649763962-0c623066013b",
    iq: "https://images.unsplash.com/photo-1593642532400-2682810df593"
  };

  app.style.backgroundImage = `url('${backgrounds[category]}?auto=format&fit=crop&w=1920&q=80')`;
  home.style.display = "none";
  content.style.display = "block";
  backBtn.style.display = "inline-block";

  if (category === "iq") {
    fetch("https://en.wikipedia.org/api/rest_v1/page/summary/IQ_test")
      .then(res => res.json())
      .then(data => {
        content.innerHTML = `
          <h2>IQ Test</h2>
          <p>${data.extract}</p>
          <input type="text" id="searchInput" placeholder="Search IQ topics..." />
          <button onclick="searchWiki('iq')">Search</button>
          <div id="searchResults"></div>
        `;
      });
  } else {
    let topic = category === "hacker" ? "Ethical hacking" :
                category === "gamer" ? "Video game development" :
                category === "artist" ? "Art movements" :
                category === "sports" ? "Sport" :
                category;

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`)
      .then(res => res.json())
      .then(data => {
        let imageHTML = data.thumbnail ? `<img src="${data.thumbnail.source}" width="300"/>` : "";
        content.innerHTML = `
          <h2>${category.toUpperCase()} Zone</h2>
          ${imageHTML}
          <p>${data.extract}</p>
          <input type="text" id="searchInput" placeholder="Search ${category}..." />
          <button onclick="searchWiki('${category}')">Search</button>
          <div id="searchResults"></div>
        `;
      });
  }
}

function searchWiki(category) {
  const query = document.getElementById("searchInput").value;
  const results = document.getElementById("searchResults");

  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(query)}`)
    .then(res => res.json())
    .then(data => {
      let imageHTML = data.thumbnail ? `<img src="${data.thumbnail.source}" width="300"/>` : "";
      results.innerHTML = `
        <h3>Search Result</h3>
        ${imageHTML}
        <p>${data.extract}</p>
      `;
    })
    .catch(() => {
      results.innerHTML = `<p>No results found.</p>`;
    });
}

function goBack() {
  document.getElementById("home").style.display = "block";
  document.getElementById("content").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
}
