const m3uUrl = 'https://m3u.ch/pl/59e9a608c3dd91dae2d9ec1fc9dbf52a_0989dd3fbd4c4512315b5b25e668cbf1.m3u';

async function fetchChannelsFromM3U() {
  const response = await fetch(m3uUrl);
  const text = await response.text();

  const lines = text.split('\n');
  const channels = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('#EXTINF')) {
      const nameMatch = line.match(/,(.*)$/);
      const name = nameMatch ? nameMatch[1].trim() : 'Unknown';
      const streamUrl = lines[i + 1]?.trim();
      if (streamUrl && streamUrl.startsWith('http')) {
        channels.push({ name, url: streamUrl });
      }
    }
  }

  return channels;
}

// এই ফাংশন এক্সপোর্ট করুন যাতে অন্য ফাইল থেকে ব্যবহার করা যায়
export default fetchChannelsFromM3U;
