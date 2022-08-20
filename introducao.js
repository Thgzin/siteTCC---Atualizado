function validate(){
  const username = document.getElementById("name").value;

if(username == ""){
  username.style.border = "1px solid red", 
  username.focus;
  return false;
}
else{
  true;
}
}

function validation(){
  const form = document.getElementById("form");
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


  if (email.match(pattern))
  {
    form.classList.add("valid");
    form.classList.remove("invalid");

  }
  else
  {
  form.classList.add("invalid");
  form.classList.remove("valid");
}
if(email == ""){
  form.classList.remove('invalid');
  form.classList.remove('valid');
}

if  (form.classList == "invalid") {
  document.getElementById('button').disabled = true;

}


}

function success() {
  if(document.getElementById("textsend").value==="") { 
           document.getElementById('button').disabled = true;
           document.getElementById('email').disabled = true;  
       } else { 
           document.getElementById('button').disabled = false;
       }
   }

   
  

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}



