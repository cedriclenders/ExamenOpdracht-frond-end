$(function () {
    $(".mobileIcon").click(function () {
      $(this).toggleClass("active");
      $(".navmobile").toggleClass("hidden");
    });
  
    $(".fa-times-circle").click(function () {
      $(this).toggleClass("active");
      $(".navmobile").toggleClass("hidden");
    });
  });