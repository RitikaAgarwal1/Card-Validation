function submitform(){
	if (data == null){
		var data = [];
		var obj = {};
	}
	var cardnumber = document.getElementById("cardnumber").value;
	var expiry = document.getElementById("expiry").value;
	var cvv = document.getElementById("cvv").value;
	var error = document.getElementsByClassName("msg");
	
	if(cardnumber.length !== 16){
		document.getElementById("cardnumber").style.border = "1px solid red";
		error[0].innerHTML = "Incorrect Card Number";
	}else{
		document.getElementById("cardnumber").style.border = "none";
		error[0].innerHTML = "";
		var cnumber = {"Card Number": cardnumber};
		// localStorage.setItem("Card Number", cardnumber);
		var first = true;
	}
	
	if(expiry.length != 5){
		document.getElementById("expiry").style.border = "1px solid red";
		error[1].innerHTML = "Incorrect Input";
	} else if(expiry.indexOf("/")!= 2){
		document.getElementById("expiry").style.border = "1px solid red";
		error[1].innerHTML = "/ is missing between Month and Year";
	}
	else{
		document.getElementById("expiry").style.border = "none";
		error[1].innerHTML = "";
		var expirydate = {"Expiry": expiry};
		// localStorage.setItem("Expiry Year", expiry);
		var second = true;
	}
	
	if(cvv.length !== 3){
		document.getElementById("cvv").style.border = "1px solid red";
		error[2].innerHTML = "Incorrect CVV";
	}else{
		document.getElementById("cvv").style.border = "none";
		error[2].innerHTML = "";
		// localStorage.setItem("CVV", cvv);
		var cvvdata = {"CVV": cvv};
		obj = Object.assign({}, cnumber, expirydate);
		data.push(obj);
		var third = true;
	}
	
	if(first == true && second == true && third == true){
	localStorage.setItem("data", JSON.stringify(data))};
	console.log(data);
}
