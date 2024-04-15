const acc = document.querySelector(".accordion");
const panel = document.querySelectorAll(".panel");
const faqButton = document.querySelectorAll(".faq-button");
const back = document.querySelectorAll(".back");
const front = document.querySelectorAll(".front");
const body = document.querySelector(".container");
const loader = document.querySelector(".preloader");


for (let i = 0; i < faqButton.length; i++) {
  faqButton[i].addEventListener("click", function () {
    // Check if the clicked panel is already active
    const isActive = panel[i].classList.contains("active");
    
    // Remove active class from all panels and buttons
    for (let j = 0; j < panel.length; j++) {
      panel[j].classList.remove("active");
      faqButton[j].classList.remove("active");
    }
    
    // If the clicked panel was not active, toggle its active class
    if (!isActive) {
      faqButton[i].classList.add("active");
      panel[i].classList.add("active");
    }
  });
}

for(i = 0; i < back.length; I++){
back.addEventListener("click", function() {
    back.classList.remove("hidden")
});
}
for(i = 0; i < front.length; I++){
front.addEventListener("click", function() {
    front.classList.remove("hidden")
});
}

const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const container = document.querySelector('.container')

hamMenu.addEventListener('click', () =>{
  hamMenu.classList.toggle('active')
  offScreenMenu.classList.toggle('active')
  container.classList.toggle('active')
});

const navs = document.querySelectorAll(".nav")
navs.forEach((nav)=>{
  nav.addEventListener('click', function(){
    hamMenu.classList.remove('active')
  offScreenMenu.classList.remove('active')
  })
})

window.onload = function(){
  loader.style.display = 'none'
}
