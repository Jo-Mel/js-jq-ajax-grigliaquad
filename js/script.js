$(document).ready(function () {
  $(".col").click(function () {
    var box = $(this);

    if (box.text() !== "") {
      alert("Già cliccato");
      return;
    }

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/random/int",
      method: "GET",
      success: function (data) {
        box.html(data.response);

        if (data.response <= 5) {
          // il box diventa giallo
          box.addClass("bg-yellow");
          // box.css('background', 'yellow')
        } else {
          // il box diventa verde
          box.addClass("bg-green");
          // box.css('background' , 'green')
        }
      },
    });
  });
});
