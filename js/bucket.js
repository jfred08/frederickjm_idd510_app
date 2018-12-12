$(document).ready(function(){
  // $(".favorite-filter").click(function() {
  //     $(".post").has(".far.fa-star").toggle();
  // });

  $(".far.fa-star").click(function() {
      var clicked = $(this);
      clicked.toggleClass("far");
      clicked.toggleClass("fas");
  });

  $(".label-checkbox").click(function() {
      var clicked = $(this);
      clicked.toggleClass("fa-square");
      clicked.toggleClass("fa-check-square");
  });

  $(".fa-thumbs-up").click(function() {
      var clicked = $(this);
      var cnt = clicked.siblings("span").text();
      clicked.toggleClass("fas");
      clicked.toggleClass("far")
      newCnt = updateCount(cnt);
      clicked.siblings("span").text(newCnt);
      // alert(updateCount(newCnt));
  });

  $(".publish-btn").click(function() {
      sessionStorage.setItem("locked", "no");
  })

  function updateCount(cnt) {
    if(cnt == "0") {
      return "1";
    }
    else {
      return "0";
    }
  }

  $(function () {
    $('[data-toggle="popover"]').popover();
  });

});
