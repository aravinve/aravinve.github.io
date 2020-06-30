(function ($) {
  'use strict'; // Start of use strict

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

  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#sideNav',
  });

  $('#academic-projects-link').click(function () {
    $('#academic-projects').removeClass("d-none");
    $('#academic-projects-link').addClass("active");
    $('#personal-projects').addClass("d-none");
    $('#personal-projects-link').removeClass("active");
  })

  $('#personal-projects-link').click(function () {
    $('#personal-projects').removeClass("d-none");
    $('#personal-projects-link').addClass("active");
    $('#academic-projects').addClass("d-none");
    $('#academic-projects-link').removeClass("active");
  })

  var form = document.getElementById("contact-form");
  var alert = document.getElementById('alert-div');
  function success(){
    form.reset();
    alert.classList.add("alert-success")
    alert.classList.remove("d-none")
    alert.innerText = 'Email Sent Successfully!'
    setTimeout(() => {
      alert.classList.remove("alert-success")
      alert.classList.add("d-none")
      alert.innerText = ''
    }, 3000)
  }

  function error(){
    alert.classList.add("alert-danger")
    alert.classList.remove("d-none")
    alert.innerText = 'Failed! Try Again Later'
    setTimeout(() => {
      alert.classList.remove("alert-danger")
      alert.classList.add("d-none")
      alert.innerText = ''
    }, 3000)
  }


  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });

  function ajax(method, url, data, success, error){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

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

  $('#sparkfab').click(function () {
    $('#projectModalLabel').html(
      'Sparkfab'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/sparkfab/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      'Developed a multipurpose platform for fashion image classification and search. Techstack involved Pyspark, SparkDL, Django and Elasticsearch'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/CS4225-CS5425-BigDataProject');
  });

  $('#blockbustr').click(function () {
    $('#projectModalLabel').html(
      'Blockbustr'
    );
    $('img[class="d-block w-100"]').each(function (index, element) {
      $(element).attr('src', `./img/gif/blockbustr/${index + 1}.png`);
    });
    $('.modal-body .content').text(
      'MERN Stack web app demonstrating Cross-Site Scripting and HTTP Parameter Pollution problems and the relevant defenses in form of database scanning, data filtration, and deployment of attack detection middleware.'
    );
    $('#github_uri').html('<i class="fab fa-github"> </i> Github');
    $('#github_uri').attr('href', 'https://github.com/aravinve/blockbustr');
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
