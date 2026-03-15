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
const counter = document.getElementById("memberCount");

let count = 0;
let target = 120;

function updateCounter(){

if(count < target){

count++;
counter.innerText = count;

setTimeout(updateCounter,20);

}

}

updateCounter();
