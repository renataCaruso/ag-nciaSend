$('.carouselExampleIndicators').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
  });

  var fecharModal = document.getElementById("fecharModal");
var myModal = document.getElementById("myModal");

fecharModal.addEventListener("click", function() {
  myModal.style.display = "none";
});