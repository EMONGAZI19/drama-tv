const channels = {
  "Live Now": [
    {
      name: "Live Match 1",
      img: "https://via.placeholder.com/150x100?text=Live+1",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    },
    {
      name: "Live Match 2",
      img: "https://via.placeholder.com/150x100?text=Live+2",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    },
    {
      name: "Live Match 3",
      img: "https://via.placeholder.com/150x100?text=Live+3",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }
  ],
  "Bangladesh": [
    { name: "BD Channel 1", img: "https://via.placeholder.com/150x100?text=BD+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 2", img: "https://via.placeholder.com/150x100?text=BD+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 3", img: "https://via.placeholder.com/150x100?text=BD+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 4", img: "https://via.placeholder.com/150x100?text=BD+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 5", img: "https://via.placeholder.com/150x100?text=BD+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 6", img: "https://via.placeholder.com/150x100?text=BD+6", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 7", img: "https://via.placeholder.com/150x100?text=BD+7", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 8", img: "https://via.placeholder.com/150x100?text=BD+8", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 9", img: "https://via.placeholder.com/150x100?text=BD+9", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "BD Channel 10", img: "https://via.placeholder.com/150x100?text=BD+10", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
  ],
  "Entertainment": [
    { name: "Entertainment 1", img: "https://via.placeholder.com/150x100?text=ENT+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Entertainment 2", img: "https://via.placeholder.com/150x100?text=ENT+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Entertainment 3", img: "https://via.placeholder.com/150x100?text=ENT+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Entertainment 4", img: "https://via.placeholder.com/150x100?text=ENT+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Entertainment 5", img: "https://via.placeholder.com/150x100?text=ENT+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Entertainment 6", img: "https://via.placeholder.com/150x100?text=ENT+6", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Entertainment 7", img: "https://via.placeholder.com/150x100?text=ENT+7", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
  ],
  "Indian Bangla": [
    { name: "Indian Bangla 1", img: "https://via.placeholder.com/150x100?text=IB+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Indian Bangla 2", img: "https://via.placeholder.com/150x100?text=IB+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Indian Bangla 3", img: "https://via.placeholder.com/150x100?text=IB+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Indian Bangla 4", img: "https://via.placeholder.com/150x100?text=IB+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Indian Bangla 5", img: "https://via.placeholder.com/150x100?text=IB+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
  ],
  "Kids": [
    { name: "Kids 1", img: "https://via.placeholder.com/150x100?text=Kids+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Kids 2", img: "https://via.placeholder.com/150x100?text=Kids+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Kids 3", img: "https://via.placeholder.com/150x100?text=Kids+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Kids 4", img: "https://via.placeholder.com/150x100?text=Kids+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
  ],
  "Sports": [
    { name: "Sports 1", img: "https://via.placeholder.com/150x100?text=Sports+1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 2", img: "https://via.placeholder.com/150x100?text=Sports+2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 3", img: "https://via.placeholder.com/150x100?text=Sports+3", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 4", img: "https://via.placeholder.com/150x100?text=Sports+4", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 5", img: "https://via.placeholder.com/150x100?text=Sports+5", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 6", img: "https://via.placeholder.com/150x100?text=Sports+6", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 7", img: "https://via.placeholder.com/150x100?text=Sports+7", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 8", img: "https://via.placeholder.com/150x100?text=Sports+8", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 9", img: "https://via.placeholder.com/150x100?text=Sports+9", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { name: "Sports 10", img: "https://via.placeholder.com/150x100?text=Sports+10", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
  ]
};
