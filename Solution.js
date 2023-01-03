function apartmentHunting(blocks, reqs) {
let scores = [];
let distances = [];
// Loop to calculate how many requirements are fulfilled in different blocks and add the number in scores array
for(i=0;i<blocks.length;i++){
    let score = 0;
    let block = blocks[i];
    for(let j=0;j<reqs.length;j++){
        let req = reqs[j];
        if(block[req]) score = score + 1;
    }
    scores.push(score)
}

let maxelement = scores[0]; // For checking the maximum element in the scores array
var numberofmaxelement = 0; // Variable to check how many number of maximum elements exist in the scores array
// Loop to find the block which has the greatest number of element in scores array
for(i=1;i<scores.length;i++){
    if(maxelement < scores[i]){
        maxelement = scores[i];
    }
}
// Loop to calculate how many number of maxelements exist in scores array
for(i=0;i<scores.length;i++){
    if(maxelement === scores[i]){
        numberofmaxelement = numberofmaxelement + 1;
    }
}
for(i=0;i<scores.length;i++){
    let distance = 0
    for(let j=0;j<scores.length;j++){
        if(scores[j] === maxelement){
            distance = distance + (j-i)
        }
    }
    // Condition to check if distance is negative and replace it with its absolute value
    if(distance < 0){
        distance = Math.abs(distance);
    }
    distance = parseInt(distance/numberofmaxelement); // Averaging the distance
    distances.push(distance);
}
var result = {
    "Apartment": 0,
    "Distance": distances[0]
}
// Loop to check the least distance of optimum block
for(i=1;i<distances.length;i++){
    if(distances[i] < result["Distance"]){
        result["Apartment"] = i;
        result["Distance"] = distances[i]
    }
}
return result["Apartment"]
}

// Do not edit the line below.
exports.apartmentHunting = apartmentHunting;
