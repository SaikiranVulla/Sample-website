document.getElementById("totaltip").style.display = "none";
document.getElementById("container").onclick = function() { calculatetip();};

function calculatetip()
{
  var billamount= document.getElementById("billamount").value;
  var servicequality = document.getElementById("servicequality").value;
  var numPeople = document.getElementById("totalmember").value;
  if(billamount == "" || servicequality == "") {
    window.alert("Please enter any value");
    return;
}  

if(numPeople == "" || numPeople <= 1){
  numPeople = 1;
  document.getElementById("totaltip").style.display = "none";
  document.getElementById("each").style.display = "block";
}
else{
  document.getElementById("each").style.display = "block";
}
var total = (billamount * servicequality) / totalmember;
document.getElementById("totaltip").style.display = "block";
document.getElementById("tip").innerHTML = total;

}