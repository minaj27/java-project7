function handleCalculate(){
    var cp=document.getElementById("cp").value;
    var sp=document.getElementById("sp").value;

    var profit =sp-cp;
    alert(profit);
    handleClear();

}
function handleClear(){
    document.getElementById("cp").value ="";
    document.getElementById("sp").value ="";
}