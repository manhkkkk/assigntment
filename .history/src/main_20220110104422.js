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

import Navigo from "navigo"; 
import HomePage from "./pages/home.js";
const router = new Navigo("/", {linksSelector: "a"});
const printf = (content) => {
  document.querySelector("#app").innerHTML = content;
};
router.on({
  "/": () => {
    printf(HomePage.rander());
  },
  "/about": () => {
    printf(About.rander());
  },
  "/product": () => {
    printf(ProductPage.rander());
  },
});
router.resolve();
