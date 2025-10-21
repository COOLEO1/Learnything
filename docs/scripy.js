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
    hobbyist: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
    iq: "https://images.unsplash.com/photo-1593642532400-2682810df593"
  };

  app.style.backgroundImage = `url('${backgrounds[category]}?auto=format&fit=crop&w=1920&q=80')`;
  home.style.display = "none";
  content.style.display = "block";
  backBtn.style.display = "inline-block";

  if (category === "iq") {
    fetch("iq_data.json")
      .then(res => res.json())
      .then(data => {
        let html = `<h2>IQ Test</h2>`;
        data.questions.forEach((q, i) => {
          html += `<p>${q.question}</p>`;
          q.options.forEach(opt => {
            html += `<button onclick="checkAnswer('${opt}', '${q.answer}')">${opt}</button>`;
          });
        });
        content.innerHTML = html;
      });
  } else {
    let topic = category === "hacker" ? "Ethical hacking" :
                category === "gamer" ? "Video game development" :
                category === "artist" ? "Art movements" :
                category === "hobbyist" ? "DIY crafts" :
                category;

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(topic)}`)
      .then(res => res.json())
      .then(data => {
        content.innerHTML = `
          <h2>${category.toUpperCase()} Zone</h2>
          <p>${data.extract}</p>
        `;
      })
      .catch(() => {
        content.innerHTML = `<h2>${category.toUpperCase()} Zone</h2><p>Content not available.</p>`;
      });
  }
}

function checkAnswer(selected, correct) {
  alert(selected === correct ? "✅ Correct!" : "❌ Wrong!");
}

function goBack() {
  document.getElementById("home").style.display = "block";
  document.getElementById("content").style.display = "none";
  document.getElementById("backBtn").style.display = "none";
}
