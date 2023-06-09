import '../scss/style.scss'

document.addEventListener('DOMContentLoaded', function(){
  /* Инициализация swiper */
  var init = false;

  function swiperCard() {
      if (window.innerWidth <= 768) {
          if (!init) {
              init = true;
              window.swiper = new Swiper('.swiper', {
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
        swiper.forEach(e => e.destroy());
          init = false;
      }
  }

  swiperCard();
  window.addEventListener("resize", swiperCard);

  /* Показать все/скрыть карточки swiper */
  var showHideBtns = document.querySelectorAll('.btn--show--hide');

  for (var i = 0; i < showHideBtns.length; ++i) {
      showHideBtns[i].addEventListener('click', function(e) {
          e.target.textContent == "Показать все" ? e.target.textContent = "Скрыть" : e.target.textContent = "Показать все";
          e.currentTarget.classList.toggle('hide');

          var swiper = e.target.closest('section').querySelector('.swiper');
          var swiperSlide = swiper.querySelector('.swiper-slide');
          var swiperHeight = swiperSlide.offsetHeight * 2 + 65;

          swiper.style.height != "auto" ? swiper.style.height = "auto" : swiper.style.height = `${swiperHeight}px`;
      })
  }

  /* Открытие/Закрытие левого меню (Sidebar) */
  const sidebar = document.querySelector(".sidebar");
  var sidebarBtnsToggle = document.querySelectorAll(".sidebar__btn--toggle");

  for (var i = 0; i < sidebarBtnsToggle.length; ++i) {
      sidebarBtnsToggle[i].addEventListener("click", function() {
          if (sidebar.classList.contains('is-active')) {
              sidebar.classList.remove('is-active');
          } else {
              sidebar.classList.add('is-active')
          }
      });
  }

  /* Открытие/Закрытие модалки с почтой (mailModal) */
  const mailModal = document.querySelector(".modal--mail");
  var mailModalBtnsToggle = document.querySelectorAll(".btn--modal--mail--toggle");

  for (var i = 0; i < mailModalBtnsToggle.length; ++i) {
      mailModalBtnsToggle[i].addEventListener("click", function() {
          if (mailModal.classList.contains('is-open')) {
              mailModal.classList.remove('is-open');
          } else {
              mailModal.classList.add('is-open')
          }
      });
  }

  /* Открытие/Закрытие модалки с телефоном (telModal) */
  const telModal = document.querySelector(".modal--tel");
  var telModalBtnsToggle = document.querySelectorAll(".btn--modal--tel--toggle");

  for (var i = 0; i < telModalBtnsToggle.length; ++i) {
      telModalBtnsToggle[i].addEventListener("click", function() {
          if (telModal.classList.contains('is-open')) {
              telModal.classList.remove('is-open');
          } else {
              telModal.classList.add('is-open')
          }
      });
  }
})

