const m3uUrl = 'https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u';

// Live Now এর ৩টা ম্যানুয়াল চ্যানেল
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

// M3U থেকে চ্যানেল লোড করে ক্যাটাগরি অনুযায়ী সাজানো
async function loadChannelsFromM3U() {
  const response = await fetch(m3uUrl);
  const text = await response.text();

  const lines = text.split('\n');
  const categories = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('#EXTINF')) {
      const nameMatch = line.match(/,(.*)$/);
      const groupMatch = line.match(/group-title="([^"]+)"/);

      const name = nameMatch ? nameMatch[1].trim() : 'Unnamed';
      const group = groupMatch ? groupMatch[1].trim() : 'Others';
      const url = lines[i + 1]?.trim();

      if (url && url.startsWith('http')) {
        const channel = {
          name,
          img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
          url,
          isLive: false
        };

        if (!categories[group]) {
          categories[group] = [];
        }
        categories[group].push(channel);
      }
    }
  }

  return categories;
}

// মূল এক্সপোর্ট: Live Now + M3U থেকে লোড হওয়া সব ক্যাটাগরি
export async function getChannels() {
  const m3uCategories = await loadChannelsFromM3U();
  return {
    "Live Now": liveNowChannels,
    ...m3uCategories
  };
}
