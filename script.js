const btn = document.getElementById('colorBtn');

btn.addEventListener('click', () => {
  const colors = ['#ff6a00', '#ee0979', '#00f260', '#0575e6', '#7f00ff', '#00ffe7'];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.background = `linear-gradient(-45deg, ${color1}, ${color2})`;
  document.body.style.backgroundSize = '400% 400%';
  document.body.style.animation = 'gradientBG 15s ease infinite';
});
