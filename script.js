const images = [
  "images/images.jpg",
  "images/images.png",
  "images/images1.jpg",
  "images/images1.png",
  "images/images2.jpg",
  "images/images2.png",
  "images/images3.jpg",
  "images/images3.png",
  "images/images4.jpg",
  "images/images5.jpg",
  "images/images6.jpg",
  "images/images7.jpg",
  "images/images9.jpg",
  "images/images10.png",
  "images/images11.jpg",
  "images/images12.jpg",
  "images/images13.jpg",
  "images/images14.jpg",
  "images/images15.jpg",
  "images/images16.jpg",
  "images/images17.jpg",
];

function RandomImage() {
  var randomPick = Math.floor(Math.random() * images.length);
  var randomImage = images[randomPick];

  return randomImage;
}

// function Initial() {
//   var container = document.createElement("div");
//   container.className = "image-container";

//   var img = document.createElement("img");
//   img.src = RandomImage();

//   container.appendChild(img);
//   gallery.appendChild(container);
//   return container;
// }

// var Options = {
//   threshold: 0.3,
// };

// const observer = new IntersectionObserver(function () {

// if ()

//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight)
//     {
//       console.log("Test")
//       observer.unobserve(Empty)
//       }
//       console.log("hello hello")
//       LoadMore()

// }, Options);

// observer.observe(Empty);

// function LoadMore() {
//   var container = document.createElement("div");
//   container.className = "image-container";

//   var img = document.createElement("img");
//   img.src = RandomImage();

//   container.appendChild(img);
//   gallery.appendChild(container);

//   observer.observe(Empty);
//   return container;
// }

// document.querySelectorAll(".image-container").forEach((container) => {
//   observer.observe(container);
// });

// window.addEventListener("scroll", () => {
//   if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//     Initial();
//   }
// });

let isLoading = false;

function loadMore() {
  if (isLoading) return;
  isLoading = true;
  
  load.style.display = "block";
  setTimeout(function () {
    for (let i = 0; i < 5; i++) {
      var container = document.createElement("div");
      container.className = "image-container";

      var img = document.createElement("img");
      img.src = RandomImage();

      container.appendChild(img);
      gallery.appendChild(container);
    }
    isLoading = false;
    load.style.display = "none";
  }, 700);
}

//setInterval(function(){console.log("123")}, 1000)

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
  
      if (entry.isIntersecting) {
        loadMore();
      }
    });
  }
);

observer.observe(Empty);
