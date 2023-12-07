// -----------------------------------------------------------------------
// -----  nojs 先移除  ----------------------------------------------------
// -----------------------------------------------------------------------

const windowWidthSmall = 768;
const _webHtml = document.documentElement;
_webHtml.classList.remove('no-js');

// 亂數數字
function randomFloor(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// 亂數英文字
function randomLetter(max) {
  let text = '';
  let letter = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < max; i++) text += letter.charAt(Math.floor(Math.random() * letter.length));
  return text;
}
// -----  置頂go to top   -------------------------------------------------
// -----------------------------------------------------------------------

function scrollToTop(obj) {
  const el = obj.name || null; // --- 控制的對象

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  if (el !== null) {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      scrollTop();
    });

    // --- 鍵盤點擊置頂按鈕
    el.addEventListener('keydown', (e) => {
      e.preventDefault();
      scrollTop();
      // --- window.scrollY 等於零的時候 執行 focus
      window.addEventListener('scroll', focusTopBtn);

      function focusTopBtn() {
        if (window.scrollY === 0) {
          setTimeout(() => {
            document.querySelector('a.goCenter').focus();
            window.removeEventListener('scroll', focusTopBtn);
          }, 500);
        }
      }
    });

    // --- 按鈕出現的函式
    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      if (top > 200) {
        el.style.display = 'block';
        el.style['opacity'] = '1';
        el.style['transform'] = 'scale(1)';
        el.style['transition'] = 'all 0.5s';
      } else {
        el.style['opacity'] = '0';
        el.style['transform'] = 'scale(0)';
        el.style['transition'] = 'all 0.5s';
        BtnStyleNone();
      }
      // --- 如果 opacity為 0 則 display none
      function BtnStyleNone() {
        setTimeout(() => {
          const btn = document.querySelector('.scrollToTop');
          const btnOpacity = parseInt(btn.style.opacity);
          if (btnOpacity === 0) {
            btn.style.display = 'none';
          }
        }, 200);
      }
    });
  }
}

scrollToTop({
  name: document.querySelector('.scrollToTop'), // --- 監聽的對象
});

// -----------------------------------------------------------------------
// -----  多組Tab   ------------------------------------------------------
// -----------------------------------------------------------------------

