
//тут створили слайдер
const splide = new Splide('#mySlider', {
    type: 'loop',
    perPage: 1,
    isNavigation: true,
    speed: 600,
    easing: 'ease-in',
    pagination: true,
    
});
    //тут шукаємо всі елементи
      const thumbnails = document.getElementsByClassName("thumbnail");
      let current;
      //ініціалізація
      for (var i = 0; i < thumbnails.length; i++) {
        initThumbnail(thumbnails[i], i);
      }
      //по індексу шукаємо
      function initThumbnail(thumbnail, index) {
        thumbnail.addEventListener("click", function () {
          splide.go(index);
        });
      }

      splide.on("mounted move", function () {
        var thumbnail = thumbnails[splide.index];

        if (thumbnail) {
          if (current) {
            current.classList.remove("is-active");
          }

          thumbnail.classList.add("is-active");
          current = thumbnail;
        }
      });

      splide.mount();
