$(document).ready(function () {
  max_height = window.innerHeight;
  carousel_height = max_height;

  if (max_height <= 400) {
    $("#carousel").css("height", "400px");
  } else {
    $("#carousel").css("height", carousel_height + "px");
  }
  // Espace du header
  // $("#carousel").css("margin-top", $(".header").height() + "px");
  // $(".cover").css("margin-top", $(".header").height() + "px");
  $(".panier_header").css("height", $(".header").height() + "px");
});

$(document).ready(function () {});
state_carousel = 0;

function slide_to_right() {
  if (state_carousel == 0) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg1").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss1").addClass("text_carouss_active");


    state_carousel = 1;
  } else if (state_carousel == 1) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg2").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss2").addClass("text_carouss_active");

    state_carousel = 2;
  } else if (state_carousel == 2) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg3").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss3").addClass("text_carouss_active");

    state_carousel = 3;
  } else if (state_carousel == 3) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg4").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss4").addClass("text_carouss_active");

    state_carousel = 0;
  } 
}




function slide_to_left() {
  if (state_carousel == 0 || state_carousel == 1) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg4").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss4").addClass("text_carouss_active");
    state_carousel = 4;

  } else if (state_carousel == 4) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg3").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss3").addClass("text_carouss_active");

    state_carousel = 3;
  } else if (state_carousel == 2) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg1").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss1").addClass("text_carouss_active");

    state_carousel = 1;
  } else if (state_carousel == 3) {
    $(".fond_val").removeClass("fond_val_active");
    $(".fond_valimg2").addClass("fond_val_active");

    $(".text_carouss_val").removeClass("text_carouss_active");
    $(".text_carouss2").addClass("text_carouss_active");

    state_carousel = 2;
  }
}


$(".carouss_left").click(function(){
  slide_to_left();
});

$(".carouss_right").click(function(){
  slide_to_right();
});



setInterval(slide_to_right, 6000);





$(".close").click(function () {
  $("#sup_contain_menu_mob").fadeOut();
});

// progress bar.......
// let progress_state;

// $(document).ready(function () {
//   progress_bar = $(".progress");
//   totalheight = document.body.scrollHeight - window.innerHeight;
//   window.onscroll = function () {
//     progress = (window.pageYOffset / totalheight) * 100;
//     progress = Math.round(Number(progress));

//     progress = progress + "%";

//     progress_bar.css("width", progress);

//     header_nav = $(".header");

//     if (progress_state < progress) {
//       header_nav.css("transform", "translateY(-100%)");
//       console.log("scroll to bottom");
//     } else if (progress_state > progress) {
//       header_nav.css("transform", "translateY(0%)");
//       console.log("scroll to top");
//     }
//     progress_state = progress;
//   };
// });



// probleme au niveau de la suppression d'un element...Calcul_amount()

function Calcul_amount() {
  total_amount = 0;

  item="";
  item=$(".item_box");

  $(".item_box").each(function () {

    if($(this).attr("state")=="on"){

      item_product = "";
      price_item = "";
      price_item = Number($(this).find(".price_item").text());
      item_product = Number($(this).find(".number").text());
      total_amount = total_amount + price_item * item_product;
      price_item = "";
      item_product = "";

    }



  });

  $(".total_amount_price").text(total_amount);
  


}

function increase_panier() {
  temp = "";
  temp = Number($(".cart").attr("item")) + 1;
  $(".cart").attr("item", temp);

  if (temp == 0) {
    $("#buy_now").fadeOut();
  } else {
    $("#buy_now").fadeIn();
  }

  
}

function decrease_panier() {
  temp = "";
  temp = Number($(".cart").attr("item")) - 1;
  $(".cart").attr("item", temp);

  if (temp == 0) {
    $("#buy_now").fadeOut();
  } else {
    $("#buy_now").fadeIn();
  }

  
}
