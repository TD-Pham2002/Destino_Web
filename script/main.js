// ***custom scroll fixed header
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const header = document.querySelector(".header_container");
window.addEventListener(
  "scroll",
  debounceFn(function (event) {
    const scrollY = window.pageYOffset;
    if (scrollY >= 106) {
      header && header.classList.add("is-fixed");
    } else {
      header && header.classList.remove("is-fixed");
    }
  }, 20)
);

// ***custom progress bar
const progress = document.querySelector(".progress");
window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const width = (scrollTop / height) * 100;
  progress.style.width = `${width}%`;
});

// ***custom search
const btn = document.querySelector(".header_search-btn");
const search = document.querySelector(".header_search");
btn.addEventListener("click", function () {
  search.classList.toggle("active");
  console.log("object");
});

// ***custom header bar
const menuBar = document.querySelector(".header_bars");
const menuList = document.querySelector(".header_menu-list");
const menuClose = document.querySelector(".header_close");
menuBar.addEventListener("click", handleClickBar);
function handleClickBar() {
  menuBar.classList.toggle("open");
  menuList.classList.toggle("active");
}

menuClose.addEventListener("click", handleCloseList);
function handleCloseList() {
  menuList.classList.remove("active");
  menuBar.classList.remove("open");
}

// ***custom counter on
const valueDisplays = document.querySelectorAll(".milestone_counter");
const interval = 50;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-end-value"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
