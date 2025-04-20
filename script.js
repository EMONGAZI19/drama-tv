if (document.getElementById("channelContainer")) {
  const container = document.getElementById("channelContainer");

  function renderAllChannels() {
    container.innerHTML = "";
    for (const category in channels) {
      const section = document.createElement("div");
      section.id = category;

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

  renderAllChannels();

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    container.innerHTML = "";

    if (!query) {
      renderAllChannels();
      return;
    }

    const resultGrid = document.createElement("div");
    resultGrid.className = "channel-grid";

    for (const category in channels) {
      channels[category].forEach(channel => {
        if (channel.name.toLowerCase().includes(query)) {
          const div = document.createElement("div");
          div.className = "channel";
          div.onclick = () => {
            window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
          };

          div.innerHTML = `
            <img src="${channel.img}" alt="${channel.name}" />
            <span>${channel.name}</span>
          `;
          resultGrid.appendChild(div);
        }
      });
    }

    if (resultGrid.children.length === 0) {
      container.innerHTML = `<p style="text-align:center; padding: 20px;">কোনো চ্যানেল পাওয়া যায়নি</p>`;
    } else {
      container.appendChild(resultGrid);
    }
  });
}

const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
};

scrollBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});
