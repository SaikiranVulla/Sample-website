

function calculatetip()
{
  var billamount= document.getElementById("billamount").value;
  var servicequality = document.getElementById("servicequality").value;
  var numPeople = document.getElementById("totalpeople").value;
  if(billamount === "" || servicequality == "") {
    alert("Please enter any value");
    return;
}  

if(numPeople === "" || numPeople <= 1){
  numPeople = 1;
  document.getElementById("each").style.display = "block";
}
else{
  document.getElementById("each").style.display = "block";
}
var total = (billamount * servicequality) / numPeople;
document.getElementById("totaltip").style.display = "block";
document.getElementById("tip").innerHTML = total;

}


document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("calculate").onclick = function() { calculatetip();};
