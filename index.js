const headquarters = 42
const distanceFromHqInBlocks = function(pickupLocation) {
    if (pickupLocation>headquarters){
        return pickupLocation - headquarters
    }
    else if (pickupLocation<headquarters) {
        return headquarters - pickupLocation
    }
}

const distanceFromHqInFeet = function(blocks) {
   
    return (distanceFromHqInBlocks(blocks) * 264)
}

const distanceTravelledInFeet = function(startingBlock, endingBlock) {
    console.log("calculating distance in feet")
    if (endingBlock>startingBlock) {
        return (endingBlock - startingBlock)*264
    } else if (endingBlock<startingBlock) {
        return (startingBlock - endingBlock)*264
    }   
}

distanceTravelledInFeet(13, 43)

function calculatesFarePrice(starting, destination) {
    const distance = distanceTravelledInFeet(starting, destination)
    if (distance<= 400) {
        return 0
    } else if (distance>400 && distance<2000) {
        return (distance - 400)*0.02
    } else if (distance>2000 && distance<=2500) {
        return 25
    } else if (distance>2500) {
        return "cannot travel that far"
    }
}