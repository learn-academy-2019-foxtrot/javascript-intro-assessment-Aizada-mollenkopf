// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// --------------------------- Consider the following variable:

// // 1a. Write the code that determines if there is a 'B' in mantra.
var mantra = "Be the dev"

console.log( mantra.includes("B"));

// // 1b. Write the code that determines if there is an 'x' in mantra.

console.log( mantra.includes("x"));

// // 1c. Write the code that determines if there is a 'v' in mantra.

console.log( mantra.includes("v"));


// 1d. STRETCH: Write a function that can take two arguments - a string and a letter and returns a sentence telling the user if the letter exists within the string.

const existenceReporter=(text,testLetter)=>{
    if (text.search(testLetter)!=-1){
        console.log("this works too, and it mactches")
    }

if (text.indexOf(testLetter) !=-1){
    console.log("Index of is good choice too!")
}
if (text.toLowerCase().includes(testLetter)){
    return`Congrats!${testLetter} exists in the string`
}else{
    return `he he he,${testLetter} is not in the string`
    }
}
console.log(existenceReporter(`a string,s`))
console.log("n\n\n The tests")

// ------------------------------ Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"
function sizer(word1,word2){
    if (word1.lenght>word2.lenght){
        return word1
    }   else{
        return word2
    }
}
console.log(sizer(myDog,myCat))

// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]
 
const joiner=(...words)=>words
console.log("Joiner", joiner(myDog,myCat))


// 2c. STRETCH: Write a function that accepts two variables and returns a string in all lowercase letters. Expected output: "snoopy garfield"

const lowercase=(word1,word2)=>{
    return `${word1.toLowerCase()},${word2.toLowerCase()}`
}
 console.log("lowercase",lowercase(myDog,myCat))

 // ------------------------------ Consider the following variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.
//hint: "logs" in this case means "prints to the terminal console."  This is typically done with a console.log(x), where x is the string, function, etc that you wish to see in the terminal.

for(i=0; i<myMessage.lenght; i++){
     console.log(myMessage[i])
  }


 
// 3b. Write the code that logs each letter of the message using map.
myMessage.split('').map((letter)=>console.log(letter))


// 3c. STRETCH: Write the code that logs each letter of the message using a while loop.

var i=0
while(i<myMessage.length){
    console.log(myMessage[i]);
    i++
}

// 3d. SUPER STRETCH: Write the code that logs each letter of the message using forEach().

myMessage.split('').forEach((letter)=>{
    console.log(letter)
})

// ---------------------------- Consider the following variable:

var testString = "thisisateststring"

// 4a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"
 
const noVowels=(string)=>{
    if(typeof string !='string'){
        return("BOOOM")
    }   else{
        const vowels=['a','e','i','o','u'];
        const letters=string.split('').filter((letter)=>{
            return !vowels.includes(letter)
        })
        return letters.join('')
    }
}
console.log("noVowels",  noVowels(testString))
console.log(" noVowels BOOOM", noVowels(222))


// 4b. STRETCH: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.
const vowelKiller2 = (string) => {
  let noVowels = ""
  for (var i = 0; i < testString.length; i++) {
    if (typeof string !== "string") {
      return "this is a test error message"
    } else if (vowels.includes(string[i].toLowerCase()) === false) {
      noVowels += string[i]
    } else {
      continue
    }
  }
  return noVowels
}

// ------------------------------- Consider the following variable:

var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

// 5a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var animal = toonimals.filter(value => value.animal === "cat")
console.log(animal)

//5b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

var namesOfNonCats=toonimals.filter((value)=>value.animal!=="cat").map((value)=>value.name)
console.log(namesOfNonCats)



//5c. STRETCH: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"
const toonimalReporter=function(object){
return`${object.name} is a ${object.animal}`
}   
toonimalCollectionReporter=function(toonimal){
    return toonimals.map((toonimal)=>toonimalReporter(toonimal))
}
console.log("toonimal reporter", toonimalCollectionReporter(toonimals))



