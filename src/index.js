// Отримуємо всі контейнери відео
const videoContainers = document.querySelectorAll('.video-container');

// Додаємо обробник події для кожного контейнера відео
videoContainers.forEach(container => {
  const video = container.querySelector('.video');

  video.addEventListener('mouseenter', () => {
    video.play();
  });

  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
  });

  video.addEventListener('click', () => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Для Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Для Chrome, Safari та Edge
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // Для Internet Explorer та Edge
      video.msRequestFullscreen();
    }
  });
});

