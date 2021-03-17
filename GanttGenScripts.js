function saveImg(){

    html2canvas(document.getElementById("chartTable")).then(function(canvas) {
   document.body.appendChild(canvas);
   });
 };