function showLove() {
  const surprise = document.getElementById('surprise');
  surprise.classList.remove('hidden');

  // Delay adding 'show' class to trigger animation
  setTimeout(() => {
    surprise.classList.add('show');
  }, 50);
}
