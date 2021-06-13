$(function () {
    $(".mobile_icon").click(function () {
      $(this).toggleClass("active");
      $(".nav_mobile").toggleClass("hidden");
    });
  
    $(".fa-times-circle").click(function () {
      $(this).toggleClass("active");
      $(".nav_mobile").toggleClass("hidden");
    });
  });