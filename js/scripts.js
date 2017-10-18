$(document).ready(function(){
  $("#confirm-btn").click(function(event){
    event.preventDefault();
    //collect info
    var name = $("#name").val();
    var phone = $("#phone").val();
    var address = $("#address").val();
    //display info
    $(".name").text(name);
    $(".phone").text(phone);
    $(".address").text(address);
    //reveal card
    $("#hide").show(1000);
    $("#show").hide();
  });//click function end

});//ready function end
