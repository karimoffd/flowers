// Добавляем обработчики ко всем элементам с классом .korzinka-btn
document.querySelectorAll(".korzinka-btn").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector(".basket-wrapper").classList.add("open");
    document.querySelector(".basket").classList.add("open");
    document.querySelector(".bloor-background").classList.add("open");
  });
});

// Добавляем обработчики ко всем элементам с классом .close
document.querySelectorAll(".close").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector(".basket-wrapper").classList.remove("open");
    document.querySelector(".basket").classList.remove("open");
    document.querySelector(".bloor-background").classList.remove("open");
  });
});



$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = "views/" + $(this).data("include") + ".html";
    $(this).load(file);
  });
});

// Инициализация превью слайдера
const sliderThumbs = new Swiper(".slider__thumbs .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 2, // показывать по 3 превью
  spaceBetween: 24, // расстояние между слайдами
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  freeMode: true, // при перетаскивании превью ведет себя как при скролле
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: "vertical", // вертикальная прокрутка
    },
  },
});
// Инициализация слайдера изображений
const sliderImages = new Swiper(".slider__images .swiper-container", {
  // ищем слайдер превью по селектору
  // задаем параметры
  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 1, // показывать по 1 изображению
  spaceBetween: 32, // расстояние между слайдами
  mousewheel: true, // можно прокручивать изображения колёсиком мыши
  navigation: {
    // задаем кнопки навигации
    nextEl: ".slider__next", // кнопка Next
    prevEl: ".slider__prev", // кнопка Prev
  },
  grabCursor: true, // менять иконку курсора
  thumbs: {
    // указываем на превью слайдер
    swiper: sliderThumbs, // указываем имя превью слайдера
  },
  breakpoints: {
    // условия для разных размеров окна браузера
    0: {
      // при 0px и выше
      direction: "horizontal", // горизонтальная прокрутка
    },
    768: {
      // при 768px и выше
      direction: "vertical", // вертикальная прокрутка
    },
  },
});

var flowerSlider = new Swiper(".flowerSwiper", {
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar-secondary").style.top = "0";
  } else {
    document.getElementById("navbar-secondary").style.top = "-100px";
  }
}
