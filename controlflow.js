let marks = 85;
if (marks >= 90) {
    console.log(A + grade)

} else if (marks >= 80) {
    console.log("a grade")

} else if (marks >= 70) {
    console.log("B grade")
} else {
    console.log("pass")
}
let day = 5
switch (day) {
    case 1:
        console.log("sunday")
        break;


    case 2:
        console.log("monday")
        break;
    case 3:
        console.log("tuesday")
        break;
    case 4:
        console.log("wedsday")
    case 5:
        console.log("thursday")
    default:
        console.log("invalid")
        break;
}
let i;
for (i = 0; i < 6; i++) {
    console.log(i)
    i++;
}
let j = 0
while (j < 6) {
    console.log(j)
    j++;
}
let colors = ["red", "blue", "green"]
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}
for (let colour of colors)
    console.log(colour)
for(let i=5;i>=0;i--)
    if(i===3){
        continue;
    }else if(i===2){
        break;
    }


console.log(i)

        



