function openPlayer(url, category) {
  window.location.href = `player.html?stream=${encodeURIComponent(url)}&category=${encodeURIComponent(category)}`;
}

function groupChannelsByCategory() {
  const grouped = {};
  channels.forEach(channel => {
    if (!grouped[channel.category]) grouped[channel.category] = [];
    grouped[channel.category].push(channel);
  });
  return grouped;
}

function createChannelHTML(channel) {
  return `
    <div class="channel" onclick="openPlayer('${channel.url}', '${channel.category}')">
      <img src="${channel.thumbnail}" />
      <span>${channel.name}</span>
    </div>
  `;
}

function renderChannels() {
  const container = document.getElementById('channel-container');
  const grouped = groupChannelsByCategory();
  for (let category in grouped) {
    const section = document.createElement('section');
    section.innerHTML = `<h3>${category}</h3><div class="channel-grid">${grouped[category].map(createChannelHTML).join('')}</div>`;
    container.appendChild(section);
  }
}

document.addEventListener('DOMContentLoaded', renderChannels);
