window.onscroll = () => {
  var nav = document.querySelector("header");

  if (window.pageYOffset > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
