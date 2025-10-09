const red = document.getElementById('themeRed');
const blue = document.getElementById('themeBlue');
const sideToggle = document.getElementById('sideToggle');

function enableTheme(useBlue) {
  if (red) red.disabled = useBlue;
  if (blue) blue.disabled = !useBlue;
}

// initial pick & sync toggle
document.addEventListener('DOMContentLoaded', () => {
  const pickBlue = Math.random() < 0.5;
  enableTheme(pickBlue);
  if (sideToggle) sideToggle.checked = pickBlue;
});

// switch theme when checkbox changes
if (sideToggle) {
  sideToggle.addEventListener('change', () => {
    enableTheme(sideToggle.checked);
  });
}

// optional: for onload="bgc()"
window.bgc = function() {
  if (sideToggle) enableTheme(sideToggle.checked);
};
