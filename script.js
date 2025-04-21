document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("channelContainer");
  const searchInput = document.getElementById("searchInput");

  function renderAllChannels() {
    container.innerHTML = "";

    for (const category in channels) {
      const section = document.createElement("div");
      section.id = category;

      const heading = document.createElement("h3");
      heading.textContent = category;

      if (category === "Live Now") {
        const swiperContainer = document.createElement("div");
        swiperContainer.className = "swiper live-swiper";

        const swiperWrapper = document.createElement("div");
        swiperWrapper.className = "swiper-wrapper";

        channels[category].forEach(channel => {
          const slide = document.createElement("div");
          slide.className = "swiper-slide";
          slide.onclick = () => {
            window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
          };
          slide.innerHTML = `
            <div class="thumbnail-container">
              <img src="${channel.img}" alt="${channel.name}" />
              ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
            </div>
            <span>${channel.name}</span>
          `;
          swiperWrapper.appendChild(slide);
        });

        swiperContainer.appendChild(swiperWrapper);
        section.appendChild(heading);
        section.appendChild(swiperContainer);
        container.appendChild(section);

        // Initialize Swiper after DOM updates
        setTimeout(() => {
          new Swiper('.live-swiper', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
            grabCursor: true,
          });
        }, 0);

      } else {
        const grid = document.createElement("div");
        grid.className = "channel-grid";

        channels[category].forEach(channel => {
          const div = document.createElement("div");
          div.className = "channel";
          div.onclick = () => {
            window.location.href = `player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}`;
          };
          div.innerHTML = `
            <div class="thumbnail-container">
              <img src="${channel.img}" alt="${channel.name}" />
              ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
            </div>
            <span>${channel.name}</span>
          `;
          grid.appendChild(div);
        });

        section.appendChild(heading);
        section.appendChild(grid);
        container.appendChild(section);
      }
    }
  }

  function filterChannels(query) {
    container.innerHTML = "";
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
            <div class="thumbnail-container">
              <img src="${channel.img}" alt="${channel.name}" />
              ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
            </div>
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
  }

  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    if (!query) {
      renderAllChannels();
    } else {
      filterChannels(query);
    }
  });

  renderAllChannels();
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollToTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = (window.scrollY > 100) ? "block" : "none";
};
scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dropdown toggle
function toggleMenu() {
  const menu = document.getElementById("dropdown");
  menu.classList.toggle("show");
}
