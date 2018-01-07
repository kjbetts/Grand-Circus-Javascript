//EXERCISE 1

var number=prompt("Enter A Number > 5");
var sum = 0;
for(var i = 0; i <= number; i++){
  sum = sum + i;
  console.log(sum)
}

console.log(sum)


//EXERCISE 2
//
var text=prompt("Do you want to play ?");
var word='';
 do{
  word = word + ' ' + prompt("Enter a Word.");
  text=prompt("Do you want to play ?");
  } while(text==="yes")

  console.log(word)

  //EXERCISE 3
  var text2=prompt("Would like to print your name ?")
  var name;
  var excelmation ='';
  do{
    name=prompt("Print your Name.");
    console.log("Hello my name is " + name + excelmation);
    text2=prompt("Would like to print your name ?");
    excelmation= excelmation + '!'
    } while(text2==="yes")

  //EXERCISE 4

  var text3=prompt("What Time of Day is It?")
  var meal;
  var suggestion;
  if(text3==="morning"){
    meal="breakfast";
    suggestion="eggs and toast"
  } else if (text3==="noon") {
    meal="lunch"
    suggestion="a salad"
  } else{meal="dinner"
        suggestion="chicken and rice"}

console.log("Since it is " +text3 + ", you should be eating " +meal+ ". We suggest "+ suggestion+ ".")
