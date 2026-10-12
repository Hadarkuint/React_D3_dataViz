const waves = VANTA.WAVES({
  el: 'body',
  color: '#5c6767',
  mouseControls: true,
  touchControls: false,
  gyroControls: false,
  minHeight: 10.0,
  minWidth: 10.0,
  scale: 4,
  scaleMobile: 1.0,
  shininess: 0.0,
  waveHeight: 10.0,
  waveSpeed: 0.7,
  zoom: 0.6,
});

const portrait = document.querySelector('.portrait');
const defaultWaveColor = new THREE.Color(waves.options.color);
const currentWaveColor = defaultWaveColor.clone();
const hoverWaveColor = new THREE.Color('#091D32');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let colorAnimation;

function transitionWaveColor(targetColor) {
  cancelAnimationFrame(colorAnimation);

  if (reducedMotion.matches) {
    currentWaveColor.copy(targetColor);
    waves.setOptions({ color: currentWaveColor.getHex() });
    return;
  }

  const startColor = currentWaveColor.clone();
  const startTime = performance.now();

  function animateColor(now) {
    const progress = Math.min((now - startTime) / 2000, 1);
    const easedProgress = progress * progress * (3 - 2 * progress);
    currentWaveColor.copy(startColor).lerp(targetColor, easedProgress);
    waves.setOptions({ color: currentWaveColor.getHex() });

    if (progress < 1) {
      colorAnimation = requestAnimationFrame(animateColor);
    }
  }

  colorAnimation = requestAnimationFrame(animateColor);
}

if (portrait) {
  portrait.addEventListener('mouseenter', () =>
    transitionWaveColor(hoverWaveColor),
  );
  portrait.addEventListener('mouseleave', () =>
    transitionWaveColor(defaultWaveColor),
  );

  if (portrait.matches(':hover')) {
    transitionWaveColor(hoverWaveColor);
  }
}
