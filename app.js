const acc = document.querySelector(".accordion");
const panel = document.querySelectorAll(".panel");
const faqButton = document.querySelectorAll(".faq-button");
const back = document.querySelectorAll(".back");
const front = document.querySelectorAll(".front");


for (let i = 0; i < faqButton.length; i++) {
  faqButton[i].addEventListener("click", function () {
    for (let j = 0; j < panel.length; j++) {
      panel[j].classList.remove("active");
    }
    faqButton[i].classList.toggle("active");
    panel[i].classList.toggle("active");
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
});

const navs = document.querySelectorAll(".nav")
navs.forEach((nav)=>{
  nav.addEventListener('click', function(){
    hamMenu.classList.remove('active')
  offScreenMenu.classList.remove('active')
  })
})

