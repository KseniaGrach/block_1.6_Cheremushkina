document.addEventListener('DOMContentLoaded', function(){

  var init = false;

  function swiperCard() {
      if (window.innerWidth <= 768) {
          if (!init) {
              init = true;
              swiper = new Swiper('.swiper', {
                  direction: 'horizontal',
                  slidesPerView: "auto",
                  loop: true,
                  
                  pagination: {
                      el: '.swiper-pagination',
                  },

                  navigation: {
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                  },

                  scrollbar: {
                      el: '.swiper-scrollbar',
                  },
              });
          }
      } else if (init) {
          swiper.destroy();
          init = false;
      }
  }

  swiperCard();
  window.addEventListener("resize", swiperCard);

  var swiperContainer = document.getElementsByClassName('swiper--container')[0];
  const swiperContainerHeight = swiperContainer.offsetHeight;

  document.querySelector('.brand__btn--show--hide').addEventListener('click', function(e){
      e.target.textContent == "Показать все" ? e.target.textContent = "Скрыть" : e.target.textContent = "Показать все";
      e.currentTarget.classList.toggle('hide');
      swiperContainer.offsetHeight == swiperContainerHeight ? swiperContainer.style.height = "auto" : swiperContainer.style.height = `${swiperContainerHeight}px`;
  })
})

