const player = document.getElementById('player');
const channelName = document.getElementById('channel-name');
const otherChannels = document.getElementById('other-channels');
const hls = new Hls();

// Get channel name from URL params
const urlParams = new URLSearchParams(window.location.search);
const channel = urlParams.get('channel');

// Set the channel name on the page
channelName.textContent = channel;

// Define the stream URLs for each channel
const channels = {
  'JamunaTV': 'http://38.96.178.201/live/JamunaTV/index.m3u8',
  'EkkatorTV': 'https://xstream-bd-xtv.tiiny.io/stream.php?id=1a7a1365-ae2c-470f-9fb2-25c6e83bb108&e=.m3u8',
  'ChannelOne': 'http://example.com/stream/ChannelOne.m3u8',
  'ATNNews': 'http://example.com/stream/ATNNews.m3u8',
  'ZeeBangla': 'http://example.com/stream/ZeeBangla.m3u8',
  'ColorsBangla': 'http://example.com/stream/ColorsBangla.m3u8',
  'StarJalsha': 'http://example.com/stream/StarJalsha.m3u8',
  'CartoonNetwork': 'http://example.com/stream/CartoonNetwork.m3u8',
  'DisneyChannel': 'http://example.com/stream/DisneyChannel.m3u8',
  'StarSports': 'http://example.com/stream/StarSports.m3u8',
  'ESPN': 'http://example.com/stream/ESPN.m3u8',
  // Add more channels as necessary
};

// Load and play the stream based on the channel
function playStream(channel) {
  if (channels[channel]) {
    hls.loadSource(channels[channel]);
    hls.attachMedia(player);
    player.play();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  playStream(channel);
  
  // Optionally, load other channels from the same category
  const moreChannels = [
    'JamunaTV', 'EkkatorTV', 'ChannelOne', 'ATNNews' // Add more channels
  ];

  moreChannels.forEach((otherChannel) => {
    const channelElement = document.createElement('div');
    channelElement.classList.add('channel');
    channelElement.innerHTML = `
      <img src="https://via.placeholder.com/150x100?text=${otherChannel}" />
      <span>${otherChannel}</span>
    `;
    channelElement.onclick = () => {
      window.location.href = `player.html?channel=${otherChannel}`;
    };
    otherChannels.appendChild(channelElement);
  });
});