function tabFunction(elem) {
  'use strict';
  let openIndex = 1 - 1;
  const tab = document.querySelector(elem) || null;
  let desktopTabItems;

  function init() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');

    tabItem.forEach((item, index) => {
      const random = `tab_${randomLetter(4)}${randomFloor(0, 9999)}`;
      const text = item.innerHTML;
      item.setAttribute('aria-selected', 'false');
      item.setAttribute('role', 'tab');
      item.setAttribute('aria-controls', random);
      contentItem[index].setAttribute('aria-labelledby', random);
      contentItem[index].setAttribute('aria-label', text);
    });
    desktopTabItems = tab.querySelector('.tabItems').cloneNode(true);
  }

  function a11yControlMobile() {
    const tabItem = tab.querySelectorAll('.tabContent .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent .content');
    const firstFocus = [...tab.querySelectorAll('a,input,select,textarea')].shift();
    tabItem.forEach((item, index) => {
      let content = contentItem[index].querySelectorAll('a,input,select,textarea');
      let prevItem = contentItem[index - 1] !== undefined ? contentItem[index - 1].querySelectorAll('a,input,select,textarea') : '';
      let prevItemLastA;
      prevItem !== undefined ? (prevItemLastA = prevItem[prevItem.length - 1]) : '';

      function handleKeydown(e) {
        if (e.which === 9 && !e.shiftKey && !this.classList.contains('active')) {
          toggleAccordion(this, this.nextElementSibling);
        } else if (e.which === 9 && e.shiftKey) {
          toggleAccordion(this, this.nextElementSibling);
        }
      }

      item.removeEventListener('keydown', handleKeydown);
      item.addEventListener('keydown', handleKeydown);

      if (content.length !== 0) {
        function contentFirstCheck(e) {
          if (e.which === 9 && e.shiftKey && index !== 0) {
            e.preventDefault();
            tabItem[index].focus();
          } else if (e.which === 9 && e.shiftKey && e.target == firstFocus) {
            e.preventDefault();
            tabItem[0].focus();
          }
        }
        content[0].removeEventListener('keydown', contentFirstCheck);
        content[0].addEventListener('keydown', contentFirstCheck);
      }
    });
  }

  function clickFunctionMobile() {
    const tabItem = tab.querySelectorAll('.tabContent .tabBtn');

    tabItem.forEach((item, index) => {
      function clickCheck() {
        toggleAccordion(this, this.nextElementSibling);
      }

      item.removeEventListener('click', clickCheck);
      item.addEventListener('click', clickCheck);
    });
  }

  function toggleAccordion(item, content) {
    let display = window.getComputedStyle(content).display;
    content.style.display = display;

    if (display === 'none') {
      item.classList.add('active');

      display = 'block';
      content.style.overflow = 'hidden';
      content.style.display = display;
      // content.classList.add('active');
      let height = content.offsetHeight;
      content.style.height = 0;
      content.offsetHeight;
      content.style.transitionProperty = 'height';
      content.style.transitionDuration = `300ms`;
      content.style.height = height + 'px';

      setTimeout(() => {
        content.style.removeProperty('overflow');
        content.style.removeProperty('height');
        content.style.removeProperty('transition-duration');
        content.style.removeProperty('transition-property');
      }, 300);
    } else {
      item.classList.remove('active');
      content.style.overflow = 'hidden';
      content.style.height = `${content.offsetHeight}px`;
      content.style.transitionProperty = 'height';
      content.style.transitionDuration = `300ms`;
      content.offsetHeight;
      content.style.height = 0;
      setTimeout(() => {
        content.style.display = 'none';
        content.style.removeProperty('overflow');
        content.style.removeProperty('height');
        content.style.removeProperty('display');
        content.style.removeProperty('transition-duration');
        content.style.removeProperty('transition-property');
      }, 300);
    }

    const siblings = Array.prototype.filter.call(item.parentElement.parentElement.children, (child) => {
      return child !== item.parentElement;
    });
  }

  function a11yControl() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');
    const lastFocus = [...tab.querySelectorAll('a,input,select,textarea')].pop();
    const firstFocus = [...tab.querySelectorAll('a,input,select,textarea')].shift();
    const firstItem = [...tab.querySelectorAll('.tabBtn')].shift();
    tabItem.forEach((item, index) => {
      let content = contentItem[index].querySelectorAll('a,input,select,textarea');
      let prevItem = contentItem[index - 1] !== undefined ? contentItem[index - 1].querySelectorAll('a,input,select,textarea') : '';
      let prevItemLastA;
      prevItem !== undefined ? (prevItemLastA = prevItem[prevItem.length - 1]) : '';

      function handleKeydown(e) {
        if (e.which === 9 && !e.shiftKey) {
          e.preventDefault();
          openTarget(tabItem, contentItem, index);
          content[0].focus();
        } else if (e.which === 9 && e.shiftKey && e.target !== firstItem) {
          e.preventDefault();
          openTarget(tabItem, contentItem, index - 1);
          if (prevItemLastA !== undefined) {
            prevItemLastA.focus();
          } else {
            tabItem[index - 1].focus();
          }
        }
      }
      item.removeEventListener('keydown', handleKeydown);
      item.addEventListener('keydown', handleKeydown);

      if (content.length !== 0) {
        function contentFirstCheck(e) {
          if (e.which === 9 && e.shiftKey && index !== 0) {
            e.preventDefault();
            tabItem[index].focus();
          } else if (e.which === 9 && e.shiftKey && e.target == firstFocus) {
            e.preventDefault();
            tabItem[0].focus();
          }
        }
        content[0].removeEventListener('keydown', contentFirstCheck);
        content[0].addEventListener('keydown', contentFirstCheck);
        function contentLastCheck(e) {
          if (e.which === 9 && !e.shiftKey && e.target !== lastFocus) {
            tabItem[index].focus();
          }
        }
        content[content.length - 1].removeEventListener('keydown', contentLastCheck);
        content[content.length - 1].addEventListener('keydown', contentLastCheck);
      }
    });
  }

  function clickFunction() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');
    tabItem.forEach((item, index) => {
      function clickCheck(e) {
        openTarget(tabItem, contentItem, index);
      }
      item.removeEventListener('click', clickCheck);
      item.addEventListener('click', clickCheck);
      // }
    });
  }

  function openTarget(tabItem, contentItem, index) {
    let siblingContentItem = [...contentItem].filter((item, index) => item !== this);
    tabItem.forEach((item, index) => item.classList.remove('active'));
    siblingContentItem.forEach((item, index) => item.classList.remove('active'));
    contentItem[index].classList.add('active');
    tabItem[index].classList.add('active');
  }

  function desktopType() {
    tab.classList.remove('onMobile');
    tab.querySelector('.tabItems') ? '' : tab.prepend(desktopTabItems);
    const contentItem = tab.querySelectorAll('.tabContent');
    contentItem.forEach((item, index) => {
      if (item.querySelector('.tabBtn') !== null) {
        item.querySelector('.tabBtn').remove();
      }
    });
  }

  function mobileType() {
    tab.classList.add('onMobile');
    tab.querySelector('.tabItems') ? (desktopTabItems = tab.querySelector('.tabItems').cloneNode(true)) : '';
    tab.classList.add('onMobile');
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');

    tabItem.forEach((item, i) => {
      let btnContent = item.innerHTML;
      let newBtn = item.cloneNode();
      newBtn.innerHTML = btnContent;
      contentItem[i].prepend(newBtn);
      contentItem[i].querySelector('.content').setAttribute('role', 'tabpanel');
      contentItem[i].querySelector('.content').setAttribute('aria-labelledby', item.attributes['aria-controls'].value);
      contentItem[i].querySelector('.content').setAttribute('aria-label', item.innerHTML);

      contentItem[i].removeAttribute('role');
      contentItem[i].removeAttribute('aria-label');
      contentItem[i].removeAttribute('aria-labelledby');
    });

    tab.querySelector('.tabItems') ? tab.querySelector('.tabItems').remove() : '';
  }
  function checkType() {
    const tabItem = tab.querySelectorAll('.tabItems .tabBtn');
    const contentItem = tab.querySelectorAll('.tabContent');
    tabItem.forEach((item, index) => {
      item.classList.remove('active');
      contentItem[index].classList.remove('active');
      contentItem[index].querySelector('.content').style.display = 'none';
      item.setAttribute('aria-selected', false);
    });
    tabItem[openIndex] ? tabItem[openIndex].setAttribute('aria-selected', 'true') : '';
    tabItem[openIndex] ? tabItem[openIndex].classList.add('active') : '';

    let tabWidth = tab.offsetWidth;
    window.setTimeout(function () {
      if (tabWidth > 700) {
        contentItem[openIndex].classList.add('active');
        tabItem.forEach((item, index) => {
          contentItem[index].querySelector('.content').removeAttribute('style');
        });
        desktopType();
        a11yControl();
        clickFunction();
      } else {
        contentItem[openIndex].querySelector('.content').style.display = 'block';
        mobileType();
        clickFunctionMobile();
        a11yControlMobile();
      }
    }, 100);
  }

  if (tab !== null) {
    window.addEventListener('load', init);
    window.addEventListener('load', checkType);
    // window.addEventListener('resize', checkType);
  }
}

