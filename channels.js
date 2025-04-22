const channels = {
  "Live Now": [
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
  ]
};

async function loadM3UChannels() {
  const m3uUrl = 'https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u';
  
  try {
    const res = await fetch(m3uUrl);
    const text = await res.text();
    const lines = text.split('\n');

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('#EXTINF')) {
        const nameMatch = lines[i].match(/,(.*)$/);
        const logoMatch = lines[i].match(/tvg-logo="(.*?)"/);
        const groupMatch = lines[i].match(/group-title="(.*?)"/);
        const name = nameMatch ? nameMatch[1].trim() : "Unnamed Channel";
        const img = logoMatch ? logoMatch[1].trim() : "https://i.postimg.cc/d16Y2v56/20250421-001244.png";
        const group = groupMatch ? groupMatch[1].trim() : "Others";
        const url = lines[i + 1]?.trim();

        if (url && url.startsWith('http')) {
          if (!channels[group]) {
            channels[group] = [];
          }

          channels[group].push({
            name: name,
            img: img,
            url: url,
            isLive: false
          });
        }
      }
    }
  } catch (error) {
    console.error("M3U Load Error:", error);
  }
}

loadM3UChannels();
