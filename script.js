// Load channels into index.html
if (document.getElementById("channelContainer")) {
  const container = document.getElementById("channelContainer");

  for (const category in channels) {
    const section = document.createElement("div");
    const heading = document.createElement("h3");
    heading.textContent = category;

    const grid = document.createElement("div");
    grid.className = "channel-grid";

    channels[category].forEach((channel) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.onclick = () => {
        window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}`;
      };

      div.innerHTML = `
        <img src="${channel.image}" />
        <span>${channel.name}</span>
      `;
      grid.appendChild(div);
    });

    section.appendChild(heading);
    section.appendChild(grid);
    container.appendChild(section);
  }
}

// Load player and related channels
if (window.location.pathname.includes("player.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const streamUrl = urlParams.get("stream");
  const category = urlParams.get("category");

  const player = document.getElementById("videoPlayer");
  if (player && streamUrl) {
    player.src = streamUrl;
  }

  const relatedContainer = document.getElementById("relatedChannels");
  if (relatedContainer && category && channels[category]) {
    channels[category].forEach((channel) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.onclick = () => {
        window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}`;
      };

      div.innerHTML = `
        <img src="${channel.image}" />
        <span>${channel.name}</span>
      `;
      relatedContainer.appendChild(div);
    });
  }
}
