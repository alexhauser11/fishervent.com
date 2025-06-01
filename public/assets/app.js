// HOME SLIDE SHOW BEGIN
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 5){
    counter = 1;
  }
}, 5000);
// HOME SLIDE SHOW END

// NAVBURGER BEGIN
const navburger = document.getElementById('navBurger');
const menu = document.getElementById('menu');

navburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
// NAVBURGER End
