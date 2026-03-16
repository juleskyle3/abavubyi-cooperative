const form = document.getElementById("joinForm");

form.addEventListener("submit", async function(e){

e.preventDefault();

let data = {
name: form.name.value,
email: form.email.value,
phone: form.phone.value,
dob: form.dob.value,
reason: form.reason.value,
fee: form.fee.value,
paymentMethod: form.paymentMethod.value,
transaction: form.transaction.value
};

await fetch("https://script.google.com/macros/s/AKfycbzIIjxu5fUHIPRCzfSPAbuxJWRlb2RmGKxSDAYq3B92HqYiRlo4OsL3O1MXyDA7kcavoA/exec",{

method:"POST",
body:JSON.stringify(data)

});

alert("Application submitted successfully!");

form.reset();

});
