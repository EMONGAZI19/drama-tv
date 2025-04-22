const m3uUrl = 'https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u';

// Live Now এর ৩টা চ্যানেল
const liveNowChannels = [
  {
    name: "Test 1",
    img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
    url: "https://tv.bdixtv24.co/toffee/live.php?id=7e00fee81848&e=.m3u8",
    isLive: true
  },
  {
    name: "Test 2",
    img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
    url: "https://raw.githubusercontent.com/EMONGAZI19/XYZ/refs/heads/main/starbd.dramaworld.m3u8",
    isLive: true
  },
  {
    name: "Test 3",
    img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
    url: "https://some-other-link.m3u8",
    isLive: true
  }
];

async function fetchM3UChannels() {
  const res = await fetch(m3uUrl);
  const data = await res.text();

  const lines = data.split('\n');
  const m3uChannels = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith('#EXTINF')) {
      const nameMatch = lines[i].match(/,(.*)$/);
      const logoMatch = lines[i].match(/tvg-logo="(.*?)"/);
      const name = nameMatch ? nameMatch[1].trim() : 'Unknown';
      const img = logoMatch ? logoMatch[1].trim() : 'https://i.postimg.cc/d16Y2v56/20250421-001244.png';
      const url = lines[i + 1]?.trim();

      if (url && url.startsWith('http')) {
        m3uChannels.push({
          name,
          img,
          url,
          isLive: false
        });
      }
    }
  }

  return m3uChannels;
}

export async function getChannels() {
  const otherChannels = await fetchM3UChannels();

  return {
    "Live Now": liveNowChannels,
    "Others": otherChannels
  };
}
