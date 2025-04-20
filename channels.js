const channels = {
  "Live Now": [
    {
      name: "Live Match 1",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      isLive: true
    },
    {
      name: "Live Match 2",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      isLive: true
    },
    {
      name: "Live Match 3",
      img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      isLive: true
    }
  ],
  "Bangladesh": [
    { name: "BD Channel 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 5", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 6", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 7", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 8", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 9", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "BD Channel 10", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false }
  ],
  "Entertainment": [
    { name: "Entertainment 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Entertainment 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Entertainment 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Entertainment 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Entertainment 5", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Entertainment 6", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Entertainment 7", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false }
  ],
  "Indian Bangla": [
    { name: "Indian Bangla 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Indian Bangla 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Indian Bangla 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Indian Bangla 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Indian Bangla 5", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false }
  ],
  "Kids": [
    { name: "Kids 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Kids 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Kids 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Kids 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false }
  ],
  "Music": [
    { name: "Music 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Music 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Music 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Music 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false }
  ],
  "Sports": [
    { name: "Sports 1", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 2", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 3", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 4", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 5", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 6", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 7", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 8", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 9", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false },
    { name: "Sports 10", img: "https://i.postimg.cc/d16Y2v56/20250421-001244.png", url: "...", isLive: false }
  ]
};
