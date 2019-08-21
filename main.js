// initialize all variable
var current = document.getElementById("current");

// get imgs from gallery
var imgs = document.querySelectorAll(".imgs img");

// select firstchild for default opacity
imgs[0].style.opacity = 0.6;
// initialize opacity
var opacity = 0.6;

// change src addribute when click
imgs.forEach(img => img.addEventListener("click", changeImg));

// function for change img
function changeImg(e) {
  // reset opacity
  imgs.forEach(img => (img.style.opacity = 1));

  // changing src value
  current.src = e.target.src;

  //adding opacity
  e.target.style.opacity = opacity;

  // adding fadin effect
  current.classList.add("fad-in");

  // reset fadIn effect
  setTimeout(() => current.classList.remove("fad-in"), 500);
}