tabFunction('.tabSet'); // tab功能
// // -----  基本功能開關   ---------------------------------------------------
// window.addEventListener('load', () => {
//   //topNav(); // 手機版顯示nav選單
//   //navSticky(); // 捲動時固定主選單
//   //fatFooter(); // fatFooter是否要展開
//   tabFunction('.tabSet'); // tab功能
//   scrollTables('.tableWrapper'); // table捲動功能

//   mobileSearch();

//   tableAddDataAttributes({
//     elemClass: '.tableList', // 目標table
//     dataName: 'title', // tableList樣式 加上 data-title
//   });

//   // 全站字體
//   fontSize();

//   // 手風琴功能
//   accordionFunction({
//     accordion: '.accordion',
//     openFirst: false, // 預設先展開所有內容，使用無障礙遊走不再有手風琴效果，永遠展開內容(滑鼠點擊正常開合)
//     autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
//     duration: 200,
//     info: {
//       open: '展開', // 收合時顯示
//       close: '收合', // 展開時顯示
//     },
//   });
// });
// // -----  基本功能開關   ---------------------------------------------------

// // 自行加入的JS請寫在這裡
// (function () {
//   //cp輪播
//   const cpSwiper = new Swiper('.cpSlider .swiper', {
//     slidesPerView: 4,
//     spaceBetween: 20,
//     loop: false,
//     // 切換點
//     pagination: {
//       el: '.cpSlider .swiperDots',
//       bulletElement: 'button',
//       clickable: true,
//     },
//     // 切換箭頭
//     navigation: {
//       nextEl: '.cpSlider .nextSlider', //自行設定樣式
//       prevEl: '.cpSlider .prevSlider', //自行設定樣式
//       disabledClass: 'swiperArrow-disabled', //不可點選樣式
//     },
//     breakpoints: {
//       100: {
//         slidesPerView: 2,
//       },
//       767: {
//         slidesPerView: 4,
//       },
//     },
//   });

