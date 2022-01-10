var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);    
}

import Navigo form "navigo"; 
const router = new Navigo("/", {linksSelector: "a"});
const render = (conten) => {
  document.querySelector("#app").innerHTML = content;
}
router.on({
  "/": () => {
    render("Home page");
  },
  "/about": () => {
    render("Home page");
  },
  "/product": () => {
    render("Home page");
  }
  
})