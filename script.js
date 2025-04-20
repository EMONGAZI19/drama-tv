const video = document.getElementById('player');
const hls = new Hls();
const player = new Plyr(video);

function playStream(url) {
    hls.loadSource(url);
    hls.attachMedia(video);
    video.play();
}

window.addEventListener('DOMContentLoaded', () => {
    playStream('https://tv.bdixtv24.co/toffee/live.php?id=7e00fee81848&e=.m3u8');
});
