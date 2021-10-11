// Get the DOM variables
const progress = document.querySelector('.progress');
const previousBtn = document.getElementById('previous');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// Increase currentActive index by one until the last circle
nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// Decrease the currentActive index by one until the first circle
previousBtn.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// Update the active class on the circles and the "disabled" on the buttons
function update() {
  circles.forEach((circle, i) => {
    if (i < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const activeClass = document.querySelectorAll('.active');

  // Calculate the % of which the progress bar should fill. Instead of hard coring it to 33%, 66%, 99%. Then update the css.
  progress.style.width = (activeClass.length - 1) / (circles.length - 1) * 100 + '%';

  // Disable buttons
  if (currentActive === 1) {
    previousBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
    nextBtn.disabled = false;
  }
}