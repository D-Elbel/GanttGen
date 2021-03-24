function generateChartFCFS(){
    grabProcessValues();
    generateFCFS();
    setBlockWidths();
}

function generateChartSJF(){
    grabProcessValuesSJF();
    generateSJF();
    setBlockWidthsSJF();
}


function algoPick(){

    var selectedFCFS = document.getElementById("fcfs").checked;
    var selectedSJF = document.getElementById("sjf").checked;
    
    if(selectedFCFS == true){
        console.log("Slected chart is FCFS");
        addInput();
        //generateChartFCFS();
    }
    
    else if(selectedSJF == true){
        addInput();
        console.log("Selected chart is SJF");
    }
}


function chartGenerator(){

    var selectedFCFS = document.getElementById("fcfs").checked;
    var selectedSJF = document.getElementById("sjf").checked;

    if(selectedFCFS == true){
        console.log("Building First Come First Served Chart");
        generateChartFCFS();
        //generateChartFCFS();
    }
    
    else if(selectedSJF == true){
        generateChartSJF();
        console.log("Selected chart is SJF");
    }
}



