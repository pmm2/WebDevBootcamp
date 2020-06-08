$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(300, function () {
      this.remove();
    });

  e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
  if (e.which === 13) {
    var task = $(this).val();
    addTask(task);
    $(this).val("");
  }
});

function addTask(string) {
  $("ul").append("<li><span>X</span> " + string + "</li>");
}
