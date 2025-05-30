function showLove() {
  const surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");

  // Trigger pop animation by adding 'pop' class
  surprise.classList.add("pop");

  // Optional: disable the button after click so they can't spam it
  document.querySelector("button").disabled = true;
}

