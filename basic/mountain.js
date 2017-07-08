function tall_mountain(mountainArray) {

    mountainArray.sort().reverse();
    return mountainArray[0];
    
}

module.exports = tall_mountain;