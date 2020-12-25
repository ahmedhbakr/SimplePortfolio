var overlayEvent = new CustomEvent("overlayLoaded");
$(function () {
  $(".preloader")
    .delay(350)
    .fadeOut("slow", function () {
      document.dispatchEvent(overlayEvent);
      $("body").removeClass("ovh");
    });
});



AOS.init({
  startEvent: "overlayLoaded", // name of the event dispatched on the document, that AOS should initialize on
});
