
//Hide Header when menu is clicked
function hide_header(obj){
    const header = document.querySelector(".header");
    const nav = document.querySelector(".nav");
    header.classList.add("header-hidden");
    nav.classList.add("nav-after-scroll");
  }
  //Home-page slideshow
  
  var front_img = ["front-img/1.png","front-img/2.png","front-img/3.png"];
  var i=0;
  
  function chg_img(obj){
    i=i+obj;
     if(i>=front_img.length){
        i=0;
     }
     else if(i<0)
     {
      i=front_img.length-1;       
     }
     document.getElementById("front-img").src=front_img[i];
  }
  setInterval(function () {
  chg_img(1);
  },5000);
  

  //Scrolling Animation for Title

const Titleobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('title-show');
        }
        else
        {
            entry.target.classList.remove('title-show');
        }
    });
    });
const Title_hiddenElements = document.querySelectorAll('.title-hidden');
Title_hiddenElements.forEach((el) => Titleobserver.observe(el));

//Scrolling animation for Contact us Section
const contactus_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('contact-us-div-show');
        }
        else
        {
            entry.target.classList.remove('contact-us-div-show');
        }
    });
    });
    
    const contactus_hiddenElements = document.querySelectorAll('.contact-us-div-hidden');
    contactus_hiddenElements.forEach((el) => contactus_observer.observe(el));

    //Scrolling animation for project
const product_observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('product-item1-div-show');
        }
        else
        {
            entry.target.classList.remove('product-item1-div-show');
        }
    });
    });
    
    const product_hiddenElements = document.querySelectorAll('.product-item1-div-hidden');
    product_hiddenElements.forEach((el) => product_observer.observe(el));
    