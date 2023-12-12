$(document).ready(function () {
  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('nav a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (refElement.position().top - 90 <= scrollPos && refElement.position().top + refElement.height() + 90 > scrollPos) {
        $('nav ul li a').removeClass('active');
        currLink.addClass('active');
      } else {
        currLink.removeClass('active');
      }
    });
    $('.menuDotsArea a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      if (refElement.position().top - 90 <= scrollPos && refElement.position().top + refElement.height() + 90 > scrollPos) {
        $('.menuDotsArea a').removeClass('active');
        currLink.addClass('active');
      } else {
        currLink.removeClass('active');
      }
    });
    $('h2').each(function () {
      var title = $(this);
      var windowH = window.innerHeight;

      if (title.position().top <= scrollPos + windowH - 300) {
        title.addClass('start');
        console.log();
        setTimeout(function () {
          title.addClass('over');
        }, 550);
      }
    });
  }

  $(document).on('scroll', onScroll);
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off('scroll');

    $('a').each(function () {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        'swing',
        function () {
          window.location.hash = target;
          $(document).on('scroll', onScroll);
        }
      );
  });
});

$('.dot').click(function () {
  var self = $(this);
  var index = $(this).index();
  var square = $('.square');
  var circle = $('.circle');
  var step = $('.step');
  var cirIndex = index + 1;
  if (circle.eq(index).hasClass('active')) {
    return false;
  } else {
    self.addClass('active').siblings().removeClass('active');
    step.animate({ opacity: 0 }, 200, function () {
      square.removeClass('active');
      square.eq(index).addClass('active');
      circle.removeClass('active');
      circle.eq(index).addClass('active');
      step.removeClass('step1');
      step.removeClass('step2');
      step.removeClass('step3');
      step.removeClass('step4');
      step.removeClass('step5');
      step.addClass('step' + cirIndex);
      step.animate({ opacity: 1 }, 100);
    });
  }
});

//totop

function scrollFunction() {
  var y = window.scrollY;
  var h = window.innerHeight * 0.5;
  if (y > h) {
    $('.menuDotsArea').addClass('show');
    $('.scroll').addClass('hide');
  } else {
    $('.menuDotsArea').removeClass('show');
    $('.scroll').removeClass('hide');
  }
}
window.addEventListener('scroll', function () {
  scrollFunction();
});

$('.menuBtn').click(function () {
  let menu = $(this);
  if (!menu.hasClass('active')) {
    menu.addClass('active');
    $('nav ul').addClass('active');
    $('.blackBG').addClass('active');
  } else {
    menu.removeClass('active');
    $('nav ul').removeClass('active');
    $('.blackBG').removeClass('active');
  }
});
$('nav ul li a').click(function () {
  $('.menuBtn').removeClass('active');
  $('nav ul').removeClass('active');
  // $('.blackBG').removeClass('active');
});

$(document).ready(function () {
  var w = window.innerWidth;
  var w50 = w / 2;
  var handR = w50 - 600;
  if (w > 1880) {
    $('.hand').css({ right: 'calc(50% + ' + handR + 'px)' });
  } else {
    $('.hand').css({ right: 'calc(50% + 340px)' });
  }
});
