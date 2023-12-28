function sendMail(){
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
      emailjs.send("service_hc42hyp","template_1ao4v29" , parms).then (alert("Your message sent successfully!!"))
     
  
  }