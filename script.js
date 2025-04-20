// script.js
const video = document.getElementById('player');
const hls = new Hls();  // HLS.js instance
const player = new Plyr(video); // Plyr.js instance for advanced controls

// Function to start stream from a given URL
function playStream(url) {
    if (Hls.isSupported()) {
        hls.loadSource(url);  // Load the source from the stream URL
        hls.attachMedia(video);  // Attach the media to the player
        video.play();  // Play the video
    }
    // For browsers that don't support HLS.js (like Safari)
    else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.play();
    }
}

// Default stream on page load
window.addEventListener('DOMContentLoaded', () => {
    playStream('https://tv.bdixtv24.co/toffee/live.php?id=7e00fee81848&e=.m3u8');
});
