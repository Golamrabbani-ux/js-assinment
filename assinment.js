//Feet To Mile
function feetToMile(feet){
    if(feet < 1){
        // console.log("Please Enter Positive Number");
    }
    else{
        var mile = (feet / 5280).toFixed(5);
        // console.log("Mile: ", mile);
    }
}
miles = feetToMile(1);


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
woodCalculator(1, 5, 10);


//Brick Calculator

function brickCalculator( floor){
    if(floor <= 10){
        brick = (floor * 15)*1000
    }
    else if(floor <= 15 ||10 >floor){
         brick = (floor * 12)*1000
    }
    else{
         brick = (floor * 10)*1000
    }
    return brick
   } 

var totalBrick = brickCalculator(16)
// console.log(totalBrick)

//Tiny Friends
function tinyFriend(friends){
    var shortName = friends[0];
    for(var i=0; i<friends.length; i++){
        var friendName = friends[i];
        if(shortName.length > friendName.length){
            shortName = friendName
        }
    }
    return shortName;
}


var allFriends = ["Abir", "Kobir", "G.Rabbani", "Raihan", "Ali", "Nabila"];
var result = tinyFriend(allFriends);
console.log(result);