//   //大圖輪播
//   let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
//   let mpSliderPagination = [];
//   mpSliderItem.forEach((item, index) => {
//     mpSliderPagination.push(item.dataset.title);
//   });
//   const mpSlider = new Swiper('.mpSlider .swiper', {
//     slidesPerView: 1,
//     loop: false,
//     // 切換點
//     pagination: {
//       el: '.mpSlider .swiperDots',
//       bulletElement: 'button',
//       clickable: true,
//       renderBullet: function (index, className) {
//         return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
//       },
//     },
//     // 切換箭頭
//     navigation: {
//       nextEl: '.mpSlider .nextSlider', //自行設定樣式
//       prevEl: '.mpSlider .prevSlider', //自行設定樣式
//       disabledClass: 'swiperArrow-disabled', //不可點選樣式
//     },
//   });

//   //廣告輪播
//   const adSwiper = new Swiper('.adSlider .swiper', {
//     slidesPerView: 5,
//     spaceBetween: 30,
//     loop: false,
//     // 切換點
//     pagination: {
//       el: '.adSlider .swiperDots',
//       bulletElement: 'button',
//       clickable: true,
//     },
//     // 切換箭頭
//     navigation: {
//       nextEl: '.adSlider .nextSlider', //自行設定樣式
//       prevEl: '.adSlider .prevSlider', //自行設定樣式
//       disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
//     },
//     breakpoints: {
//       100: {
//         slidesPerView: 2,
//       },
//       767: {
//         slidesPerView: 3,
//       },
//       1000: {
//         slidesPerView: 4,
//       },
//     },
//   });

//   //跑馬燈
//   const marqueeSwiper = new Swiper('.marquee .swiper', {
//     direction: 'vertical',
//     // 切換點
//     // 切換箭頭
//     navigation: {
//       nextEl: '.marquee .nextSlider', //自行設定樣式
//       prevEl: '.marquee .prevSlider', //自行設定樣式
//       disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
//     },
//   });

//   //cp_photo
//   const navSlider = new Swiper('.navSlider .swiper', {
//     lazy: true, // lazy load
//     preloadImages: false, // 多筆設定lazy時須設定
//     centeredSlides: false, // 多筆設定lazy時須設定
//     slidesPerView: 4,
//     // watchSlidesProgress: true,
//     navigation: {
//       nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
//       prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
//       disabledClass: 'swiperArrow-disabled', //不可點選樣式
//     },
//     breakpoints: {
//       100: {
//         slidesPerView: 2,
//       },
//       767: {
//         slidesPerView: 3,
//       },
//       1000: {
//         slidesPerView: 4,
//       },
//     },
//   });

//   const sliderFor = new Swiper('.sliderFor .swiper', {
//     slidesPerView: 1, //顯示張數
//     effect: 'fade', //淡入
//     fadeEffect: {
//       crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
//     },
//     pagination: {
//       el: '.sliderFor .pagination',
//       type: 'fraction', //顯示分頁
//     },
//     lazy: true,
//     thumbs: {
//       swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
//     },
//   });
// })();
