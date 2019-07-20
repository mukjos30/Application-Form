function myFunction() {
var DD=document.getElementById("day").value;// parseInt(prompt("enter Born Day "));
var MM= document.getElementById("month").value;//parseInt(prompt("enter Born Month"));
var YY=document.getElementById("year").value; //parseInt(prompt("enter Born Year"));
var CC=document.getElementById("century").value;//parseInt(prompt("enter Born Century"));
var gender =document.getElementById("gender").value;// prompt("enter gender");

// var y= getFullYear();
// YY= parseInt(y/100)+1;
var dayOfWeeka =(( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD) % 7;
var dayOfWeek= dayOfWeeka.toFixed(0);
var array=[0,1,2,3,4,5,6];
if(dayOfWeek==array[0] && gender=='female'){
document.getElementById("ans").innerHTML="Akosua";
}
 else if(dayOfWeek==array[1]&& gender=='female'){
  document.getElementById("ans").innerHTML="Adwoa";
} 
else if(dayOfWeek==array[2] && gender=='female'){
  document.getElementById("ans").innerHTML="Abenaa";
}
else if(dayOfWeek==array[3] && gender=='female'){
  document.getElementById("ans").innerHTML=" Akua";
}
else if(dayOfWeek==array[4] && gender=='female'){
  document.getElementById("ans").innerHTML="Yaa";
}
else if(dayOfWeek==array[5] && gender=='female'){
  document.getElementById("ans").innerHTML= "Afua";
}
else if(dayOfWeek==array[6] && gender=='female'){
  document.getElementById("ans").innerHTMl= "Ama";
  
}
else if (dayOfWeek==array[0] && gender=='male'){
  document.getElementById("ans").innerHTML="kwasi";
    }
     else if(dayOfWeek==array[1] && gender=='male'){
      document.getElementById("ans").innerHTML="kwado";
  } 
  else if(dayOfWeek==array[2] && gender=='male'){
    document.getElementById("ans").innerHTML=" Kwabena"
  }
  else if(dayOfWeek==array[3] && gender=='male'){
    document.getElementById("ans").innerHTML="Kwaku";
  }
  else if(dayOfWeek==array[4]&& gender=='male'){
    document.getElementById("ans").innerHTML="Yaw";
  }
  else if(dayOfWeek==array[5] && gender=='male'){
    document.getElementById("ans").innerHTML= "Kofi";
  }
  else if(dayOfWeek==array[6] && gender=='male'){
    document.getElementById("ans").innerHTML= " Kwame";
  }
  else{
    alert("invalidDD||MM");
}
}
function deleteItems() {
  localStorage.clear();
}
