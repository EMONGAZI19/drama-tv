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
        window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
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
  const channelLogo = urlParams.get("logo");

  // Channel Info Show
  const channelNameEl = document.getElementById("channel-name");
  const channelLogoEl = document.getElementById("channel-logo");

  if (channelNameEl && channelLogoEl) {
    channelNameEl.textContent = channelName;
    channelLogoEl.src = channelLogo;
  }

  // Video Player
  const video = document.getElementById("player");

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(streamUrl);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = streamUrl;
    video.addEventListener("loadedmetadata", function () {
      video.play();
    });
  }

  // Related Channels
  const relatedContainer = document.getElementById("related-channels");
  if (channels[category]) {
    channels[category]
      .filter(ch => ch.name !== channelName)
      .slice(0, 6)
      .forEach(ch => {
        const div = document.createElement("div");
        div.className = "channel";
        div.onclick = () => {
          const stream = encodeURIComponent(ch.url);
          const logo = encodeURIComponent(ch.img);
          const cname = encodeURIComponent(ch.name);
          const cat = encodeURIComponent(category);
          window.location.href = `player.html?stream=${stream}&category=${cat}&name=${cname}&logo=${logo}`;
        };
        div.innerHTML = `
          <img src="${ch.img}" alt="${ch.name}" />
          <span>${ch.name}</span>
        `;
        relatedContainer.appendChild(div);
      });
  }
}
