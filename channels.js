const channels = {
  "Live Now": [
    {
      name: "Live Match 1",
      img: "https://i.postimg.cc/gkmGpTGt/20250416_220424.png",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      isLive: true
    },
    {
      name: "Live Match 2",
      img: "https://i.postimg.cc/gkmGpTGt/20250416_220424.png",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      isLive: true
    },
    {
      name: "Live Match 3",
      img: "https://i.postimg.cc/gkmGpTGt/20250416_220424.png",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
      isLive: true
    }
  ],
  "Bangladesh": [
    { name: "BD Channel 1", img: "https://i.postimg.cc/gkmGpTGt/20250416_220424.png", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 2", img: "https://i.postimg.cc/gkmGpTGt/20250416_220424.png", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 3", img: "https://via.placeholder.com/150x100?text=BD+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 4", img: "https://via.placeholder.com/150x100?text=BD+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 5", img: "https://via.placeholder.com/150x100?text=BD+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 6", img: "https://via.placeholder.com/150x100?text=BD+6", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 7", img: "https://via.placeholder.com/150x100?text=BD+7", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 8", img: "https://via.placeholder.com/150x100?text=BD+8", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 9", img: "https://via.placeholder.com/150x100?text=BD+9", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "BD Channel 10", img: "https://via.placeholder.com/150x100?text=BD+10", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false }
  ],
  "Entertainment": [
    { name: "Entertainment 1", img: "https://via.placeholder.com/150x100?text=ENT+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Entertainment 2", img: "https://via.placeholder.com/150x100?text=ENT+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Entertainment 3", img: "https://via.placeholder.com/150x100?text=ENT+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Entertainment 4", img: "https://via.placeholder.com/150x100?text=ENT+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Entertainment 5", img: "https://via.placeholder.com/150x100?text=ENT+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Entertainment 6", img: "https://via.placeholder.com/150x100?text=ENT+6", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Entertainment 7", img: "https://via.placeholder.com/150x100?text=ENT+7", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false }
  ],
  "Indian Bangla": [
    { name: "Indian Bangla 1", img: "https://via.placeholder.com/150x100?text=IB+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Indian Bangla 2", img: "https://via.placeholder.com/150x100?text=IB+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Indian Bangla 3", img: "https://via.placeholder.com/150x100?text=IB+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Indian Bangla 4", img: "https://via.placeholder.com/150x100?text=IB+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Indian Bangla 5", img: "https://via.placeholder.com/150x100?text=IB+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false }
  ],
  "Kids": [
    { name: "Kids 1", img: "https://via.placeholder.com/150x100?text=Kids+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Kids 2", img: "https://via.placeholder.com/150x100?text=Kids+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Kids 3", img: "https://via.placeholder.com/150x100?text=Kids+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Kids 4", img: "https://via.placeholder.com/150x100?text=Kids+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false }
  ],
  "Music": [
    { name: "Music 1", img: "https://i.postimg.cc/gkmGpTGt/20250416_220424.png", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Music 2", img: "https://via.placeholder.com/150x100?text=BD+8", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Music 3", img: "https://via.placeholder.com/150x100?text=BD+9", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Music 4", img: "https://via.placeholder.com/150x100?text=BD+10", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false }
  ],
  "Sports": [
    { name: "Sports 1", img: "https://via.placeholder.com/150x100?text=Sports+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 2", img: "https://via.placeholder.com/150x100?text=Sports+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 3", img: "https://via.placeholder.com/150x100?text=Sports+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 4", img: "https://via.placeholder.com/150x100?text=Sports+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 5", img: "https://via.placeholder.com/150x100?text=Sports+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 6", img: "https://via.placeholder.com/150x100?text=Sports+6", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 7", img: "https://via.placeholder.com/150x100?text=Sports+7", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 8", img: "https://via.placeholder.com/150x100?text=Sports+8", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 9", img: "https://via.placeholder.com/150x100?text=Sports+9", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false },
    { name: "Sports 10", img: "https://via.placeholder.com/150x100?text=Sports+10", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", isLive: false }
  ]
};
