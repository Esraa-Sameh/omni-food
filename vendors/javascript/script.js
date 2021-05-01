$(document).ready(function () {
  var waypoint = new Waypoint({
    element: $(".section-features"),
    handler: function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "60px",
  });
  $("#plansBtn").click(function () {
    $("html,body").animate(
      { scrollTop: $(".section-plans").offset().top },
      1000
    );
  });
  $("#showMoreBtn").click(function () {
    $("html,body").animate(
      { scrollTop: $(".section-features").offset().top },
      1000
    );
  });
  $(function () {
    $("a[href^=\\#]").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  //Animations
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    {
      offset: "50%",
    }
  );
  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    {
      offset: "50%",
    }
  );

  //burger menu
  $(".mobile-nav-icon").on("click", function () {
    $(".main-nav").toggleClass("shown");
    //<ion-icon name="close-outline"></ion-icon>
    if ($('#burger')[0]["name"] === 'menu-outline'){
      $('#burger')[0]["name"] = 'close-outline';
    }
    else{
      $('#burger')[0]["name"] = 'menu-outline';
    }
  });
  $(window).resize(function () {
    var windowsize = $(window).width();
    if (windowsize > 768) {
      $(".main-nav").removeClass("shown");
      $('#burger')[0]["name"] = 'menu-outline';
    }
  });
});
