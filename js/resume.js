(function ($) {
  'use strict'; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          'easeInOutExpo'
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav',
  });

  $('#modal-close-btn').click(function () {
    $('#projectModalLabel').text('');
    $('.carousel-item').each(function (index, element) {
      $(element.children[0]).attr('src', '#!');
      if ($(element.children[0]).hasClass('my-carousel')) {
        $(element.children[0]).removeClass('my-carousel');
      }
    });
    $('.modal-body .content').text('');
    $('#github_uri').html('Link');
    $('#github_uri').attr('href', '#!');
  });

  $('#rv-labs').click(function () {
    $('#projectModalLabel').html(
      '<img class="rounded my-thumb" src="./img/project/1_F.png" alt="Card image cap"> RV LABS'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/rv-labs/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      'Worked as a freelancer for an established pharmaceutical firm.Designed & Developed a responsive business website using HTML5, CSS,JavaScript, Figma & Bootstrap.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/rv-labs');
  });
  $('#rovereatz').click(function () {
    $('#projectModalLabel').html(
      '<img class="rounded my-thumb" src="./img/project/2_F.png" alt="Card image cap"> Rovereatz'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/rovereatz/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      'A Travelogue. B2B & B2C type social platform connecting nomads, food freaks & the common. Techstack involved: Spring, Mongo DB,ElasticSearch, Bootstrap, React.'
    );
    $('#github_uri').html('<i class="fab fa-gitlab"> </i> Gitlab');
    $('#github_uri').attr('href', 'https://gitlab.com/aravinve/rovereatz');
  });
  $('#bingebuffer').click(function () {
    $('#projectModalLabel').html(
      ' <img class="rounded my-thumb" src="./img/project/3_F.png" alt="Card image cap"> Bingebuffer'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/binge-buffer/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      'An unbiased IMDB type webapp built with Django & Materialize. Moderator/Public type review platform for movies, anime, series & games.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/bingebuffer');
  });
  $('#uob').click(function () {
    $('#projectModalLabel').html(
      '<img class="rounded my-thumb" src="./img/project/4_F.png" alt="Card image cap"> UOB One Design'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/uob/${index + 1}.png`);
      $(element).addClass('my-carousel');
    });
    $('.modal-body .content').text(
      'A Redefined Design Approach for United Overseas Bank (UOB). Structured Digital Innovation of services such as Member Onboarding, CRM, Merchant Services in the spheres of service process and design innovation. Used Figma And Materialize Design Standards'
    );
    $('#github_uri').html('<i class="fab fa-figma"></i> Live Demo - UOB One');
    $('#github_uri').attr(
      'href',
      'https://www.figma.com/proto/Az8bzCYpxBy81pr2lFiekH/UOB-DI?node-id=2%3A34&scaling=scale-down'
    );
  });
  $('#hangar').click(function () {
    $('#projectModalLabel').html(
      ' <img class="rounded my-thumb" src="./img/project/5_F.png" alt="Card image cap"> Hangar'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/hangar/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      "A multipurpose desktop application built using Electron and Bulma along with the integration of awesome REST API's."
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/hangar');
  });
  $('#fcc').click(function () {
    $('#projectModalLabel').html(
      '<img class="rounded my-thumb" src="./img/project/6_F.png" alt="Card image cap"> FCC Projects'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/fcc-projects/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      ' A dedicated website for FreeCodeCamp projects. Techstack involves HTML5, CSS, Javascript and Materialize.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/fcc-projects');
  });
})(jQuery); // End of use strict
