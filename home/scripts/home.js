const track = document.getElementById("carousel-track");
const carouselContainer = document.querySelector(".carousel-container");

let animationFrameId;
let targetPercentage = 0;
let currentPercentage = 0;

const handleOnDown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
  track.dataset.prevPercentage = currentPercentage;
};

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
};

const handleOnMove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX;
  const maxDelta = window.innerWidth / 1;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage;
  targetPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(updateAnimation);
  }
};

const handleOnWheel = (e) => {
  const maxDelta = window.innerWidth / 1;
  const percentage = (e.deltaY / maxDelta) * -100;
  targetPercentage = Math.max(Math.min(currentPercentage + percentage, 0), -100);

  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(updateAnimation);
  }
};

const updateAnimation = () => {
  const easing = 0.1; 
  currentPercentage += (targetPercentage - currentPercentage) * easing;

  track.dataset.percentage = currentPercentage;
  track.style.transform = `translate(${currentPercentage}%, -50%)`;

  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${100 + currentPercentage}% center`;
  }

  if (Math.abs(targetPercentage - currentPercentage) < 0.1) {
    currentPercentage = targetPercentage;
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
    track.dataset.prevPercentage = currentPercentage; 
  } else {
    animationFrameId = requestAnimationFrame(updateAnimation);
  }
};

carouselContainer.onmousedown = (e) => handleOnDown(e);
carouselContainer.ontouchstart = (e) => handleOnDown(e.touches[0]);
carouselContainer.onmouseup = () => handleOnUp();
carouselContainer.ontouchend = () => handleOnUp();
carouselContainer.onmousemove = (e) => handleOnMove(e);
carouselContainer.ontouchmove = (e) => handleOnMove(e.touches[0]);
carouselContainer.onwheel = (e) => handleOnWheel(e);
