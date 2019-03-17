const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// opacity på första IMG
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  // ReSätta opacity 
  img.forEach(img => (img.style.opacity = 1));

  // byta imgs src
  current.src = e.target.src;

  // lägga till fade
  current.classList.add('fade-in');

  // ta bort fade in efter 0.5 sec så gör vi effecten
  setTimeout(() => current.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}
// Med hjälp av jscolor Color picker, tar fram färgen som behövs och sedan ändrar med click bakgrundsfärgen
//som kravspecen kräver
function changeColor(){
  var color = document.getElementById("jscolor1");
  var number = color.value;
  
  console.log(number);
  document.body.style.backgroundColor = "#" + number;
 
}

