const greet=document.getElementById("greeting");
//greeting
(function(){
    var name=document.createElement("input");
    var span=document.createElement("span");
    name.type="text";
    name.id="username";
    name.placeholder="Enter your name";
    name.classList.add("namebox");
    var message=document.createElement("textarea");
    message.placeholder="Enter your message"
    message.id="message";
    var submitBtn=document.createElement("input");
    submitBtn.type="submit";
    submitBtn.id="submitbtn";
    span.id="error"
    greet.appendChild(name);
    greet.appendChild(span);
    greet.appendChild(message);
    greet.appendChild(submitBtn);
})();
//submit button
$("#submitbtn").click(function(e){
    e.preventDefault;
    var email=document.querySelector("#username").value;
    var message=document.getElementById("message").value;
    if ((email=="")&&(message=="")){
        document.getElementById("error").innerHTML="This field is required";
    }
    else{
        document.getElementById("error").innerHTML="";
    }
    console.log(email);
});

//clear my cart
$('#clearCart').click(function(){
      localStorage.clear();
      $('.products').html('');
      $('p').text('');
    });
    const cartItems = localStorage.getItem('myCart');
    let subtotal = 0;
    if(cartItems){
      let items = JSON.parse(cartItems);
      items.forEach(function(item) {
        $('.products').append(`<div class='product'>
                                <img src="images/c1.jpg">
                                <h3 class='name'>${item.name}</h3>
                                <p>Unit Price: $ <span class='price'>${item.cost}</span></p>
                                <span id='qty'>${item.qty}</span>
                             </div>`);
        const qty = parseInt(item.qty);
        const cost = parseInt(item.cost);
        subtotal += qty * cost;
      });
      const tax = 0.13 * subtotal;
      const total = subtotal + tax;
      $('.subtotal').text('Subtotal: $' + subtotal);
      $('.tax').text('Tax (13%): $' + tax);
      $('.total').text('Amount to be paid: $' + total);
    } else {
      document.write("<h3>Empty Cart</h3>")
    }
