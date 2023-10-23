const btnel = document.getElementById("calculat")
const billinput = document.getElementById("bill")
const tipinput = document.getElementById("tip")
const totalspan = document.getElementById("total")


function hj(){
	const billvalue = billinput.value;
	const tipvalue = tipinput.value;
	const totalvalue = billvalue * (1+tipvalue/100);
	totalspan.innerText = totalvalue.toFixed(2)

}

btnel.addEventListener("click",hj)