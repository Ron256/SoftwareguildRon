function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["sampleform"].elements.length; 
        loopCounter++) {
        if (document.forms["sampleform"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["sampleform"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

function resetForm() {
    clearErrors();
    document.forms["sampleform"]["inputStartingNo"].value = "";
    document.forms["sampleform"]["inputEndingNo"].value = "";
	document.forms["sampleform"]["inputStepNo"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Display Evens";
    document.forms["numberFun"]["inputStartingNo"].focus();
}



function validateitems() {
	clearErrors();
	var inputStartingNo = document.forms["sampleform"]["inputStartingNo"].value;
	var inputEndingNo   = document.forms["sampleform"]["inputEndingNo"].value;
	var inputStepNo     = document.forms["sampleform"]["inputStepNo"].value;
	if (inputStartingNo == "" || isNaN(inputStartingNo)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["sampleform"]["inputStartingNo"]
           .parentElement.className = "form-group has-error";
        document.forms["sampleform"]["inputStartingNo"].focus();
        return false;
    }
	
	if (inputEndingNo == "" || isNaN(inputEndingNo)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["sampleform"]["inputEndingNo"]
           .parentElement.className = "form-group has-error";
        document.forms["sampleform"]["inputEndingNo"].focus();
        return false;
    }
	
	/*if (inputStartingNo >= inputEndingNo) {
		alert("Ending Number is less than or equal to the starting number.");
        document.forms["sampleform"]["inputEndingNo"]
           .parentElement.className = "form-group has-error";
        document.forms["sampleform"]["inputEndingNo"].focus();
        return false;
	}
	*/
	
	if (inputStepNo == "" || isNaN(inputStepNo)) {
        alert("Step must be filled in with a number.");
        document.forms["sampleform"]["inputStepNo"]
           .parentElement.className = "form-group has-error";
        document.forms["sampleform"]["inputStepNo"].focus();
        return false;
    }
	else if (inputStepNo < 0) {
		alert("Step is not a positive number");
		document.forms["sampleform"]["inputStepNo"]
           .parentElement.className = "form-group has-error";
        document.forms["sampleform"]["inputStepNo"].focus();
        return false;
	}
	
	 function register(inputStartingNo, inputEndingNo, inputStepNo) {
		var snum    = inputStartingNo; //4
		var endnum  = inputEndingNo;  //20
		var step 	= inputStepNo;    //3
		
		var numbers = [];
		
		var cnt = 0;
		
		while (snum < endnum) 
		{ 
			numbers[cnt] = snum;
			snum += step;
			cnt++;
		}
		//array populated [4, 7, 10, 13, 16, 19]
		
		var evenNos = [];
		
		for (var i = 0; i < numbers.length; i++) 
		{  
		if(numbers[i] % 2 === 0) { 
			evenNos.push(numbers[i]); 
			} 
		}
		
		var constText = "Here are the even numbers between " + snum + "and " + endnum + "by " + step + "'s " + "<br>";
		
		for(var i = 0; i < evenNos.length; i++) 
		{
			constText += evenNos[i] + "<br>"; 
		}
		return constText;
	 }
	document.getElementById("results").style.display = "block";
	document.getElementById("results").innerHTML = register(inputStartingNo, inputEndingNo, inputStepNo);
	
  return false;
}


/*function populateArray(inputStartingNo, inputEndingNo, inputStepNo) {
	var snum    = inputStartingNo; //4
	var endnum  = inputEndingNo;  //20
	var step 	= inputStepNo;    //3
	
	var numbers = [];
	
	var cnt = 0;
	
	while (snum < endnum) { numbers[cnt] = snum; snum += step; cnt++;}
	//array populated [4, 7, 10, 13, 16, 19]
	
	var evenNos = [];
	
	for (var i = 0; i < numbers.length; i++) {  
	if(numbers[i] % 2 === 0) { 
		evenNos.push(numbers[i]); 
		} 
	}
	
	var constText = "Here are the even numbers between " + snum + "and " + endnum + "by " + step + "'s " + "<br>";
	
	for(var i = 0; i < evenNos.length; i++) {
		constText += evenNos[i] + "<br>"; 
		}
	
}
*/





	