var dogname = "tam";
var dogweight = 20;
if (dogweight > 15) {
    console.log(dogname + "SAYS WOOF WOOOF")
} else {
    console.log(dogname + "says woof woof")
}

var dogname = "bo";
var dogweight = 17;
if (dogweight > 18) {
    console.log(dogname + "SAYS WOOF WOOF")
} else {
    console.log(dogname + "says woof woof")
}

var dogname = "dust";
var dogweight = 25;
if (dogweight > 18) {
    console.log(dogname + "SAYS WOOF WOOF")
} else {
    console.log(dogname + "says woof woof")
}

var dogname = "sky";
var dogweight = 19;
if (dogweight > 18) {
    console.log(dogname + "SAYS WOOF WOOF")
} else {
    console.log(dogname + "says woof woof")
}



function bark(name, weight) {
    if (weight > 20) {
        console.log(name + "SAYS WOOF WOOF");
    } else{
        console.log(name + "says woof woof");
    }
}

bark("tam", 20);
bark("sky", 19);