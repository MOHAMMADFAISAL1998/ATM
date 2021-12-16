
var count = 1;
var count2 = 1;
var bal = 100000;
document.getElementById("u-submit").addEventListener('click', usubmit)

function wsubmit() {
    xy = document.getElementById("amt").value;
    if (bal > xy) {
        bal = bal - xy;
        let balance = `<h3>Your Account Balance : ${bal}</h3>`
        document.querySelector(".atm-box").innerHTML = balance;
        setTimeout(function(){window.close();},3000);
    }
    else {
        alert("Insaficient Balance")
    }
}

function psubmit() {
    var pass = document.querySelector("#password").value;

    if (pass != "12345") {
        if (count2 < 3) {
            document.getElementById("msg2").innerHTML = `*Please Enter Correct User Name, ${count2} Attempt*`
            count2++;
        }
        else {
            count2 = 1;
            document.querySelector(".atm-box").innerHTML = `<h2>You Cross Maximum Attempt.</h2>`;
            document.getElementById("m-box").style.background = "url('img/outofServices.jpg')";
            document.getElementById("m-box").style.backgroundSize = "cover";
        }

    } else {


        let balance = `
            
                <h3>Your Account Balance : ${bal}</h3>
                <div class="form-outline">
                          <input type="text" name="" id="amt"  class="form-control">
                          <label class="form-label" for="typeEmail">Amount</label>
                        </div>
                          <small id="msg3"></small><br>
                          <button id="w-submit" onclick="wsubmit()" class="btn btn-light btn-rounded">Withdraw</button>`

        document.querySelector(".atm-box").innerHTML = balance;
        document.getElementById("m-box").style.background = "url('img/atm-cash.jpg')";
        document.getElementById("m-box").style.backgroundSize = "cover";
        document.getElementById("m-box").style.color="Yellow";
    }
}




function usubmit() {
    var username = document.querySelector("#username").value;
    if (username != "faisal") {

        if (count < 3) {
            document.getElementById("msg").innerHTML = `*Please Enter Correct User Name, ${count} Attempt*`
            count++;
        }
        else {
            count = 1;
            document.querySelector(".atm-box").innerHTML = `<h2>You Cross Maximum Attempt.</h2>`;
            document.getElementById("m-box").style.background = "url('img/outofServices.jpg')";
            document.getElementById("m-box").style.backgroundSize = "cover";
            //alert("You Cross Maximum Attempt.")

        }
    }
    else {
        let pass = `
                    
                        <div class="form-outline">
                             <input type="text" name="" id="password" ""  class="form-control">
                             <label class="form-label" for="form12">Password</label>
                         </div>
                        
                        <small id="msg2"></small><br>
                        <button id="p-submit" onclick="psubmit()" class="btn btn-light btn-rounded">submit</button>`
        document.querySelector(".atm-box").innerHTML = pass;
        document.getElementById("m-box").style.background = "url('img/pass.jpg')";
        document.getElementById("m-box").style.backgroundSize = "cover";


    }
}
