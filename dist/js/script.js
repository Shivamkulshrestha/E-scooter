
$(".multiple-items").slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 300,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [

    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// document.getElementById("header_resp_main").onclick = function() {
//   document.getElementById("lower_header").style.display = "block";
// }

function myfunction() {
  var x = document.getElementById("lower_header");
  if (x.style.display === "block") {
    x.style.display = "none";
    x.style.transition = "all 300ms ease-in-out"
    document.body.classList.remove('body_test');

  } else {
    x.style.display = "block";
    x.style.transition = "all 300ms ease-in-out"
    document.body.classList.add('body_test');


  }
}
