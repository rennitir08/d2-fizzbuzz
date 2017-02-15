var todayIs = 'Tuesday';

if (todayIs === 'Tuesday') {
    console.log('Happy Valentines Day!');
}
else if (todayIs === 'Wednesday') {
    console.log('Happy Humpday!');
}
else {
    console.log('Happy' + todayIs + '!');
}
var todayIsTuesday = true;
// console.log(typeof todayIsTuesday);
var counter = 0;
// counter++;
// counter += 2;
// console.log(counter);
if(counter >= 2) {
    console.log('Correct answer.');
}
var slicesOfPizza = 12;
if (slicesOfPizza % 3 === 0 || slicesOfPizza % 5 === 0){
    console.log('There\'s enough for all of you.');
}
else {
    console.log('Not going to divide evenly.');
}
var temperature = 50;

switch (temperature){
    case 50:
        console.log('Getting Warmer');
        break;
    case 60:
        console.log('Getting closer to Spring.');
        break;
    case 70:
        console.log('Spring is here.');
        break;
    default:
        console.log('Who knows.Welcome to Indiana.');

var pets =['dog','cat','hamster','fish',"bird",'snake','tiger'];
for (var i = 0; i < 20; i++){
    document.getElementById('robots').innerHTML += `<img src="https://robohash.org/indy${i}" />`;
}

function capitalize(word) {
    return word.toUpperCase();
}
var result = capitalize('Almost lunch time.');
console.log(result);