/*// "let" for variable
let name='Benny';
console.log(name);
name="Lazarus";
console.log(name);*/


/*//"const" for constant variable
const pi=3.14;
console.log(pi);
pi=3.12;
console.log(pi);*/


/*//Primitive data types
let name='Harry Potter';//string
console.log(name);
let age='11';//string
console.log(age);
let option1=true;//boolean
let option2=false;//boolean
let height;//undefined
console.log(height);
console.log(option1, option2);
let eyecolor=null;//null
let randomNumber=35;//number*/

//Reference Data Types
/*//Array
let shopping=[];
shopping=['paintbrush', 'colorPallette', 'canvas'];
console.log(shopping);

let numbers=[];
numbers=[1,3,2,5,7,4];
console.log(numbers[0] + numbers[1]);//Adding elements in an array
console.log(numbers.sort());//Sorting elements in an array low to high
numbers.push(6);//adding an element to an array
console.log(numbers);

let mix=[];//mixed array
mix=['one',1,'two',2];
console.log(mix);*/

/*//Objects
let pen={
    type: 'ball point',
    color: 'black',
    cost: 10,
};
console.log(pen.cost);//Dot Notation
console.log(pen['cost']);

let emily={
    age:16,
    school:'DPS',
    class: '10th std',
    subjects:['physics', 'chemistry', 'biology', 'maths']
};

console.log(emily.subjects[1]);*/

//Functions
/*function hello(){
    console.log('Hello');
}
hello();

function product(a, b){
    return a*b;
}
x = product(2,6);
console.log(x);*/

/*//Conditional Statements
//If Statement
let numbers=[];
numbers=[1,2,1,2,3,2,3,1];
if(numbers[0]==numbers[2]){
    console.log('Correct');
}
//Else If Statement
if(numbers[0]==numbers[4]){
    console.log('Correct');
}
else{
    console.log('wrong, try again');
}

//Else if for two conditions to be true
if(numbers[0]==numbers[2] && numbers[2]==numbers[6]){
    console.log('Correct');
}
else {
    console.log('Wrong, try again');
}
//Else if for any one conditon to be true
if(numbers[0]==numbers[2] || numbers[2]==numbers[6]){
    console.log('Correct');
}
else {
    console.log('Wrong, try again');
}*/

//Loops
//While Loop
/*let i=0;
while(i<5){
    console.log("The number is "+ i);
    i++;
}*/

//do while
/*let i=0;
do{
    console.log("The number is " + i);
    i++;
}
while(i>5);*/

/*//For Loop
for(let i=0;i<5;i++){
    console.log("the number is " + i);
}

for(let a=0;a<51;a++) {
    console.log(a + ". I am Sorry.");
}*/

/*//Switch Case
let game="football";
switch (game) {
    case "football":
        console.log("I love football");
        break;
    case "basketball":
        console.log("Basketball is hard.")
        break;
    case "cricket":
        console.log("I am a huge lover of cricket");
        break;
    case "throwball":
        console.log("I hate throwball");
        break;
    default:
        console.log("I like other games");
        break;
}*/