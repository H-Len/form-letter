$()function(){
  $("#getName").submit(function(event){
    var addressNameInput = $("input#name").val();

    $("name").text(addressNameInput);

    $("#letter").show();

    event.preventDefault();
  });
});
