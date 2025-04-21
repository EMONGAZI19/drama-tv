document.addEventListener("DOMContentLoaded", () => {
});
window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("channelContainer");

  channels.forEach(channel => {
    const div = document.createElement("div");
    div.className = "channel-card";
    div.innerHTML = `
      <a href="${channel.url}">
        <img src="${channel.image}" alt="${channel.name}">
        <h3>${channel.name}</h3>
      </a>
    `;
    container.appendChild(div);
  });
  const searchInput = document.getElementById("searchInput");

  function renderAllChannels() {
    container.innerHTML = "";

    for (const category in channels) {
      const section = document.createElement("div");
      section.id = category;

      const heading = document.createElement("h3");
      heading.textContent = category;
      section.appendChild(heading);

      if (category === "Live Now") {
        const swiperWrapper = document.createElement("div");
        swiperWrapper.className = "swiper";

        const swiperContainer = document.createElement("div");
        swiperContainer.className = "swiper-wrapper";

        channels[category].forEach(channel => {
          const slide = document.createElement("div");
          slide.className = "swiper-slide";
          slide.innerHTML = `
            <div class="channel small-channel" onclick="window.location.href='player.html?stream=${encodeURIComponent(channel.url)}&category=${encodeURIComponent(category)}&name=${encodeURIComponent(channel.name)}&logo=${encodeURIComponent(channel.img)}'">
              <div class="thumbnail-container">
                <img src="${channel.img}" alt="${channel.name}" />
                ${channel.isLive ? '<span class="live-badge">LIVE</span>' : ''}
              </div>
              <span>${channel.name}</span>
            </div>
          `;
          swiperContainer.appendChild(slide);
        });

        swiperWrapper.appendChild(swiperContainer);

        // Optional Navigation
        const nextBtn = document.createElement("div");
        const prevBtn = document.createElement("div");
        nextBtn.className = "swiper-button-next";
        prevBtn.className = "swiper-button-prev";
        swiperWrapper.appendChild(prevBtn);
        swiperWrapper.appendChild(nextBtn);

        section.appendChild(swiperWrapper);
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

        section.appendChild(grid);
      }

      container.appendChild(section);
    }

    initializeSwiper();
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

function toggleMenu() {
  const menu = document.getElementById("dropdown");
  menu.classList.toggle("show");
}

// Initialize Swiper.js after DOM is updated
function initializeSwiper() {
  new Swiper(".swiper", {
    slidesPerView: 1.5,
    spaceBetween: 15,
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3.5,
      },
      1024: {
        slidesPerView: 4.5,
      },
    },
  });
}
