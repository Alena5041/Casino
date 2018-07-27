$(document).ready(function(){
    $("*#game").bind("mouseover", display);
    $("*#game").bind("mouseout", hide);
    $("#flag").click(selectLanguage);
});

function display() {
  $(this).children('.actionContainer').show();
};

function hide() {
  $(this).children('.actionContainer').hide();
};

 
