function saveImg(){

    html2canvas(document.getElementById("chartTable")).then(function(canvas) {
   document.body.appendChild(canvas);
   });
 };

var processCounter = 1;
var numberOfProcesses;

//function getNumberOfInputs(){
//    var numberOfProcesses = document.getElementById("numberOfPros").value;
//    console.log(numberOfProcesses + " processes");
//}

function addInput(){

    var numberOfProcesses = document.getElementById("numberOfPros").value;
    console.log(numberOfProcesses + " processes");
    //Creating the new DIV
    
    for(var i = 0; i < numberOfProcesses; i++){

        var inputDiv = document.createElement("div");
  
        //Appending the new DIV to parent DIV
        var element = document.getElementById("chartValuesDiv");
        element.appendChild(inputDiv);
      
       
        //Creating input field for arrival time
        var arrivalTimeLabel = document.createElement("label");
        var arrivalTimeLabelText= document.createTextNode("P" + processCounter + " Arrival Time:");
        arrivalTimeLabel.appendChild(arrivalTimeLabelText);
        var arrivalTimeInput = document.createElement("input");
    
        //Creating input field for burst time
        var burstTimeLabel = document.createElement("label");
        var burstTimeLabelText= document.createTextNode("P" + processCounter + " Burst Time:");
        burstTimeLabel.appendChild(burstTimeLabelText);
        var burstTimeInput = document.createElement("input");
         
        var formDivs = document.getElementById("chartValuesDiv").getElementsByTagName("div");
        var newDiv = formDivs[formDivs.length - 1];
    
        //Appending arrival time inputs
        newDiv.appendChild(arrivalTimeLabel);
        newDiv.appendChild(arrivalTimeInput);
    
        //Appending burst time inputs
        newDiv.appendChild(burstTimeLabel);
        newDiv.appendChild(burstTimeInput);

        processCounter++;
    }

   
  }