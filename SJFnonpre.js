var processCounterSJF = 1;
var numberOfProcessesSJF;

function addInputSJF(){
    
    var numberOfProcessesSJF = document.getElementById("numberOfPros").value;
    console.log(numberOfProcessesSJF + " processes");
    
    for(var i = 0; i < numberOfProcessesSJF; i++){

        var inputDiv = document.createElement("div");
  
        //Appending the new DIV to parent DIV
        var element = document.getElementById("chartValuesDiv");
        element.appendChild(inputDiv);
        inputDiv.className = "processInputs";
      
       
        //Creating input field for arrival time
        var arrivalTimeLabel = document.createElement("label");
        var arrivalTimeLabelText= document.createTextNode("P" + processCounterSJF + " Arrival Time:");
        arrivalTimeLabel.appendChild(arrivalTimeLabelText);
        var arrivalTimeInput = document.createElement("input");
        arrivalTimeInput.id = ("arrival" + processCounterSJF);
        arrivalTimeInput.className = "timeInput";
         
    
        //Creating input field for burst time
        var burstTimeLabel = document.createElement("label");
        var burstTimeLabelText= document.createTextNode("P" + processCounterSJF + " Burst Time:");
        burstTimeLabel.appendChild(burstTimeLabelText);
        var burstTimeInput = document.createElement("input");
        burstTimeInput.id = ("burst" + processCounterSJF);
        burstTimeInput.value = "";
        burstTimeInput.className = "timeInput"; 

        var formDivs = document.getElementById("chartValuesDiv").getElementsByTagName("div");
        var newDiv = formDivs[formDivs.length - 1];
    
        //Appending arrival time inputs
        newDiv.appendChild(arrivalTimeLabel);
        newDiv.appendChild(arrivalTimeInput);
    
        //Appending burst time inputs
        newDiv.appendChild(burstTimeLabel);
        newDiv.appendChild(burstTimeInput);

        processCounterSJF++;
    }

}


var processObjects = [];

var totalTimeSJF = 0;

function grabProcessValuesSJF(){

  

   var numberOfProcessesSJF = document.getElementById("numberOfPros").value;
   document.getElementById("numberOfPros").min = "0";
   console.log(numberOfProcessesSJF);
   
   var currentTime = 0;
   
   for(var z = 1; z <= numberOfProcessesSJF; z++){

    var processObect = {name: "", arrival: 0 , burst: 0};
      
    processObect.name = ("P" + z)
    
    var currentTime = document.getElementById("burst" + z).value;
       currentTime = parseInt(currentTime, 10);
       processObect.burst =  currentTime;
       
       totalTimeSJF = totalTimeSJF + currentTime;
       
       var currentArrival = document.getElementById("arrival" + z).value;
       currentArrival = parseInt(currentArrival, 10);
       
       processObect.arrival = currentArrival;

       processObjects.push(processObect);
    }

}


var waitTimesSJF = [];
var turaroundTimesSJF = [];
var avgTurnaroundSJF = 0;
var avgWait = 0;
var totalWait = 0;
var totalTurnaround = 0;
//Setting the width of <td>s based on percentage of total time
function setBlockWidthsSJF(){

    var numberOfProcessesSJF = document.getElementById("numberOfPros").value;
    var currentBlock;

    var chartTime = 0;
    //var avgWait = 0;
    var currentExecTime =  0;
    

    for(var x = 0; x < numberOfProcessesSJF; x++){

        

        currentBlock = document.getElementById("block" + (x + 1)).style.width = (burstValuesSJF[x] / totalTimeSJF * 100) + "%";
        currentBlock = document.getElementById("block" + (x + 1)).style.backgroundColor = "rgb(209, 209, 209)";

        var pBlockLabel= document.createTextNode("P" + (x + 1) + " " + chartTime + " to " + (chartTime + burstValuesSJF[x]) + " Wait Time:" + (chartTime - arrivalValues[x]));
        document.getElementById("block" + (x + 1)).appendChild(pBlockLabel);
        waitTimesSJF.push(chartTime - arrivalValues[x]);
        
        turaroundTimesSJF.push(burstValuesSJF[x] + waitTimesSJF[x]);
        
        
        chartTime = chartTime + burstValuesSJF[x];

        
        
    }

    for(var p  = 0; p < waitTimesSJF.length; p++){
        totalWait = totalWait + waitTimesSJF[p];
        console.log("Total wait: " + totalWait + "Current Wait Time: " + waitTimesSJF[p]);

        totalTurnaround = totalTurnaround + turaroundTimesSJF[p]; 
        //console.log(totalWait);
        }
    

    avgWait = totalWait / waitTimesSJF.length;
    avgTurnaroundSJF = totalTurnaround / turaroundTimesSJF.length;

    document.getElementById("avgWait").innerHTML = ("Average wait time: " + avgWait.toFixed(2));
    document.getElementById("avgTurnaround").innerHTML = ("Average turnaround time: " + avgTurnaroundSJF.toFixed(2));
}

//Creating the <td>s inside the existing <tr>

  function generateSJF(){

    var numberOfProcessesSJF = document.getElementById("numberOfPros").value;
      
    for(var j = 0; j < numberOfProcessesSJF; j++){

        var fcfsRow = document.getElementById("FCFSchart");
        var fcfsTD = document.createElement("td");
        fcfsTD.id = ("block" + (j + 1));

        fcfsRow.appendChild(fcfsTD);
        }  

  }

