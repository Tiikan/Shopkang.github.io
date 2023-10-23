///html block code link javaScript + html + css
const casebox = document.querySelector(".casebox");
const boxsize = document.querySelector(".boxsize");
const firstCarsWidth = boxsize.querySelector(".cars").offsetWidth;
const btnArrow = document.querySelectorAll(".casebox i");
const boxsizeChildrens = [...boxsize.children];

let isStarting = false,
  isAutoPlaying = true,
  startingX,
  playScrollLeft,
  timeId;

// Get the number of cards that can fit in the carousel at once
let carsPerView = Math.round(boxsize.offsetWidth / firstCarsWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
boxsizeChildrens
  .slice(-carsPerView)
  .reverse()
  .forEach((cars) => {
    boxsize.insertAdjacentHTML("afterbegin", cars.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
boxsizeChildrens.slice(0, carsPerView).forEach((cars) => {
  boxsize.insertAdjacentHTML("beforeend", cars.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
boxsize.classList.add("no-transition");
boxsize.scrollLeft = boxsize.offsetWidth;
boxsize.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
btnArrow.forEach((btn) => {
  btn.addEventListener("click", () => {
    boxsize.scrollLeft += btn.id == "lefts" ? -firstCarsWidth : firstCarsWidth;
  });
});

const startDrarg = (e) => {
  isStarting = true;
  boxsize.classList.add("dragsting");
  // Records the initial cursor and scroll position of the carousel
  startingX = e.pageX;
  playScrollLeft = boxsize.scrollLeft;
};

const dragsting = (e) => {
  if (!isStarting) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  boxsize.scrollLeft = playScrollLeft - (e.pageX - startingX);
};

const dragStoping = () => {
  isStarting = false;
  boxsize.classList.remove("dragsting");
};

const finScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (boxsize.scrollLeft === 0) {
    boxsize.classList.add("not-transition");
    boxsize.scrollLeft = boxsize.scrollWidth - 2 * boxsize.offsetWidth;
    boxsize.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(boxsize.scrollLeft) ===
    boxsize.scrollWidth - boxsize.offsetWidth
  ) {
    boxsize.classList.add("not-transition");
    boxsize.scrollLeft = boxsize.offsetWidth;
    boxsize.classList.remove("not-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeId);
  if (!casebox.matches(":hover")) autoPlaying();
};

const autoPlaying = () => {
  if (casebox.innerWidth < 800 || !isAutoPlaying) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeId = setTimeout(() => (boxsize.scrollLeft += firstCarsWidth), 2500);
};
autoPlaying();

boxsize.addEventListener("mousedown", startDrarg);
boxsize.addEventListener("mousemove", dragsting);
document.addEventListener("mouseup", dragStoping);
boxsize.addEventListener("scroll", finScroll);
casebox.addEventListener("mouseenter", () => clearTimeout(timeId));
casebox.addEventListener("mouseleave", autoPlaying);

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 900);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);

// javadesing code html block

// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x");
  } else {
    searchBox.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};
///siderscrull bar
const languages = [
  {
    category: ["mouse"],
    logo: "https://m.media-amazon.com/images/I/51El2hEhcCL.jpg",
    title: "Gaming keyboaed ",
    textplay: "$109.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://kh.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw28f14af9/JBL_Party_Box_300_HERO.png?sw=537&sfrm=png",
    title: "JBL PartyBox 300",
    textplay: "$500.00",
    button: "Oder Now",
  },
  {
    category: ["memory"],
    logo: "photo/SanDisk 64GB.jpg",
    title: "SanDisk 64GB",
    textplay: "$30.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://c.bdac.co/bdac/DELLEVENTSHOP/ProductImages/1442915_z.jpg?v=637335385316318937",
    title: "Dell Wooden",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["headphone"],
    logo: "photo/ASUS ROG DELTA heardphone.jpg",
    title: "ASUS ROG DELTA",
    textplay: "$400.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://m.media-amazon.com/images/I/313aiYZ+lsL.jpg",
    title: "ASUS ROG ",
    textplay: "$200.00",
    button: "Oder Now",
  },
  {
    category: ["earphone"],
    logo: "https://shunliphone.com/wp-content/uploads/2022/08/OPPO-Enco-Buds2.jpg",
    title: "Oppo Eno Buds2",
    textplay: "$80.99",
    button: "Oder Now",
  },
  {
    category: ["headphone"],
    logo: "photo/Dell 545-BBFD headphone.jpg",
    title: "Dell 545-BBFD",
    textplay: "$500.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://dlcdnwebimgs.asus.com/gain/a151cb22-1322-453b-a936-b0bb7616b7d4/",
    title: "ZenBeam Latte L1",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["mouse"],
    logo: "https://zebronics.com/cdn/shop/products/Zeb-Transformer1-pic12.jpg?v=1673345088&width=2048",
    title: "Zeb-Transformer ",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://i5.walmartimages.com/seo/Asus-ROG-Phone-5-Portable-Wireless-High-Performance-Stereo-Speaker-Extra-Bass-USB-Recording-Rechargeable-Battery-AUX-TF-Card-Input-FM-Radio-MP3-Mic-G_1116eec2-ff04-4d6e-9cdf-c11b812531d3.f305b295e4f5fef5fba2d6ba981efc8b.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
    title: "Asus ROG Phone 5",
    textplay: "$400.00",
    button: "Oder Now",
  },
  {
    category: ["mouse"],
    logo: "https://www.manba-snake.com/cdn/shop/products/390402e06590d27057ca322f898bb148_1500x.jpg?v=1655708064",
    title: "Ziyou Lang T60",
    textplay: "$90.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://snpi.dell.com/snp/images/products/large/en-us~AB972576/AB972576.jpg",
    title: "Dell USA",
    textplay: "$300.00",
    button: "Oder Now",
  },
  {
    category: ["earphone"],
    logo: "https://m.media-amazon.com/images/I/51-zQwUE9SL.jpg",
    title: "Oppo Eno Buds2",
    textplay: "$80.99",
    button: "Oder Now",
  },
  {
    category: ["memory"],
    logo: "photo/MSI SD CARD 512GB.jpg",
    title: "MSI SD CARD 512GB",
    textplay: "$35.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://www.showprice.it/upload/76/76dc611d6ebaafc66cc0879c71b5db5c/cdec3e395c1f6194e27cba51f36d2efb.jpg",
    title: "MSI SISTEMI AUDIO",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["headphone"],
    logo: "photo/MSI IMMERSE GH40 headphone.jpg",
    title: "MSI IMMERSE GH40",
    textplay: "$350.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://kh.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw4c457205/JBL_PARTYBOX_ENCORE_ESSENTIAL_HERO_1605x1605px.jpg?sw=270&sh=330&sm=fit&sfrm=png",
    title: "JBL Partybox Encore Essential",
    textplay: "$299.00",
    button: "Oder Now",
  },
  {
    category: ["mouse"],
    logo: "https://digitalwalker.ph/cdn/shop/products/ASUGAMTUFGAMINGK3BLUESWITCHES5_2_1000x1000.png?v=1625561722",
    title: "TUF Gaming",
    textplay: "$70.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://cdn.alza.cz/Foto/FotoAdd/XX/XXEO201ah-05.jpg",
    title: "Electronic License MSI",
    textplay: "$150.00",
    button: "Oder Now",
  },
  {
    category: ["earphone"],
    logo: "photo/Apple Mobile earphone.jpg",
    title: "Apple Mobile ",
    textplay: "$30.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://www.oppodigital.com/sonica/images/sonica_Technology_01.jpg",
    title: "Oppo Sonica WIFI",
    textplay: "$300.00",
    button: "Oder Now",
  },
  {
    category: ["mouse"],
    logo: "https://i5.walmartimages.com/asr/e32ed2f5-3d27-4c09-a10a-5d3e93813461.c89ea6669455cfa7064bec9c0a0f0f4f.jpeg",
    title: "MSI CLUTCH GM10",
    textplay: "$80.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://m.media-amazon.com/images/I/41l3j6eXlHL._AC_UF1000,1000_QL80_.jpg",
    title: "Acer Liquid s2",
    textplay: "$300.00",
    button: "Oder Now",
  },
  {
    category: ["mouse"],
    logo: "https://static-01.daraz.pk/p/4d10e22efca9414d893f9cd7986d5eca.jpg_750x750.jpg_.webp",
    title: "Gaming keyboaed",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://images.livemint.com/img/2021/10/13/1600x900/Realme_Bluetooth_Speaker_1634112912584_1634112920656.PNG",
    title: "Realme launches Smart ",
    textplay: "$300.00",
    button: "Oder Now",
  },
  {
    category: ["mouse"],
    logo: "https://hocotech.com/wp-content/uploads/2022/02/hoco-gm12-light-and-shadow-rgb-gaming-keyboard-mouse-set-english-black.jpg",
    title: "GM12 Light",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://www.giztop.com/media/catalog/product/cache/16c8d0750a29c828f25a0e7d7ec24d2a/o/p/oppo_bluetooth_speaker-8.jpg",
    title: "Oppo Bluetooth Speaker",
    textplay: "$80.00",
    button: "Oder Now",
  },
  {
    category: ["headphone"],
    logo: "photo/Headphone and Earbuds.jpg",
    title: "Headphone and Earbuds",
    textplay: "$549.00",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "https://www.dasher.com.my/cdn/shop/products/PocketBluetoothSpeakerWorkFile-01_1000x.png?v=1654845241",
    title: "Realme Pochek ",
    textplay: "$50.00",
    button: "Oder Now",
  },
  {
    category: ["earphone"],
    logo: "photo/ACER E300 earphone.jpg",
    title: "ACER E300",
    textplay: "$50.99",
    button: "Oder Now",
  },
  {
    category: ["bluetooth"],
    logo: "photo/bluethoob_512.jpg",
    title: "bluethoob_512",
    textplay: "$60.00",
    button: "Oder Now",
  },
  {
    category: ["memory"],
    logo: "photo/Dell Memory 16GB.jpg",
    title: "Dell Memory 16GB",
    textplay: "$30.00",
    button: "Oder Now",
  },
  {
    category: ["power"],
    logo: "photo/Remax_power banlk 10k_Wireless-400x400.jpg",
    title: "Remax_power banlk ",
    textplay: "$100.00",
    button: "Oder Now",
  },
  {
    category: ["adpter"],
    logo: "photo/ASUS Adpter.jpg",
    title: "ASUS Adpter",
    textplay: "$300.00",
    button: "Oder Now",
  },
  
];
const cardContainer = document.querySelector(".boxs-flixe");
const listBtn = document.querySelector(".list");
const button = document.querySelectorAll(".item");
let value = "all";
displayType(languages);
button.forEach((btn) => {
  btn.addEventListener("click", function (click) {
    const check = click.currentTarget;
    if (check.classList.contains("active")) {
      return null;
    } else {
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
      }
      check.classList.add("active");
    }
    const title = check.textContent;
    const splitTitle = title.split(" ");
    value = splitTitle[0].toLowerCase();
    const filterLanguages = languages.filter((each) => {
      return (
        each.category[0] == value ||
        each.category[1] == value ||
        each.category[2] == value
      );
    });
    if (value == "all") {
      displayType(languages);
    } else {
      displayType(filterLanguages);
    }
  });
});
function displayType(condition) {
  const display = condition
    .map(function (item) {
      return `<article class="boxs">
          <img class="logo" src="${item.logo}" />
          <h2 class="titlee">${item.title}</h2>
          <h3 class="textplay">${item.textplay}</h3>
          <h3 class="click"><a href="#">${item.button}</a></h3>
          </article>`;
    })
    .join("");
  cardContainer.innerHTML = display;
}
//srull bar 2
