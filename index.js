// Code your solution in this file!



//function distanceFromHqInBlocks (blockCustomer)
const distanceFromHqInBlocks = function(blockCustomer){

    
    let blockDistance;
    const hqBlock = 42;

    if (blockCustomer >= 43) {
        
        blockDistance = blockCustomer - hqBlock
        return blockDistance
    }

    else if (blockCustomer <= 42) {
        blockDistance = hqBlock - blockCustomer
        return blockDistance
}

}

function distanceFromHqInFeet(blockCustomer) {
    let numberOfBlocks = distanceFromHqInBlocks(blockCustomer);
    return numberOfBlocks * 264;
}



function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start) * 264)

}

    
function calculatesFarePrice (start, destination) {
    let feetTraveled = distanceTravelledInFeet(start, destination);


    if(feetTraveled <= 400){
        return 0
    }
    else if(feetTraveled > 400 && feetTraveled <= 2000){
        return .02 * (feetTraveled - 400);

    }
    else if(feetTraveled > 2000 && feetTraveled < 2500){
        return 25;
    } else if(feetTraveled > 2500){
        return "cannot travel that far"
    }

}












