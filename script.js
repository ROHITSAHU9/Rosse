document.addEventListener('DOMContentLoaded', () => {
  const loadingStatus = document.getElementById('loading-status');
  const bloomBtn = document.getElementById('bloom-btn');
  const loadingBox = document.getElementById('loading-box');
  const flowerContainer = document.getElementById('flower-container');

  // Loading text sequence
  setTimeout(() => { loadingStatus.textContent = "Growing digital petals ..."; }, 800);
  setTimeout(() => { loadingStatus.textContent = "Optimizing rendering ..."; }, 1600);
  setTimeout(() => {
    loadingStatus.textContent = "Ready to bloom!";
    bloomBtn.disabled = false;
    bloomBtn.classList.add('ready');
  }, 2400);

  bloomBtn.addEventListener('click', () => {
    loadingBox.classList.add('hidden');
    flowerContainer.classList.remove('hidden');
    createPetals();
  });

  // Exact Petal Creation Function from video
  function createPetals() {
    const PETAL_LAYERS = [
      { layer: 1, count: 11, w: 35, h: 55 },
      { layer: 2, count: 9,  w: 28, h: 45 },
      { layer: 3, count: 7,  w: 22, h: 35 }
    ];

    const petalsContainer = document.getElementById('petals');

    PETAL_LAYERS.forEach(({ layer, count, w, h }) => {
      const angleStep = 360 / count;
      const layerOffset = 11 * 24 + (Math.random() - 0.5) * 8;

      for (let i = 0; i < count; i++) {
        const petal = document.createElement('div');
        petal.className = `petal layer-${layer}`;

        const angle = layerOffset + i * angleStep + (Math.random() - 0.5) * 5;
        const delay = 1.0 + (layer * 0.2) + (i * 0.05);
        const scaleFilter = 0.94 + (Math.random() - 0.5) * 0.12;
        const translateY = -(layer * 5);

        petal.style.width = `${w}px`;
        petal.style.height = `${h}px`;
        petal.style.animationDelay = `${delay}s`;

        petal.style.setProperty('--angle', `${angle}deg`);
        petal.style.setProperty('--scale', scaleFilter);
        petal.style.setProperty('--ty', `${translateY}px`);

        petalsContainer.appendChild(petal);
      }
    });
  }
});

