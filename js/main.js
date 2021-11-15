// ---
function stopW3() {
  // Temp stop w3
  Array.from(document.getElementsByClassName("mySlides")).forEach((ele) => {
    ele.classList.toggle("mySlides");
  });
}

// ---
let modal = document.querySelector(".modal");

document
  .querySelectorAll(".card-buy-btn")
  .forEach((btn) =>
    btn.addEventListener("click", (event) => modal.classList.add("open"))
  );

// Style 2 no arrow
document.querySelectorAll(".js-close").forEach((btn) =>
  btn.addEventListener("click", function () {
    modal.classList.remove("open");
  })
);

// Viết như vậy khi click vào thẻ con sẽ truy ra
// Cho tới khi gặp thẻ cha modal lớn thì dừhg
// Sk nổi bọt
// -> sẽ chặng việc nổi bọt tới modal-container
// -> ko truy tiếp lên cha modal nhận click
modal.addEventListener("click", function () {
  modal.classList.remove("open");
});

// Chỉ cho phép nỗi bọt tới container gần nhất và chặn tại đó
// TODO tên 1 số class ko chuẩn nhưng tạm pass
document
  .querySelector(".modal__container")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });
// ---

// Automatic Slideshow - change image every 4 seconds
var myIndex = 1;
var bgImageUrl = {
  1: "./img/chicago.jpg",
  2: "./img/la.jpg",
  3: "./img/ny.jpg",
};
var bgImageCount = Object.keys(bgImageUrl).length;
carousel();

function carousel() {
  var x = document.getElementById("slider");
  x.style.background = `url("${bgImageUrl[myIndex]}") top center / cover no-repeat`;
  myIndex++;
  if (myIndex > bgImageCount) {
    myIndex = 1;
  }
  setTimeout(carousel, 4000);
}
// ---
var mobileMenuBtn = document.getElementById("header__mobile-menu");
var menuClassList = document.getElementById("nav").classList
var menuItemList = document.querySelectorAll('#nav li a[href*="#"]');

// switchBtn.addEventListener("click", function () {
//   document.querySelector("body").classList.toggle("darkMode");
// });

function toggleMobileMenu() {
  menuClassList.toggle("open");
}

mobileMenuBtn.onclick = toggleMobileMenu;
// mobileMenuBtn.onclick = toggleMobileMenu; // -> sai
// https://www.w3schools.com/js/js_htmldom_events.asp
// onclick viết inline -> gọi hàm
// onlick trong script -> callback

menuItemList.forEach((menuItem) => {
  menuItem.addEventListener("click", function (event) {
    var isParentMenu =
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav");
    if (isParentMenu) {
      // Default của thẻ a là jump tới #
      // Dòng này như trong clip
      event.preventDefault();
    } else if (menuClassList.contains("open")) {
      // BUG gọi hàm, retrun hàm , hay chỉ là toggleMobileMenu (callback) hay return callback
      toggleMobileMenu();
    }
  });
});
