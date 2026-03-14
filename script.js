(function(){
emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById("joinForm").addEventListener("submit", function(e){

e.preventDefault();

emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",this)
.then(function(){

document.getElementById("message").innerText =
"Application sent successfully!";

}, function(error){

document.getElementById("message").innerText =
"Something went wrong.";

});

});
