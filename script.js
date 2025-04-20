// =======================
// INDEX.HTML এর জন্য
// =======================
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
        window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&img=${encodeURIComponent(channel.img)}`;
      };

      div.innerHTML = `
        <img src="${channel.img}" alt="${channel.name}" />
        <span>${channel.name}</span>
      `;
      grid.appendChild(div);
    });

    section.appendChild(heading);
    section.appendChild(grid);
    container.appendChild(section);
  }
}

// =======================
// PLAYER.HTML এর জন্য
// =======================
if (window.location.pathname.includes("player.html")) {
  const urlParams = new URLSearchParams(window.location.search);
  const streamUrl = urlParams.get("stream");
  const category = urlParams.get("category");
  const channelName = urlParams.get("name");
  const channelImg = urlParams.get("img");

  // Video Player
  const player = document.getElementById("videoPlayer");
  if (player && streamUrl) {
    player.src = streamUrl;
  }

  // Channel Info Show
  const infoContainer = document.getElementById("channelInfo");
  if (infoContainer && channelName && channelImg) {
    infoContainer.innerHTML = `
      <img src="${channelImg}" alt="${channelName}" style="height:40px; vertical-align: middle;" />
      <span style="margin-left: 10px; font-size: 18px;">${channelName}</span>
    `;
  }

  // Related Channels
  const relatedContainer = document.getElementById("relatedChannels");
  if (relatedContainer && category && channels[category]) {
    channels[category].forEach((channel) => {
      const div = document.createElement("div");
      div.className = "channel";
      div.onclick = () => {
        window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&img=${encodeURIComponent(channel.img)}`;
      };

      div.innerHTML = `
        <img src="${channel.img}" alt="${channel.name}" />
        <span>${channel.name}</span>
      `;
      relatedContainer.appendChild(div);
    });
  }
}
