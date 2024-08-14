document.getElementById('yesButton').addEventListener('click', function () {
  document.getElementById('question').style.display = 'none';
  document.getElementById('yesButton').style.display = 'none';
  document.getElementById('noButton').style.display = 'none';

  // แสดงภาพทันที
  const imageContainer = document.querySelector('.image-container');
  imageContainer.style.display = 'block';

  setTimeout(function () {
    imageContainer.style.opacity = 1;
  }, 100);
  document.body.style.backgroundColor = '#ff69b4';
});

document.getElementById('noButton').addEventListener('click', function () {
  const yesButton = document.getElementById('yesButton');
  const currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
  yesButton.style.fontSize = (currentSize + 10) + 'px';
});
