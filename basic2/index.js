document.getElementById("Submit").onclick = function(){
    if(document.getElementById("Subscribe").checked){
        document.getElementById("subscription-status").innerText = "Thanks for subscribing";
        if(document.getElementById("Visa").checked){
            document.getElementById("Payment-mode").innerText = "Redirecting you to Visa Page...";
        }
        else if(document.getElementById("Mastercard").checked){
            document.getElementById("Payment-mode").innerText = "Redirecting you to Mastercard Page...";
        }
        else if(document.getElementById("Paypal").checked){
            document.getElementById("Payment-mode").innerText = "Redirecting you to Paypal Page...";
        }
        else{
            document.getElementById("Payment-mode").innerText = "Please select a payment option to continue";
        }
    }
    else if (document.getElementById("dontsubscribe").checked){
        document.getElementById("subscription-status").innerText = "Uh oh! We are sorry that you dont wish to subscribe";
        document.getElementById("Payment-mode").innerText = "";
    }
    else{
        document.getElementById("subscription-status").innerText = "Please select whether you would like to subscribe or not";
    }
}