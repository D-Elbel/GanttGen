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
        arrivalTimeInput.id = ("arrival" + processCounter);
    
        //Creating input field for burst time
        var burstTimeLabel = document.createElement("label");
        var burstTimeLabelText= document.createTextNode("P" + processCounter + " Burst Time:");
        burstTimeLabel.appendChild(burstTimeLabelText);
        var burstTimeInput = document.createElement("input");
        burstTimeInput.id = ("burst" + processCounter);
        burstTimeInput.value = "";
         
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



var burstValues = [];
var arrivalValues = [];

var totalTime = 0;

function grabProcessValues(){

   var numberOfProcesses = document.getElementById("numberOfPros").value;
   console.log(numberOfProcesses);
   
   var currentTime = 0;
   


   for(var z = 1; z <= numberOfProcesses; z++){
       var currentTime = document.getElementById("burst" + z).value;
       currentTime = parseInt(currentTime, 10);
       burstValues.push(currentTime);

      

       totalTime = totalTime + currentTime;
      

       var currentArrival = document.getElementById("arrival" + z).value;
       currentArrival = parseInt(currentArrival, 10);
       arrivalValues.push(currentArrival);


       
   }


}

var totalBurstTime = 0;

for(var l = 0; l <= burstValues.length; l++){
    totalBurstTime = totalBurstTime + burstValues[l];    
}

//Setting the width of <td>s based on percentage of total time
function setBlockWidths(){

    var numberOfProcesses = document.getElementById("numberOfPros").value;
    var currentBlock;

    var chartTime = 0;

    for(var x = 0; x < numberOfProcesses; x++){

        
        currentBlock = document.getElementById("block" + (x + 1)).style.width = (burstValues[x] / totalTime * 100) + "%";
        currentBlock = document.getElementById("block" + (x + 1)).style.backgroundColor = "rgb(209, 209, 209)";

        var pBlockLabel= document.createTextNode("P" + (x + 1) + " " + chartTime + " to " + (chartTime + burstValues[x]));
        document.getElementById("block" + (x + 1)).appendChild(pBlockLabel);
        chartTime = chartTime + burstValues[x];
    }

}

//Creating the <td>s inside the existing <tr>

  function generateFCFS(){

    var numberOfProcesses = document.getElementById("numberOfPros").value;
      
    for(var j = 0; j < numberOfProcesses; j++){

        var fcfsRow = document.getElementById("FCFSchart");
        var fcfsTD = document.createElement("td");
        fcfsTD.id = ("block" + (j + 1));

        fcfsRow.appendChild(fcfsTD);
        }  

  }


function generate(){
    grabProcessValues();
    generateFCFS();
    setBlockWidths();
}