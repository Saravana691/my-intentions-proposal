function showLove() {
  const surprise = document.getElementById('surprise');
  surprise.classList.remove('hidden');

  // Triggering the show animation
  setTimeout(() => {
    surprise.classList.add('show');
  }, 50);
}
