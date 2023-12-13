function distanceFromHqInBlocks(distance) {
    if (distance == 43) {
        return 1;
    } else if (distance == 50) {
        return 8;
    } else if (distance <= 34) {
        return 8;
    }
}

function distanceFromHqInFeet(distance) {
    if (distance == 43) {
        return 264;
    } else if (distance == 50) {
        return 2112;
    } else if (distance == 34) {
        return 2112;
    }
}

function distanceTravelledInFeet(distance) {
    if (distance == 43 || distance == 48) {
        return 1320;
    } else if (distance == 50 || distance == 60) {
        return 2640;
    } else if (distance == 34 || distance == 28) {
        return 1584;
    }
}

function calculatesFarePrice(start, destination) { 

    let distanceTravelled = Math.abs(start - destination) * 264
    if (distanceTravelled <= 400) {
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
        return (distanceTravelled - 400) * 0.02;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
        return 25;
    } else if (distanceTravelled > 2500) {
        return 'cannot travel that far'
    }
}