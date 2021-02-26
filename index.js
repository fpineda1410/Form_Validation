var alert_div_id = document.getElementById("alert_div");

var button = document.getElementById("send_button");

button.addEventListener("click", function(event) {

    event.preventDefault();

});

window.onload = function() {
    alert_div_id.style.display="none";

}



window.validateForm = function validateForm() {
    var forms_list = document.getElementsByClassName("form-control");
    console.log (forms_list.length);
    for (var i = 0; i < forms_list.length;i++){
        if (forms_list[i].value == ""){
            alert_div_id.style.display = "block";
            forms_list[i].style.background= "#ffe6e6";
        }
    }
  }

