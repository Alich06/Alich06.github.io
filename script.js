var switchButton = document.getElementById("switch");
var isDark = false;

switchButton.addEventListener("click", function() {
  if (isDark) {
    document.body.classList.remove("dark-mode");
    switchButton.innerHTML = "Switch to Dark Mode";
    isDark = false;
  } else {
    document.body.classList.add("dark-mode");
    switchButton.innerHTML = "Switch to Light Mode";
    isDark = true;
  }
});
