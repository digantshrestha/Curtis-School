// navbar events for toggling ham and close-btn and menu for mobileView starts here
var toggle = document.querySelector(".toggle-menu");
toggle.addEventListener("click", toggleMenu);

var ham = document.querySelector(".ham");
var close = document.querySelector(".close-btn");
var mobileView = document.querySelector(".mobile-view");

function toggleMenu(e){
  if(ham.style.display!="none"){
      ham.style.display="none";
      close.style.display="block";
      mobileView.style.display="block";
  }else{
    ham.style.display="block";
    close.style.display="none";
    mobileView.style.display="none";
  }
}
// navbar events for toggling ham and close-btn and menu for mobileView ends here



// event for showing more menu for mobile view starts here
mobileView.addEventListener("click", toggleMoreMenu);

function toggleMoreMenu(e){
  if(e.target.className=="list-group-item toggle"){
    if(e.target.nextElementSibling.style.display=="none"){
      e.target.nextElementSibling.style.display="block";
    }else{
      e.target.nextElementSibling.style.display="none";
    }
  }else if(e.target.className=="list-group-item inner-toggle"){
    if(e.target.children[1].style.display=="none"){
      e.target.children[1].style.display="block";
    }else{
      e.target.children[1].style.display="none";
    }
  }
}
// event for showing more menu for mobile view ends here


// event for toggleing paragraph starts here
// var para = document.querySelector(".section1");
// para.addEventListener("mouseover", togglePara);
// // para.addEventListener("mouseleave", hidePara);
//
// function togglePara(e){
//   switch(e.target.className){
//     case "col-md-4 community hide-para":
//     case "col-md-4 family hide-para":
//     case "col-md-4 excellence hide-para":
//     case "col-md-6 love hide-para":
//       if(e.target.children[0].style.visibility!="visible"){
//         e.target.children[0].style.visibility="visible";
//       }else{
//         e.target.children[0].style.visibility="hidden";
//       }
//
//     default :
//       console.log("entered");
//   }
// }

// function hidePara(e){
//   switch(e.target.className){
//     case "col-md-4 community hide-para":
//     case "col-md-4 family hide-para":
//     case "col-md-4 excellence hide-para":
//     case "col-md-6 love hide-para":
//       e.target.children[0].style.visibility="hidden";
//
//     default :
//       console.log("left");
//   }
// }
