//Feet to Mile start
function feetToMile( feet){
    var mile=feet/5280;
    return mile;
}
var fristRunner=feetToMile(25555);
fristRunner=fristRunner.toFixed(3)
console.log("Frist Runner Run:", fristRunner,"Mile");
var secondRunner=feetToMile(60236);
secondRunner=secondRunner.toFixed(3);
console.log("Second Runner Run:",secondRunner,"Mile");
var thirdRunner=feetToMile(60736);
thirdRunner=thirdRunner.toFixed(3);
console.log("Third Runner Run:",thirdRunner,"Mile");

//Feet to Mile End

// Cube Count Start

function woodCalculator(chair, table, bed){
    var chairCubeCount= chair * 1;
    var tableCubeCount= table * 3;
    var bedCubeCount= bed * 5;
    var totalCubeNeed= chairCubeCount + tableCubeCount + bedCubeCount;
    return totalCubeNeed;
}
var what= woodCalculator(2,5,9);
console.log("Total Need :", what ,"Cubes");

// Cube Count End

// brickCalculator start
function brickCalculator(floar) {
    if (floar <= 10) {
        var bricks = (floar * 15 * 1000);
        return bricks;
    } else if (floar > 10 && floar <= 20) {
        var bricks = (10 * 15 * 1000) + (floar - 10) * 12 * 1000;
        return bricks;
    } else if (floar > 20) {
        var bricks = (10 * 15 * 1000) + (10 * 12 * 1000) + (floar - 20) * 10 * 1000;
        return bricks;
    }
}
// brickCalculator ends

// Tiny Friend Name  start
function tinyFriend(name){
    var tiny = name[0];
    for(var i = 0; i < name.length; i++){
        var element = name[i];
        if(element < tiny){
            tiny= element;
        }
    }
    return tiny;
}
var friendlist = tinyFriend(['rikta', 'rits', 'riku', 'rik']);
console.log("Most Tiny name is :", friendlist);

// Tiny Friend Name  End

