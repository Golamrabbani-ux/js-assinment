//Feet To Mile
function feetToMile(feet){
    if(feet < 1){
        // console.log("Please Enter Positive Number");
    }
    else{
        var mile = (feet / 5280).toFixed(5);
        // console.log(mile);
    }
}
miles = feetToMile(-1);


// Wood Calculator
function woodCalculator(chair, table, bed){
    if(chair > 0 && table > 0 && bed > 0){
        var totalChair = chair * 1;
        var totalTable = table * 3;
        var totalBed = bed * 5;
        var totalWood = totalChair + totalTable + totalBed;
        // console.log("Total Wood: ", totalWood)
    }
    else{
        // console.log("Please Enter Positive Number.....");
    }
}
woodCalculator(1, 1, 1);




