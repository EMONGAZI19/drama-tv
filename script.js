const container = document.getElementById("channel-grid");
channels.forEach(ch => {
  const div = document.createElement("div");
  div.className = "channel-card";
  div.innerHTML = \`<img src="\${ch.image}" alt="\${ch.name}"><p>\${ch.name}</p>\`;
  div.onclick = () => {
    window.location.href = \`player.html?stream=\${encodeURIComponent(ch.stream)}&name=\${encodeURIComponent(ch.name)}&category=\${encodeURIComponent(ch.category)}\`;
  };
  container.appendChild(div);
});